/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return root;
    if (key === root.val) {
        //解决 只有一个子节点或没有子节点的情况
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        const minNode = getMinNode(root.right)
        root.right = deleteNode(root.right, minNode.val)
        root.val = minNode.val;
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root;

};
function getMinNode(root) {
    let p = root;
    while (p && p.left) p = p.left;
    return p;
}
// @lc code=end

