/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
    const traversedNode = new Map();
    const result = []
    traverse(root, traversedNode, result)
    return result;
};

// 返回当前根的树的扁平化结构，后续遍历（当作满树）。
function traverse(root, traversedNode, result) {
    if (!root) return null;
    const l = traverse(root.left, traversedNode, result)
    const r = traverse(root.right, traversedNode, result)
    const curStructureString = ` ${l} ${r} ${root.val}`
    // console.log(root.val, curStructureString)
    if (!traversedNode.has(curStructureString)) { //没重复的子树加进去
        traversedNode.set(curStructureString, root)
    } else { //重复了，且没放到result里的
        if (traversedNode.get(curStructureString)) {
            result.push(root);
            traversedNode.set(curStructureString, null)
        }
    }
    return curStructureString;
}

// @lc code=end

