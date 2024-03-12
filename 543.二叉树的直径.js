/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */

// 返回 max（左子树深度）+ max（右子树深度）= 直径
// 直径= max(左子树直径， 右子树直径，左子树深度+右子树深度 )
let maxD;
var diameterOfBinaryTree = function (root) {
    maxD = 0;
    traverse(root)
    return maxD;
};

function traverse(root) {
    if (!root) return 0;
    const depl = traverse(root.left)
    const depr = traverse(root.right)
    maxD = Math.max(maxD, depl + depr)
    return Math.max(depl, depr) + 1
}
// @lc code=end

