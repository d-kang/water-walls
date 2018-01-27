const { countWaterWalls } = require('../countWaterWalls');
const { waterWallsToMatrix } = require('../waterWallsToMatrix');


describe('countWaterWalls tests', () => {
  it('should be a function', () => {
    expect(countWaterWalls)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(countWaterWalls([]))
      .toBeInstanceOf(Array);
  });

  it('should return empty array if length is 0', () => {
    expect(countWaterWalls([]))
      .toEqual([]);
  });

  it('should return empty array if length is 1', () => {
    expect(countWaterWalls([]))
      .toEqual([]);
  });


  it('should return the correct output [3, 8, 11]', () => {
    expect(countWaterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]))
      .toEqual({
        waterWalls: [3, 8, 11],
        waterBlocks: [0, 2, 0, 5, 1, 3, 2, 0, 1, 0]
      });
  });

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
