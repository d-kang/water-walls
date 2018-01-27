const countWaterWalls = (walls) => {
  let largestCount = 0;
  let blackWalls = [];
  let tempCount = 0;
  let tempArr = [1];
  const storeWaterBlocks = [0];
  if (walls.length < 3) { return []; }
  for (var i = 1; i < walls.length; i++) {
    const current = walls[i];
    const maxLeft = Math.max(...walls.slice(0, i));
    const maxRight = Math.max(...walls.slice(i + 1));
    const minOfMax = Math.min(maxLeft, maxRight);

    if (current < minOfMax) {
      const waterBlocks = minOfMax - current;
      tempCount += waterBlocks;
      storeWaterBlocks.push(waterBlocks);
    } else {
      if (tempCount > largestCount) {
        tempArr.push(i + 1, tempCount);
        largestCount = tempCount;
        blackWalls = tempArr;
        tempCount = 0;
        tempArr = [i + 1];
      } else {
        tempCount = 0;
        tempArr = [i + 1];
      }
      storeWaterBlocks.push(0);
    }
  }
  return {
    waterWalls: blackWalls,
    waterBlocks: storeWaterBlocks
  };
};

module.exports = {
  countWaterWalls
};
