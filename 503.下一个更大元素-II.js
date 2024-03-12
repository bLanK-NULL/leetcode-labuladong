/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const res = []
    const stack = []
    //复制一份再首尾连接起来
    nums = [...nums, ...nums]
    for (let i = nums.length - 1; i >= 0; i--) {
        const item = nums[i]
        while (stack.length && item >= stack[stack.length - 1]) {
            stack.pop();
        }
        res.unshift(stack.length ? stack[stack.length - 1] : -1)
        stack.push(item)
    }
    return res.slice(0, nums.length / 2)
};