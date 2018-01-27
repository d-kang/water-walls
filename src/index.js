const $form = document.getElementById('form');
const $grid = document.getElementsByClassName('grid');

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
