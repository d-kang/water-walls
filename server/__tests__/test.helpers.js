const { createRow, createMatrix } = require('../utils/helpers');

describe('createRow', () => {
  it('should create a row of length 1', () => {
    expect(createRow(1))
      .toHaveLength(1);

    expect(createRow(5))
      .toHaveLength(5);

    expect(createRow(10))
      .toHaveLength(10);
  });
  it('it should fill array with 0"s ', () => {
    expect(createRow(1)[0])
      .toBe(0);

    expect(createRow(5)[4])
      .toBe(0);
  });
});


describe('createMatrix', () => {
  it('it should create a matrix NxM', () => {
    expect(createMatrix(1,1))
      .toEqual([[0]]);

    expect(createMatrix(2,2))
      .toEqual([[0, 0], [0, 0]]);

    expect(createMatrix(1,2))
      .toEqual([[0, 0]]);

    expect(createMatrix(5,8))
      .toEqual([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]);
  });
});
