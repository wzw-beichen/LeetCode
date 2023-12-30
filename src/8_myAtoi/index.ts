function myAtoi(s: string): number {
  let str = "";
  s = s.trimStart();

  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    const isNumber = item.trim() && !Number.isNaN(Number(item));
    if ((!str.length && ["-", "+"].includes(item)) || isNumber) {
      str += item;
    } else {
      break;
    }
  }
  let num = Number(str);
  num = Number.isNaN(num) ? 0 : num;
  const flag = num < 0;
  num = flag ? -num : num;
  let MAX = Math.pow(2, 31);
  MAX = MAX - (flag ? 0 : 1);
  if (num > MAX) {
    num = MAX;
  }
  return flag ? -num : num;
}
