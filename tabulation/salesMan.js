const gridTraveler = (m, n) => {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  // .map gives us a new inner Array
  table[1][1] = 1;
  // going right
  for (let i = 0; i <= m; i++) {
    // going down
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      // if were still in bounds going right
      // keep horizontal element same and move down one
      if (j + 1 <= n) table[i][j + 1] += current;
      // if were still in bounds going down
      // keep vertical element same and move right one
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }
  // console.log(table);

  return table[m][n];
  // table[(1, 1)] = 1;
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(3, 2));

console.log(gridTraveler(18, 18));
