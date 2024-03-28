// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a boolean indicating whether `target` can be constructed by
// concactenating elements of the `wordBank` array

// You may reuse the elements of the `wordBank` array

// # COMPLEXITY
// m: target.length
// n: wordBank.length

// O(m^2*n) => Init the table would be the size of m , since we look through n for any matching words it becomes m*n ,
//              but were also making sure theyre matching so it becomes O(m*n*m)

// # SPACE
// O(m)

const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        // if word matches character starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));

console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);

console.log(
  canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeeee',
  ])
);
