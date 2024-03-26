// # MEMOIZED STRATEGY

const salesTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  // are arg in memo?
  if (key in memo) return memo[key];
  // for recursive calc. we store it in memo
  memo[key] = salesTraveler(m - 1, n, memo) + salesTraveler(n - 1, m, memo);
  return memo[key];
};

// Time complecity here would be : O(m*n)
// Space complecity would stay : O(m+n)
// For: 6,5 grid :
// m:{0,1,2,3,4,5,6}
// n:{0,1,2,3,4,5}  --- since were storing the data we rid of binary search only to multiply both top-level possibilities

console.log(salesTraveler(1, 1));
console.log(salesTraveler(2, 3));
console.log(salesTraveler(3, 2));
console.log(salesTraveler(3, 3));
console.log(salesTraveler(18, 18));
