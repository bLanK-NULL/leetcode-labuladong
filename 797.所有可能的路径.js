/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
    const visited = new Array(graph.length)
    const onPath = []
    const result = [];

    function traverse(s) {
        if (visited[s]) return -1;
        visited[s] = true;
        onPath.push(s);
        for (let i = 0; i < graph[s].length; i++) {
            traverse(graph[s][i]);
        }
        if (s === graph.length - 1)
            result.push([...onPath]);
        visited[s] = false;
        onPath.pop(s);
        return s
    }
    traverse(0);
    return result;
};

// @lc code=end

