// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers[] as arguments
// The function should return a boolean indicating whether or not it is possible to generate
// a targetSum using the numbers from the array

// You may use an element of the array as many times as you want.
// You may assume all numbers are nonnegative.

const canSum = (targetSum, numbers) => {
  // if (numbers != targetSum) return false;
  if (targetSum === 1) return false;
  if (targetSum === 0) return true;
  for (let num of numbers) {
    console.log(num);
  }
};

// example : canSum(7 , [5,3,4,7]) -> true
// example : canSum(7 , [2,3]) -> false

console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));
