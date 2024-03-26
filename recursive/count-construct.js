// Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return the number of ways that the 'target' can be constructed by concactenating
// elements of the word bank array

// You may reuse words of the worBank

const Construct = (target, wordBank) => {
  if (target === '') return 1;
  let count = 0;

  for (let word of wordBank) {
    // console.log(`WORD`, word);
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      // console.log(`SUFFIX`, suffix);
      const combination = countConstruct(suffix, wordBank);
      // console.log(`COMBO ---`, combination);
      count += combination;
    }
  }

  return count;
};

// TIME COMPLEXITY FOR BRUTE FORCE
// m: target.length (height of tree)
// n: array.length (number of nodes)
// O(n^m * m)
// # SPACE COMPLEXITY
// O(m^2)
