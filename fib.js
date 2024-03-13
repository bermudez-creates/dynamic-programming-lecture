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
