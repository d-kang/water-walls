const { countWaterWalls } = require('./countWaterWalls');
const { createMatrix } = require('./helpers');

const waterWallsToMatrix = (arr) => {
  const row = Math.max(...arr);
  const col = arr.length;
  const matrix = createMatrix(row, col);
  const { waterWalls, waterBlocks } = countWaterWalls(arr);
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
