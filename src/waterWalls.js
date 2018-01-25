const waterWalls = (walls) => {
  let largestCount = 0;
  let result = [];
  let tempCount = 0;
  let tempArr = [1];

  if (walls.length < 3) { return []; }
  for (var i = 1; i < walls.length - 1; i++) {
    const current = walls[i];
    const maxLeft = Math.max(...walls.slice(0, i));
    const maxRight = Math.max(...walls.slice(i + 1));
    const minOfMax = Math.min(maxLeft, maxRight);

    if (current < minOfMax) {
      const waterBlocks = minOfMax - current;
      tempCount += waterBlocks;
    } else {
      if (tempCount > largestCount) {
        tempArr.push(i + 1, tempCount);
        largestCount = tempCount;
        result = tempArr;
        tempCount = 0;
        tempArr = [i + 1];
      } else {
        tempCount = 0;
        tempArr = [i + 1];
      }
    }
  }
  return result;
};

module.exports = {
  waterWalls,
};
