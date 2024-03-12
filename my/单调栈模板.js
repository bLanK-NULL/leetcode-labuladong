/*
现在给你出这么一道题：输入一个数组 nums，请你返回一个等长的结果数组，
结果数组中对应索引存储着下一个更大元素，如果没有更大的元素，就存 -1。
*/
var nextGreaterElement = function (nums) {
    const res = []
    const stack = []
    for (let i = nums.length - 1; i >= 0; i--) {
        const item = nums[i]
        while (stack.length && item >= stack[stack.length - 1]) {
            stack.pop();
        }
        res.unshift(stack.length ? stack[stack.length - 1] : -1)
        stack.push(item)
    }
    return res
};

const result = nextGreaterElement([2, 1, 2, 4, 3])
console.log(result)