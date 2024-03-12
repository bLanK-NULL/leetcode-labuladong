/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    return traverse(root)

};
function traverse(root) {
    if (!root) return root;
    traverse(root.left)
    traverse(root.right)
    //交换
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
}
// @lc code=end

