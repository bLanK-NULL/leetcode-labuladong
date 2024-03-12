/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const str = x + '';
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) return false
    }
    return true;
};
// @lc code=end

