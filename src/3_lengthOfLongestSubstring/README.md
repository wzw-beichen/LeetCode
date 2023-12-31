#### 3. 无重复字符的最长子串
给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。
 
**示例 1：**
```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

**示例 2：**
```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

**示例 3：**
```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
****提示：****
* 0 <= s.length <= 5 * $10^4$
* `s` 由英文字母、数字、符号和空格组成  

##### SOLVE
```
const str = "abcabcdbb";
```
|    | `i` | `item`  |  `map` | `maxLen` |
|:--------:|:---------:|:---------:|:--------:|:--------:|
|   第一次调用   |  `0`  |   `a`   |   `[a]`         |  `1` |
|   第二次调用   |  `1`  |   `b`   |   `[a, b]`      |  `2` |
|   第三次调用   |  `2`  |   `c`   |   `[a, b, c]`   |  `3` |
|   第四次调用   |  `3`  |   `a`   |   `[b, c, a]`   |  `3` |
|   第五次调用   |  `4`  |   `b`   |   `[c, a, b]`   |  `3` |
|   第六次调用   |  `5`  |   `c`   |   `[a, b, c]`   |  `3` |
|   第七次调用   |  `6`  |   `d`   |   `[a, b, c, d]`|  `4` |
|   第八次调用   |  `7`  |   `b`   |   `[c, d, b]`   |  `4` |
|   第九次调用   |  `8`  |   `b`   |   `[b]`         |  `4` |

