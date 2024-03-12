/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    const nums = new Array(1001).fill(0)
    const differ = new Difference(nums);

    trips.forEach(item => {
        differ.increment(item[1], item[2], item[0])
        // console.log(differ.result().slice(1, 8))
    })

    const resArr = differ.result();
    for (let i = 0; i < 1001; i++) {
        if (resArr[i] > capacity)
            return false;
    }
    return true;
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
        // if (j + 1 < this.nums.length)
        this.diff[j] -= n;
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

