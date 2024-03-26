// # TABULATION CAN-SUM
// # TIME COMPLEXITY => O(mn)
// # SPACE COMPLEXITY

const tabSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

console.log(tabSum(7, [2, 3]));
console.log(tabSum(7, [5, 3, 4]));
console.log(tabSum(7, [2, 4]));
console.log(tabSum(8, [2, 3, 5]));
console.log(tabSum(300, [7, 14]));
