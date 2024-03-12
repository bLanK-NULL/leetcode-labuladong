/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    const nums = new Array(n + 1).fill(0)
    const differ = new Difference(nums)
    bookings.forEach(item => {
        differ.increment(...item)
    })
    return differ.result().slice(1)
};
class Difference {
    constructor(nums) {
        this.nums = nums;
        this.diff = nums.map((item, index) => {
            return index == 0 ? nums[0] : nums[index] - nums[index - 1]
        })
    }
    // [i, j]区间内增减
    increment(i, j, n) {
        this.diff[i] += n;
        if (j + 1 < this.nums.length)
            this.diff[j + 1] -= n;
    }
    result() {
        const result = []
        this.diff.forEach((item, idx) => {
            if (idx === 0) result.push(item)
            else result.push(item + result[idx - 1])
        })
        return result;
    }
}
// @lc code=end

