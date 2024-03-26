// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as an arguments

// The function should return an array containing any combination of elements that add up to exactly the targetSum
// If there is no combination that adds up to the target, then return null
// If there are multiple combinations then you can return any single one.

// example : howSum(7, [5,3,4,7]) - howSum(8, [2,3,5])

// RECURSIVE PROGRAM

const howSum = (targetSum, numbers) => {
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers);
    console.log(result);
    if (result !== null) {
      // copying operation also adds to time complexity
      // worst case, copying will take O(m) steps
      return [...result, num];
    }
  }

  return null;
};

// # Time Complexity
// m = targetSum
// n = num.length
//

// Brute Force
// base of exponent is the branching factor (n)
// depth is exponent (m)
// time: O(n^m * m)
// space: O(m)

// MEMOIZATION
