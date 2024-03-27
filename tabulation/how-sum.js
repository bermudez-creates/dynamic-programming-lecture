// Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

// The function should return an array containing any combination of elements that add up to exactly the targetSum
// If there is no combination possible return null

// # TIME COMPLEXITY
// m: target.length (height of Tree)
// n: array.length (number of nodes)
// O(m^2*n)
// # SPACE COMPLEXITY
// O(m^2)

const howSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    // checking in current position is possible
    if (table[i] !== null) {
      for (let num of numbers) {
        // copying over array
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
