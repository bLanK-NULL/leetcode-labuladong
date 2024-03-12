/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = 0, fast = 0;
    let len = nums.length;
    let zeros = 0;
    while(fast<len) {
        if(nums[fast]===0) {
            zeros++;
        }else {
            nums[slow] = nums[fast]
            slow++;
        }
        fast++;
    }
    for(let i=slow;i<slow+zeros;i++) {
        nums[i] = 0
    }
    // return nums
};

// console.log(moveZeroes([0,1,0,3,12]));
// @lc code=end

