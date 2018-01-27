const { waterWallsToMatrix } = require('../utils/waterWallsToMatrix');

describe('waterWallsToMatrix', () => {
  it('should return correct matrix with pieces', () => {
    const expected = [
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
    const actual = waterWallsToMatrix([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
    expect(actual)
      .toEqual(expected);
  });
});
