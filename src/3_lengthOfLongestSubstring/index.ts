function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  let map: string[] = [];
  let total: string[] = [];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    const index = map.findIndex((mapItem) => mapItem === item);
    if (~index) {
      map = map.slice(index + 1);
    }
    map.push(item);
    total.push([...map].join(""));
    maxLen = Math.max(maxLen, map.length);
  }
  return maxLen;
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
