function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  const findStringLastIndex = (str: string, value: string) => {
    let lastIndex = -1;
    if (!value) return lastIndex;
    const length = str.length;
    for (let i = 0; i < length; i++) {
      if (str[i] === value) {
        lastIndex = i;
      }
    }
    return lastIndex;
  };

  const array = s.split("");
  const numArr = array.reduce<string[][]>(
    ((map: string[]) => (total, item, index) => {
      const i = findStringLastIndex(map.join(""), item);
      if (~i) {
        total.push(map.slice(i));
        map = [...map.slice(i + 1), item];
      } else {
        map.push(item);
      }
      return total;
    })([]),
    []
  );
  console.log("numArr", numArr);
  //   return Math.max(...numArr);
}

const s = "abcabcbb";
lengthOfLongestSubstring(s);
