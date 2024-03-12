/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let slow = 0, fast = 0;
    let max = 0;
    // let temp = 0;
    let remainK = k;

    while (fast < nums.length && slow <= fast) {
        if (nums[fast] === 1) { //当前是1
            fast++;
            // temp++;
        } else if (remainK > 0) { // 当前是0可以转成1
            fast++;
            remainK--;
            // temp++;
        } else { //当前是0 转不了了
            max = fast - slow > max ? fast - slow : max
            slow++
            if (slow > fast) { // consider [0, 0, 1] k=0
                fast = slow;
                remainK = k;
            } else if (nums[slow - 1] === 0) //满足该条件即初始slow和fast不重合 [slow: 0, ..., fast: 0] 至少k==1 
                remainK++;
        }
        if (fast === nums.length) {
            max = fast - slow > max ? fast - slow : max;
            break;
        }
    }
    return max;
};
// @lc code=end

