// Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a 2D array containing ALL the ways that the `target` can be constructed
// by concatenating elements of the `wordBank` array

// Each element of the 2D array should represent one combination that constructs the `target`
// You mat resuse elements of the `wordBank` array

// # COMPLEXITY
// m: target
// n: nodes of wordBank

// O(n^m)

// # SPACE
// O(n^m)

const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        // take all combos in current position and add current word to each combination
        const combos = table[i].map((index) => [...index, word]);
        // take list of new arrays and add them to further postion
        table[i + word.length].push(...combos);
      }
    }
  }

  return table[target.length];
};

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

console.log(
  allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
);

console.log(
  allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
  allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);

console.log(
  allConstruct('aaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'])
);
