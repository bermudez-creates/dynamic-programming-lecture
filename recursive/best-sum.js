// Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as an arguments

// The function should return an array containing the shortest combination of numbers that add up to the target sum
// If theres any ties for the shortest combination you can return any of those

// # RECURSIVE APPROACH

const bestSum = (targetSum, numbers) => {
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  let shortesRoute = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers);

    if (result !== null) {
      const bestRoute = [...result, num];
      // console.log(`-----`, bestRoute);
      // check to see shortest combination
      // keeping track of shortest route and replacing it with the best route
      if (shortesRoute === null || bestRoute.length < shortesRoute.length) {
        console.log(shortesRoute);
        shortesRoute = bestRoute;
      }
    }
  }

  return shortesRoute;
};

// console.log(bestSum(7, [5, 3, 4, 7]));
// console.log(bestSum(8, [2, 3, 5]));
// console.log(bestSum(8, [1, 4, 5]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// # TIME COMPLEXITY FOR BRUTE FORCE
// m : target sum
// n : length of array
// O(n^m * m)

// # SPACE COMPLEXITY
// O(m^2)

// # MEMOIZATION
