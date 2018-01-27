const { countWaterWalls } = require('./countWaterWalls');
const { createMatrix } = require('./helpers');

const addBlocks = (row, col, arr, matrix) => {
  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (arr[k] - row + i >= 0) {
        matrix[i][k] = 1;
      }
    }
  }
  return matrix;
};

const addWalls = (row, col, waterWalls, matrix) => {
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
  return matrix;
};

const addWater = (row, col, waterBlocks, arr, matrix) => {
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
}

const waterWallsToMatrix = (arr) => {
  const row = Math.max(...arr);
  const col = arr.length;
  const matrix = createMatrix(row, col);
  const { waterWalls, waterBlocks } = countWaterWalls(arr);

  const withBlocks = addBlocks(row, col, arr, matrix);
  console.log({withBlocks});
  const withWalls = addWalls(row, col, waterWalls, withBlocks);
  const withWater = addWater(row, col, waterBlocks, arr, withWalls);

  return withWater;
};



// const waterWallsToMatrix = (arr) => {
//
// }


module.exports = {
  addBlocks,
  addWalls,
  addWater,
  waterWallsToMatrix
};
