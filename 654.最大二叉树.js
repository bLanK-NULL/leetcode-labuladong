/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    if (!nums || nums.length === 0) return null;
    const maxIdx = findMaxIndex(nums)
    const maxNode = new TreeNode(nums[maxIdx], constructMaximumBinaryTree(nums.slice(0, maxIdx)), constructMaximumBinaryTree(nums.slice(maxIdx + 1)))
    return maxNode;
};
function findMaxIndex(nums) {
    let idx = -1;
    nums.forEach((item, index) => {
        if (idx === -1) idx = index;
        else if (nums[idx] < nums[index]) {
            idx = index;
        }
    })
    return idx;
}
 
// @lc code=end

