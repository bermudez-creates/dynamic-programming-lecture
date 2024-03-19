// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a boolean indicating whether `target` can be constructed by
// concactenating elements of the `wordBank` array

// You may reuse the elements of the `wordBank` array

const Construct = (target, wordBank) => {
  if (target === '') {
    return true;
  }

  for (let word of wordBank) {
    // beginning of word

    if (target.indexOf(word) === 0) {
      // what comes after
      const suffix = target.slice(word.length);
      // iterate through words again
      if (canConstruct(suffix, wordBank) === true) {
        return true;
      }
    }
  }

  return false;
};

// BRUTE FORCE APPROACH
// # TIME COMLEXITY
// m: target length
// n: nodes (array/ length of arr)
// O(n^m * m) => it is n^m because for every node (worst case) we multiply it by itself until we reach the target
// if every node had a matching word we'd have to go through every node m times
// it is * m because of the copying factor .slice()

// # SPACE COMPLECITY
// O(m^2)

// console.log(Construct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));

// console.log(
//   Construct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// );

// console.log(
//   Construct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// );

// console.log(
//   Construct('eeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeeee',
//   ])
// );

const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];

  if (target === '') return true;

  for (word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));

console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);

console.log(
  canConstruct('eeeeeeeeeeeeeeeef', [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeeee',
  ])
);

// MEMOIZATION APPROACH

// # TIME COMPLEXITY
// m: target.length (height of tree)
// n: array.length (number of nodes)
// O(n * m^2) => with memoization we dont explore every duplicate node for subtree ... we store it instead

// # SPACE COMPLEXITY
// O(m^2) => Stays the same because of copying factor
