/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const res = new Map()
    const stack = []
    for (let i = nums2.length - 1; i >= 0; i--) {
        const item = nums2[i]
        while (stack.length && item >= stack[stack.length - 1]) {
            stack.pop();
        }
        res.set(item, stack.length ? stack[stack.length - 1] : -1)
        stack.push(item)
    }
    return nums1.map(item => res.get(item))
};