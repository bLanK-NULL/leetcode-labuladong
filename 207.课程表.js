/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
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
//方法一 : dfs
/*
function buildGraph(numCourses, prerequisites) {
    const nodes = new Array(numCourses).fill().map((x, idx) => new LinkedList(idx))
    for (let item of prerequisites) {
        const [to, from] = item
        nodes[from].add(to);
    }
    return nodes;
}
var canFinish = function (numCourses, prerequisites) {
    const visited = new Array(numCourses).fill(false)
    const onPath = [];
    const graph = buildGraph(numCourses, prerequisites)
    let hasCircle = false;
    for (let i = 0; i < numCourses; i++)
        traverse(graph, i)
    return !hasCircle;

    function traverse(graph, i) {
        if (onPath.includes(i))
            hasCircle = true;
        if (visited[i] || hasCircle)
            return;
        visited[i] = true;
        onPath.push(i)
        let p = graph[i].next;
        while (p) {
            traverse(graph, p.val)
            p = p.next;
        }
        onPath.pop();
    }
}
*/

//方法二 : bfs
function buildGraph2(numCourses, prerequisites, indegree) {
    const nodes = new Array(numCourses).fill().map((x, idx) => new LinkedList(idx))
    for (let item of prerequisites) {
        const [to, from] = item
        nodes[from].add(to);
        indegree[to]++; //入度
    }
    return nodes;
}
var canFinish = function (numCourses, prerequisites) {

    // 构建入度数组
    let indegree = new Array(numCourses).fill(0);
    // 建图，有向边代表「被依赖」关系
    let graph = buildGraph2(numCourses, prerequisites, indegree);
    // 初始化，入度为0直接加入队列中
    let q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            q.push(i);

        }
    }

    // 记录遍历的节点个数
    let count = 0;
    // 开始执行 BFS 循环
    while (q.length > 0) {
        // 弹出一个节点，代表遍历了一个节点。
        let cur = q.shift();
        count++;
        let p = graph[cur].next;
        while (p) {
            indegree[p.val]--; //子节点入度都减一
            if (indegree[p.val] === 0) { //此节点入度为0，可以入队
                q.push(p.val)
            }
            p = p.next;
        }
    }

    // 拓扑排序遍历了所有节点，说明不成环
    return count == numCourses;
};
