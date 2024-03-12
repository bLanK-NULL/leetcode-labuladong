/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (i < s.length - 1) {
            const next = s[i + 1]
            if (map.get(cur) < map.get(next)) {//特殊情况
                result += (map.get(next) - map.get(cur))
                i++
            } else {
                result += map.get(cur)
            }
        } else {
            result += map.get(cur)
        }
    }
    return result
};
// @lc code=end

