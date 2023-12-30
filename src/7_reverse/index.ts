function reverse(x: number): number {
  if (x === 0) return 0;
  const flag = x < 0;
  if (flag) {
    x = -x;
  }
  let result = 0;
  while (x) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (result > Math.pow(2, 31) + (flag ? 0 : -1)) return 0;
  return flag ? -result : result;
}

const reverseNum = reverse(-123);
console.log("reverseNum", reverseNum);
