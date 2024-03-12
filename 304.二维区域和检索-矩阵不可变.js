/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    let rows = matrix.length, cols = matrix[0].length;
    this.matrix = matrix;
    this.prefix = new Array(rows).fill().map(() => new Array(cols).fill());
    this.prefix[0][0] = matrix[0][0]
    initPrefix.call(this)

    function initPrefix() {
        //初始化第一行
        for (let i = 1; i < cols; i++) {
            this.prefix[0][i] = this.prefix[0][i - 1] + matrix[0][i]
        }

        //初始化第一列
        for (let i = 1; i < rows; i++) {
            this.prefix[i][0] = matrix[i][0] + this.prefix[i - 1][0]
        }
        //初始化其他行和列
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                this.prefix[i][j] = this.prefix[i][j - 1] + this.prefix[i - 1][j] - this.prefix[i - 1][j - 1] + matrix[i][j];

            }
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let part1 = row1 === 0 ? 0 : this.prefix[row1 - 1][col2];
    let part2 = col1 === 0 ? 0 : this.prefix[row2][col1 - 1];
    let partMid = row1 === 0 || col1 === 0 ? 0 : this.prefix[row1 - 1][col1 - 1]
    return this.prefix[row2][col2] - part1 - part2 + partMid;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

