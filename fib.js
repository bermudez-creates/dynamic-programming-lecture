// recursive program

const ib = (p) => {
  // first 2 numbers are always 1 or 0
  if (p <= 2) return 1;
  //return sum of fib number right before the one we ask for and the number two before
  //sum of previous two numbers
  return ib(p - 1) + ib(p - 2);
};
// 1, 1, 2, 3, 5, 8, 13, 21,
//8 - 1 (7) + 8 - 2 (6)

// console.log(ib(3));
// console.log(ib(4));
// console.log(ib(5));

// memoization
// js object, keys are arg to the function, value will be return value

const fib = (n, memo = {}) => {
  // is current arg n inisde of memo ?
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  // key is always what the argument is [n]
  // as fn progresses we pass the key as well as the memo
  // { 3 : 2 , 4 : 3} -- This way the fn will simply return already stored value
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  // returning same value but also saving it in memo
  return memo[n];
};

// Say youre a traveler on a 2D Grid. You begin in the top-left corner and your goal is to travel to the bottom-right.
// You may only move down or right
// In how many ways can you travel to the goal on a grid with dimensions ( m * n) ?

// 1. Write fn() that takes dimensions of the grid
// if grid is a 2 * 3 => salesMan(2,3) === Meaning we can travel to the goal in 3 differ. ways
// right, right, down --- down, right, right --- right, down, right
// the smaller grids can be used as base cases
// if salesMan(3,3) --- We move down and we reach previoud (2,3) grid

//RECURSIVE STRATEGY
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

// salesMan(m-1, n) decrease number of rows (Were going down)
// salesMan(n-1, m) decrease number of columns (Were going right)
