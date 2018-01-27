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

module.exports = {
  createRow,
  createMatrix
};
