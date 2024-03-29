/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
    let lh = 0, rh = 0;
    let l = root, r = root;
    while (l) {
        l = l.left;
        lh++;
    }
    while (r) {
        r = r.right;
        rh++;
    }
    if (lh === rh) {
        return 2 ** lh - 1
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right)
    }

};
// @lc code=end

