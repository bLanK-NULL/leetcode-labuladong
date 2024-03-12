/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const len = numbers.length;
    let last = null;
    for (let i = 0; i < len - 1; i++) {
        if (last === numbers[i]) continue;
        const subarr = numbers.slice(i + 1, len)
        let idx = binarySearch(subarr, target - numbers[i])
        if (idx !== -1) {
            idx += i + 1;
            return [i + 1, idx + 1]
        }
        last = numbers[i]
    }
};
function binarySearch(arr, val) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1
        if (arr[mid] === val)
            return mid
        else if (arr[mid] < val) {
            left = mid + 1
        } else {
            right = mid - 1;
        }
    }
    return -1
}
// @lc code=end

