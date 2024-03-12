/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let m = strs[0].length; //元素最短长度
    for (let i = 1; i < strs.length; i++) {
        m = min(m, strs[i].length)
    }
    let result = '';
    for (let i = 0; i < m; i++) {
        if(equal(strs, i)) {
            result += strs[0][i]
        }else break;
    }
    return result
};
function min(a, b) {
    return a < b ? a : b
}
function equal(strs, i) {
    for (let j = 0; j < strs.length - 1; j++) {
        if (strs[j][i] !== strs[j + 1][i]) {
            return false
        }
    }
    return true
}
// @lc code=end

