function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;

  const array = s.split("");
  const strs = array.reduce<string[]>(
    ((Map: string[]) => (total, item, index) => {
      const i = Map.findIndex((mapItem) => mapItem === item);
      if (~i) {
        total.push(Map.join(""));
        Map = [...Map.slice(i + 1), item];
      } else {
        Map.push(item);
      }
      if (index === array.length - 1 && Map.length) {
        total.push(Map.join(""));
      }
      return total;
    })([]),
    []
  );
  console.log("strs", strs);
  return Math.max(...strs.map((item) => item.length));
}

const str = "abcabcbb";
const maxNum = lengthOfLongestSubstring(str);
console.log("maxNum", maxNum);

function lengthOfLongestSubstring_second(s: string): number {
  if (!s) return 0;
  let left = 0;
  const lookup: Set<string> = new Set();
  let maxLen = 0;
  let currLen = 0;

  for (let i = 0; i < s.length; i++) {
    currLen += 1;
    while (lookup.has(s[i])) {
      lookup.delete(s[left]);
      left += 1;
      currLen -= 1;
    }
    maxLen = Math.max(maxLen, currLen);
    lookup.add(s[i]);
  }

  return maxLen;
}
