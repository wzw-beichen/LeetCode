function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const y = x;
  let result = 0;
  while (x) {
    result = result * 10 + (result % 10);
    x = Math.floor(x / 10);
  }
  return y === result;
}
