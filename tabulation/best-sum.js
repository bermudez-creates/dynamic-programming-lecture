// Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as an arguments

// The function should return an array containing the shortest combination of numbers that adds up to the targetSum
// If theres any ties for the shortest combination you can return any of those
// # TIME COMPLEXITY
// m: target.length (height)
// n: array.length (nodes)
// O(m^2*n)

// # SPACE COMPLEXITY
// O(m^2)
const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    // if current position is reachable then we keep going
    if (table[i] !== null) {
      for (let num of numbers) {
        const bestRoute = [...table[i], num];
        if (!table[i + num] || table[i + num]?.length > bestRoute.length) {
          table[i + num] = bestRoute;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
