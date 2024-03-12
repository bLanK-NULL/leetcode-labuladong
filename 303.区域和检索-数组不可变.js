/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.arr = nums
    this.prefix = [nums[0]];
    initPrefix(this.prefix)
    function initPrefix(arr) {
        for (let i = 1; i < nums.length; i++) {
            arr[i] = arr[i - 1] + nums[i]
        }
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if (left === 0)
        return this.prefix[right]
    else
        return this.prefix[right] - this.prefix[left - 1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

