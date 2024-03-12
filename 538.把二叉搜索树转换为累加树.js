/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
//遍历两次树
// const sum = [];
// var convertBST = function (root) {
//     traverse(root)
//     for (let i = sum.length - 2; i >= 0; i--) {
//         const root = sum[i];
//         root.val += sum[i + 1].val;
//     }
//     sum.length = 0;
//     return root;
// };
// //返回root.val + 右子树的val之和
// function traverse(root) {
//     if (!root) return
//     traverse(root.left)
//     sum.push(root)
//     traverse(root.right)
// }

//倒序二叉搜索树 
var convertBST = function (root) {
    let sum = 0;
    function traverse(root) {
        if (!root) return root;
        traverse(root.right)
        sum += root.val;
        root.val = sum;
        traverse(root.left)
        return root;
    }
    return traverse(root)
};

// @lc code=end

