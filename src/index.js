const $form = document.getElementById('form');
const $grid = document.getElementsByClassName('grid');

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

const arrayToMatrix = (arr) => {
  const row = Math.max(...arr);
  const col = arr.length;
  const matrix = createMatrix(row, col);

  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (col - i - 2 < arr[k]) {
        matrix[i][k] = 1;
      }
    }
  }

  const waterWalls = [3, 8, 11]

  for (let i = 0; i < row; i++) {
    for (let k = 0; k < col; k++) {
      if (k === waterWalls[0] - 1 && matrix[i][k] === 1) {
        matrix[i][k] = 3;
      }
      if (k === waterWalls[1] - 1 && matrix[i][k] === 1) {
        matrix[i][k] = 3;
      }
    }
  }


  return matrix;
};




const result = arrayToMatrix([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
console.log('result', result);
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

(function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    for (let k = 0; k < col + 1; k++) {
      const divCell = document.createElement('div');
      if (k === col) {
        divCell.setAttribute('class', 'cell numbers');
        divCell.innerText = col - i - 1;
      }
      if (matrix[i][k] === 0) {
        divCell.setAttribute('class', 'cell white');
      }
      if (matrix[i][k] === 1) {
        divCell.setAttribute('class', 'cell grey');
      }
      if (matrix[i][k] === 2) {
        divCell.setAttribute('class', 'cell black');
      }
      if (matrix[i][k] === 3) {
        divCell.setAttribute('class', 'cell cyan');
      }

      divRow.append(divCell);
    }
    $grid[0].append(divRow);
  }

})(waterWalls);
