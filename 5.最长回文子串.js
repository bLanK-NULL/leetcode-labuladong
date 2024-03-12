/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = s[0]
    if (s.length === 1)
        return s
    for (let i = 0; i < s.length - 1; i++) {
        let resultodd = getHuiwenFromMid(s, i, i)
        let resulteven = getHuiwenFromMid(s, i, i + 1)
        if (resultodd.length >= resulteven.length) {
            if (resultodd.length > result.length)
                result = resultodd
        }
        else if (resulteven.length > result.length)
            result = resulteven
        // console.log(result);
    }
    return result;

};
function getHuiwenFromMid(s, left, right) {
    while (left >= 0 && right < s.length) {
        if (s[left] !== s[right]) break;
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}
// @lc code=end

