const { countWaterWalls } = require('./countWaterWalls');

const createRow = (col) => {
  return Array(col).fill(0);
};

const createMatrix = (row, col) => {
  const matrix = [];
  for (var i = 0; i < row; i++) {
    matrix.push(createRow(col));
  }
  return matrix;
};

const waterWallsToMatrix = (arr) => {
  const row = Math.max(...arr);
  const col = arr.length;
  const matrix = createMatrix(row, col);
  const { waterWalls, waterBlocks } = waterWalls(arr);
  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (col - i - 2 < arr[k]) {
        matrix[i][k] = 1;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (k === waterWalls[0] - 1 && matrix[i][k] === 1) {
        matrix[i][k] = 2;
      }
      if (k === waterWalls[1] - 1 && matrix[i][k] === 1) {
        matrix[i][k] = 2;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (waterBlocks[k] > 0) {
        if (i < (row - 1 - arr[k] + 1) && i >= (row - arr[k] - waterBlocks[k])) {
          matrix[i][k] = 3;
        }
      }
    }
  }
  return matrix;
};

module.exports = {
  waterWallsToMatrix
};

const waterWalls = [
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0], // 9
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0], // 8
  [0, 0, 2, 3, 3, 3, 3, 2, 0, 0], // 7
  [0, 0, 2, 3, 1, 3, 3, 2, 0, 0], // 6
  [1, 3, 2, 3, 1, 3, 1, 2, 0, 0], // 5
  [1, 3, 2, 3, 1, 1, 1, 2, 0, 0], // 4
  [1, 1, 2, 3, 1, 1, 1, 2, 0, 0], // 3
  [1, 1, 2, 1, 1, 1, 1, 2, 3, 1], // 2
  [1, 1, 2, 1, 1, 1, 1, 2, 1, 1], // 1
];


const result = arrayToMatrix([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
console.log('isEql', JSON.stringify(waterWalls) === JSON.stringify(result));
