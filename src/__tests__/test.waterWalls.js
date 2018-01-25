const { waterWalls } = require('../waterWalls');


describe('waterWalls tests', () => {
  it('should be a function', () => {
    expect(waterWalls).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(waterWalls([])).toBeInstanceOf(Array);
  });

  it('should return empty array if length is 0', () => {
    expect(waterWalls([])).toEqual([]);
  });

  it('should return empty array if length is 1', () => {
    expect(waterWalls([])).toEqual([]);
  });
})
