// memoization
// js object, keys are arg to the function, value will be return value

const memofib = (n, memo = {}) => {
  // is current arg n inisde of memo ?
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  // key is always what the argument is [n]
  // as fn progresses we pass the key as well as the memo
  // { 3 : 2 , 4 : 3} -- This way the fn will simply return already stored value
  memo[n] = memofib(n - 1, memo) + fib(n - 2, memo);
  // returning same value but also saving it in memo
  return memo[n];
};
