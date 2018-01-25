# water-walls
[Mini-app] Water Walls

```Javascript
const waterWalls = (walls) => {
  //constraints: determine which two walls have the most water trapped between them
  // get water blocks on each index
  // keep track of the largest pool of water blocks
}

```

```
input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
output = [3, 8, 11]

complexity:
time: linear
space: linear

strategy
calculate the num of waterblocks on each index by calculating the left and the righ largest, taking the smaller of the two, and subracting from the current if current is smaller. Simultaneously have a check that will keep track of the largest pool size represented by an array of the number of water blocks.

transformation steps
input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
            ^
At index 1
  greatest left is 5
  greatest right is 9
  take smaller value which is 5
  5 is greater than current so subtract
  5 - 3 = 2
  2 water blocks at index 1

  [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]
      ^  ^  ^  ^  ^  ^  ^  ^
      2  0  5  1  3  2  0  1  

  while iterating you can keep track of the pool size
  largestPoolNum = 0
  result = []
  tempNum = 0
  tempArr = []
  start at index 1 you get a pool size of 2

  largestPoolNum = 0
  result = []
  tempNum = 2
  tempArr = [2]
  hit a wall represented by 0 water blocks if tempNum > largestPool then replace largestPool and result with temps, reset the temps to 0 and [] respectively

  largestPoolNum = 2
  result = [2]
  tempNum = 0
  tempArr = []

  continue to end of array and return result
```
