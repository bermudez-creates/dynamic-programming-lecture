const Sum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = Sum(remainder, numbers, memo);
    console.log(`Result`, result);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(Sum(7, [2, 3]));
console.log(Sum(7, [5, 3, 4, 7]));
console.log(Sum(7, [2, 4]));
console.log(Sum(8, [2, 3, 5]));
console.log(Sum(300, [7, 14]));

// Time Complexity:
// m = targetSum
// n = num.length
//

// Memoized
// time: O(n * m^2)
// space complexity is m^2 becuase of the memo object - We need to create a new object for every m arg
// space: O(m^2)
