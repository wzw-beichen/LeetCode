function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const map = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  const strAr = digits.split("").map((item) => map.get(item) || []);
  const arr = strAr.reduce((total, item) => {
    let totalArr: string[] = [];
    total.forEach((i) => {
      item.forEach((str) => {
        totalArr.push([i, str].join(""));
      });
    });
    return totalArr;
  });
  return arr;
}

const createArray = (num: number) => [...new Array(num).keys()];

const createMap = () => {
  const map = new Map();
  const strArr = createArray(26).map((item) => String.fromCharCode(97 + item));
  const numArr = createArray(8).map((item) => item + 2);
  numArr.forEach((item, index) => {
    let startIndex = 3 * index;
    let endIndex = 3 * (index + 1);
    if (item === 7) {
      endIndex += 1;
    }
    if (item === 8) {
      startIndex += 1;
      endIndex += 1;
    }
    if (item === 9) {
      startIndex += 1;
      endIndex += 2;
    }
    map.set(item + "", strArr.slice(startIndex, endIndex));
  });
  return map;
};
