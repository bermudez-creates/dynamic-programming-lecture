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
