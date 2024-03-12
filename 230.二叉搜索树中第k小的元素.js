/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let result;
    let i = 1;
    inorder(root)
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        if (i === k) {
            result = root.val
        }
        i++
        inorder(root.right)
    }
    return result;
};
// @lc code=end

