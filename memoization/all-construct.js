const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === ``) return [[]];
  let arr = [];

  for (let word of wordBank) {
    // check if its a prefix
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const combinations = allConstruct(suffix, wordBank, memo);
      const comboArr = combinations.map((index) => [word, ...index]);
      // spreads copies original array and adds new elements to it => simply pushing an array into an array will give an arr nested in an arr
      arr.push(...comboArr);
    }
  }

  memo[target] = arr;
  return arr;
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
