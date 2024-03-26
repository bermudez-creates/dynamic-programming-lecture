// Say youre a traveler on a 2D Grid. You begin in the top-left corner and your goal is to travel to the bottom-right.
// You may only move down or right
// In how many ways can you travel to the goal on a grid with dimensions ( m * n) ?

// 1. Write fn() that takes dimensions of the grid
// if grid is a 2 * 3 => salesMan(2,3) === Meaning we can travel to the goal in 3 differ. ways
// right, right, down --- down, right, right --- right, down, right
// the smaller grids can be used as base cases
// if salesMan(3,3) --- We move down and we reach previoud (2,3) grid

// # RECURSIVE STRATEGY
// Recursive functions are tree shaped
// m is number of rows
// n is columns
const salesMan = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  // going left is representaion of going down
  // going right is representation of going right
  // have object for prev... visited
  // have obj for next space
  // get sum of me going down and right
  return salesMan(m - 1, n) + salesMan(n - 1, m);
};

// Time complexity would be exponential O(2^n+m) -- because it would be a binary tree search 2 nodes keep braching off
// Space complecitiy would be O(n+m)

// salesMan(m-1, n) decrease number of rows (Were going down)
// salesMan(n-1, m) decrease number of columns (Were going right)
