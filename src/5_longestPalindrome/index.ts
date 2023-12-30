function longestPalindrome(s: string): string {
  let results = "";

  for (let i = 0; i < s.length; i++) {
    const s1 = isPalindrome(s, i, i);
    const s2 = isPalindrome(s, i, i + 1);
    let len = results.length;
    results = s1.length > len ? s1 : results;
    results = s2.length > len ? s2 : results;
  }
  return results;

  function isPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }
}
