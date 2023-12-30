function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const arr = new Array(numRows).fill("");
  let j = 0,
    flag = 1;
  for (let i = 0; i < s.length; i++) {
    arr[j] += s[i];
    if (j === numRows - 1) {
      flag = -1;
    }
    if (j === 0) {
      flag = 1;
    }
    j += flag;
  }
  return arr.join("");
}

// const a = reverse(-123);
// console.log("a", a);
