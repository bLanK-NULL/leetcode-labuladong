/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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


var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER //在lc服务器 闭包失效了？ 
    function onesideMax(root) {
        if (root=== null) return 0;
        let lmax = 0, rmax = 0;
        if (root.left) {
            lmax = onesideMax(root.left)
        }
        if (root.right) {
            rmax = onesideMax(root.right)
        }
        let result = Math.max(lmax, rmax)>0? Math.max(lmax, rmax) + root.val: root.val
        maxSum = Math.max(maxSum, Math.max(root.val + lmax + rmax, result))
        return result
    }
    onesideMax(root, 0)
    return maxSum
}; 


// @lc code=end

