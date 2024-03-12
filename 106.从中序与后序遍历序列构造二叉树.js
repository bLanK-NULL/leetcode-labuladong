/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null;
    const val = postorder[postorder.length - 1]
    const idx = inorder.indexOf(val)
    const root = new TreeNode(val,
        buildTree(inorder.slice(0, idx), postorder.slice(0, idx)),
        buildTree(inorder.slice(idx + 1), postorder.slice(idx, postorder.length - 1)))
    return root;
};
// @lc code=end

