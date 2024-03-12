/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = new Array(n).fill().map(() => new Array(n))
    let l = 0, t = 0, r = n - 1, b = n - 1;
    let i = 1;
    while (i <= n * n) {
        if (t <= b) {
            for (let x = l; x <= r; x++)
                result[t][x] = i++;
            t++;
        }
        if (l <= r) {
            for (let x = t; x <= b; x++)
                result[x][r] = i++;
            r--;
        }
        if (t <= b) {
            for (let x = r; x >= l; x--)
                result[b][x] = i++
            b--;
        }
        if (l <= r) {
            for (let x = b; x >= t; x--)
                result[x][l] = i++;
            l++;
        }
    }
    return result;
};
// @lc code=end

