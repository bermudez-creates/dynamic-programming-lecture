// # MEMOIZED
// 1. init memo{}
// 2. Look for targetSum in memo{}
// 3. Look at return values that are not base cases and store them in memo{}

const Sum = (targetSum, numbers, memo = {}) => {
  // memo fetch logic
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let n of numbers) {
    const remainder = targetSum - n;
    if (Sum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

// Time complexity -> O(m*n)
// since were storing the values in the memo object - theres no need to branch off in the sub trees
// we still need to branch off n [2,3] times for each node
