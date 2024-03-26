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
