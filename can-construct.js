// Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

// The function should return a boolean indicating whether `target` can be constructed by
// concactenating elements of the `wordBank` array

// You may reuse the elements of the `wordBank` array

const canConstruct = (target, wordBank) => {
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

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));

console.log(
  canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);

console.log(
  canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);

// console.log(
//   canConstruct('eeeeeeeeeeeeeeeef', [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee',
//     'eeeeeee',
//   ])
// );
