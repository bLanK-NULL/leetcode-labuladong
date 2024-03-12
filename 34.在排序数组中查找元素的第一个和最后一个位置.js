/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = l + ((r - l) >> 1)
        if (nums[mid] === target) {
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        }
    }
    if (l < 0 || l > nums.length - 1 || nums[l] !== target) {
        return [-1, -1]
    }
    let i;
    for (i = l + 1; i < nums.length; i++) {
        if (nums[i] !== nums[l])
            return [l, i - 1]

    }
    return [l, i - 1]
};
// @lc code=end

