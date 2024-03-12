/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 方法1
// 要辅助数组 newM [i][j] = matrix[n-j-1][i]
// 方法2 
// 沿着主对角线对折后，再rever每行元素

var rotate = function (matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swapMatrix(matrix, i, j)
        }
    }
    matrix.map(item => {
        return item.reverse()
    })

};
function swapMatrix(matrix, i, j) {
    const temp = matrix[i][j]
    matrix[i][j] = matrix[j][i]
    matrix[j][i] = temp;
}
// @lc code=end

