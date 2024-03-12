/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//#region
// var buildTree = function (preorder, inorder) {
//     const res = gapTree(preorder, inorder, 0, preorder.length - 1)
//     return res;
// };
// function gapTree(preorder, inorder) {
//     if (preorder.length <= 0) return null; // 退出
//     const node = new TreeNode(preorder[0]) // 生成节点 -- preorder[0]是根
//     const idx = inorder.indexOf(node.val) // 找到根在中序数组里的下标 
//     node.left = gapTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
//     node.right = gapTree(preorder.slice(idx + 1), inorder.slice(idx + 1), idx + 1)
//     return node; // 返回子树的根
// }
//#endregion

/*
第二遍写：
先序 第一个是当前根节点，
中序 根节点左边的都是左子树的
 */

//返回以先序和中序构造的二叉树的根节点
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;
    const rootIdxOfInorder = inorder.indexOf(preorder[0])
    const root = new TreeNode(preorder[0],
        buildTree(preorder.slice(1, rootIdxOfInorder + 1), inorder.slice(0, rootIdxOfInorder)),
        buildTree(preorder.slice(rootIdxOfInorder + 1), inorder.slice(rootIdxOfInorder + 1)))
    return root;
};

// @lc code=end

