/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let delcount = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            delcount++;
        } else {
            nums[i - delcount] = nums[i];
        }
    }
    return len-delcount
};
// @lc code=end

