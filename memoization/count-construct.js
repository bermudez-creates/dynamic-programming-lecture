const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let count = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const combinations = countConstruct(suffix, wordBank, memo);

      count += combinations;
    }
  }

  memo[target] = count;
  return count;
};

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));

console.log(
  countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
  countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
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
);

// # TIME COMPLEXITY FOR MEMOIZATION
// m: target.length (height of tree)
// n: number of nodes
// O(n * m^2)
// # SPACE COMPLEXITY
// O(m^2)
