// Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return the number of ways that the 'target' can be constructed by concactenating
// elements of the word bank array

// You may reuse words of the worBank

// # COMPLEXITY
// m: target
// n: number of words in word bank
// O(m^2*n)

// # SPACE
// O(m)

const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (word of wordBank) {
      const wordle = target.slice(i, i + word.length);
      if (wordle === word) {
        // do not increase by 1 but increment by number ar current position
        table[i + word.length] += table[i];
      }
    }
  }

  return table[target.length];
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']) //0
);
console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) //4
);
console.log(
  countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeeee',
  ])
); //0
