/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/**
 * 整体reverse,再reverse单词
 * @param {} s 
 */
var reverseWords = function (s) {
    s = reverseString(s)
    s = s.split(' ').map(item => reverseString(item)).join(' ').trim()
    return s;
};
function reverseString(s) {
    return s.split(/ +/g).reverse().join(' ')
}
// @lc code=end

