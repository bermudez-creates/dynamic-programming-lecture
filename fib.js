// recursive program

const fib = (p) => {
  // first 2 numbers are always 1 or 0
  if (p <= 2) return 1;
  //return sum of fib number right before the one we ask for and the number two before
  //sum of previous two numbers
  return fib(p - 1) + ib(p - 2);
};
// 1, 1, 2, 3, 5, 8, 13, 21,
//8 - 1 (7) + 8 - 2 (6)

// console.log(ib(3));
// console.log(ib(4));
// console.log(ib(5));

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

// # TABULATIION
// Write a function `fib(n)` that takes in a number as an argument.
// The function should return the nth number

// The 0 number of the sequence is 0
// The 1st number of the sequence is 1

// To generate the next number of the sequence, we sum the previous two

const tabfib = (n) => {
  // init table the size of n => .fill(0) just fills in array with 0's
  const table = Array(n + 1).fill(0);
  // init [0,1,0...]
  table[1] = 1;

  // iterate through table while i is <= the size of n
  for (let i = 0; i <= n; i++) {
    const current = table[i];

    table[i + 1] += current;
    table[i + 2] += current;
  }

  return table[n];
};

console.log(tabfib(0));
console.log(tabfib(1));
console.log(tabfib(50)); // 1
console.log(tabfib(6)); // 8
console.log(tabfib(9)); // 34
console.log(tabfib(13)); // 233
