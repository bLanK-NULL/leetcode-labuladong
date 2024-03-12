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

module.exports = Difference
