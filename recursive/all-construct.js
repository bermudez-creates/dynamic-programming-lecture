// Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a 2D array containing ALL the ways that the `target` can be constructed
// by concatenating elements of the `wordBank` array

// Each element of the 2D array should represent one combination that constructs the `target`
// You mat resuse elements of the `wordBank` array

const Construct = (target, wordBank) => {
  if (target === ``) return [[]];
  let arr = [];

  for (let word of wordBank) {
    // check if its a prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const combinations = allConstruct(suffix, wordBank);
      const comboArr = combinations.map((index) => [word, ...index]);
      // spreads copies original array and adds new elements to it => simply pushing an array into an array will give an arr nested in an arr
      arr.push(...comboArr);
    }
  }

  return arr;
};

// # TIME COMPLEXITY
// m: target.length (height)
// n: array.length (nodes)
// O(n^m)
// O(m)
