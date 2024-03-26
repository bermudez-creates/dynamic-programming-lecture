const Sum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  let shortestRoute = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = Sum(remainder, numbers, memo);

    if (result !== null) {
      const bestRoute = [...result, num];

      if (shortestRoute === null || bestRoute.length < shortestRoute.length) {
        shortestRoute = bestRoute;
        memo[targetSum] = shortestRoute;
      }
    }
  }

  return shortestRoute;
};

console.log(Sum(7, [5, 3, 4, 7]));
console.log(Sum(8, [2, 3, 5]));
console.log(Sum(8, [1, 4, 5]));
console.log(Sum(100, [1, 2, 5, 25]));

// # TIME COMLPEXITY FOR MEMOIZED

// O(m^2 * n)

// # SPACE COMPLEXITY

// O(m^2)
