const $form = document.getElementById('form');
const $grid = document.getElementsByClassName('grid');

const appendWaterGrid = (matrix) => {
  $grid[0].innerHTML = ''
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
};



// '5, 3, 7, 2, 6, 4, 5, 9, 1, 2'
$form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { value } = e.target[0];
  console.log('value', value);


  const payload = value.split(',').map(Number);

  console.log('payload', payload);
  const URL = 'http://localhost:1212/api/waterWalls';
  const post = {
      method: 'POST',
      body: JSON.stringify({ payload }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

  fetch(URL, post)
    .then(res => res.json())
    .then(res => (console.log('res', res), res))
    .then(res => (appendWaterGrid(res), res))
    .catch(err => console.error('err', err));
})
