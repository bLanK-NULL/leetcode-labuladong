/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     let len = nums.length;
//     if (len === 1) {
//         return 1
//     }
//     let p = 0, q = 1;
//     while (q < len) {
//         while (q < len) {
//             if (nums[q] === nums[p]) {
//                 nums.splice(q, 1)
//                 len -= 1;
//             }else break;
//         }
//         p = q;
//         q = q + 1;
//     }
//     return len
// };
//Optimized
var removeDuplicates = function (nums) {
    let len = nums.length
    let p = 0, q = 1;
    while (q < len) {
        if (nums[q] === nums[p]) {
            nums.splice(q, 1)
            len--;
        } else {
            q++;
            p++;
        }
    }
    return len;
}
// @lc code=end

