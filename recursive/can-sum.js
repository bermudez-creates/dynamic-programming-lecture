// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers[] as arguments
// The function should return a boolean indicating whether or not it is possible to generate
// a targetSum using the numbers from the array

// You may use an element of the array as many times as you want.
// You may assume all numbers are nonnegative.

// example : canSum(7 , [5,3,4,7]) -> true
// example : canSum(7 , [2,3]) -> false

//  # RECURSIVE PROGRAM

const canSum = (targetSum, numbers) => {
  // means it is possible to add nums to get to target
  if (targetSum === 0) return true;
  //means target sum is - number
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

// time complexity for (8, [2, 3, 5]) start node is 8 --- Branches off 3 separate ways (8 -2 , 8 -3, 8 -5)
// m: target sum ---- n: length of array
// 1. Find height of tree (What is maximal distance from root to farthest leaf?)
// if were only -1 from height to leaf ... the height would be m
// 2. Find how number of nodes changes from one number to the next
// if arr has 3 numbers than there are 3 possibilities *n
// Time complexity O(n^m) Space complexity: O(m)
// its n^m powered because were taking the n in the array because there can be values UP TO m (m differ possible valuues in  the node)
