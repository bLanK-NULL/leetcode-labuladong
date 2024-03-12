/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const win = new Map()
    let l = 0, r = 0;
    let maxLen = 0;
    while (l <= r && r < s.length) {
        win.set(s[r], win.get(s[r]) ? win.get(s[r]) + 1 : 1)
        r++;
        while (win.get(s[r-1]) > 1) {
            win.set(s[l], win.get(s[l]) - 1)
            l++;
        }
        maxLen = Math.max(maxLen, r - l)
    }
    return maxLen;
};
// @lc code=end

