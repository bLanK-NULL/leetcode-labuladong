/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let last = -Infinity;
    let result = true;
    function traverse(root) {
        if (!root) return;
        traverse(root.left)
        if (last >= root.val) {
            result = false;
        } else last = root.val;
        traverse(root.right)
    }
    traverse(root)
    return result;
};
// @lc code=end

