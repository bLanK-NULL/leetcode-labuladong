/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return;
    flatten(root.left)
    flatten(root.right)
    if (!root.left) {
        return;
    }
    let end = root.left;
    while (end.right) {
        end = end.right;
    }
    end.right = root.right;
    root.right = root.left;
    root.left = null;


    return;
};
// @lc code=end

