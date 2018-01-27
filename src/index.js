const $form = document.getElementById('form');



const $grid = document.getElementsByClassName('grid');


(function(arr) {
  const max = Math.max(...arr);
  for (let i = 0; i < max; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');

    for (let k = 0; k < max; k++) {
      const divCell = document.createElement('div');
      divCell.setAttribute('class', 'cell');
      divRow.append(divCell);
    }

    $grid[0].append(divRow);
  }

})([1, 10, 4, 5, 2, 6]);
