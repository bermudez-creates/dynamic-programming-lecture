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
