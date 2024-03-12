/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
class LinkedList {
    constructor(val, next) {
        this.val = val || 0;
        this.next = next || null;
        this.last = this;
    }
    add(val) {
        this.last.next = new LinkedList(val)
        this.last = this.last.next;
    }
}
function generateGraph(numCourses, prerequisites) {
    const nodes = new Array(numCourses).fill().map((x, idx) => new LinkedList(idx))
    for (let item of prerequisites) {
        const [to, from] = item
        nodes[from].add(to);
    }
    return nodes;
}
//方法1： dfs 拓扑排序 = 后序.reverse()
/*
var findOrder = function (numCourses, prerequisites) {
    const visited = new Array(numCourses).fill(false)
    const onPath = [];
    const onPathPost = []
    const graph = generateGraph(numCourses, prerequisites)
    let hasCircle = false;

    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }
    visited.forEach((x, idx) => {
        if (!x) {
            onPathPost.push(idx)
        }
    })
    return hasCircle ? [] : onPathPost.reverse();

    function dfs(cur) {
        if (onPath.includes(cur))
            hasCircle = true;
        if (visited[cur] || hasCircle)
            return;
        visited[cur] = true;
        onPath.push(cur)
        let p = graph[cur].next;
        while (p) {
            dfs(p.val);
            p = p.next;
        }
        onPath.pop();
        onPathPost.push(cur)
    }
};
*/
//方法二： bfs
var findOrder = function (numCourses, prerequisites) {


}



// const result = findOrder(2, [[1, 0]])
// console.log(result)

// @lc code=end

