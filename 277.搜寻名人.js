/*给你 n 个人的社交关系（你知道任意两个人之间是否认识），然后请你找出这些人中的「名人」。
所谓「名人」有两个条件：
1、所有其他人都认识「名人」。
2、「名人」不认识任何其他人。

给你输入一个大小为 n x n 的二维数组（邻接矩阵） graph 表示一幅有 n 个节点的图，
每个人都是图中的一个节点，编号为 0 到 n - 1。
如果 graph[i][j] == 1 代表第 i 个人认识第 j 个人，如果 graph[i][j] == 0 代表第 i 个人不认识第 j 个人。
如果存在，算法返回这个名人的编号，如果不存在，算法返回 -1。
*/

//方法一： 暴力
var findCelebrity = function (graph) {
    const n = graph.length
    for (let j = 0; j < n; j++) {
        let count = 0; // 几个人认识j
        for (let i = 0; i < n; i++) {
            if (i !== j) {
                if (!graph[i][j] || graph[j][i])//j不是名人
                    break;
                else count++;
            }
            if (count === n)
                return j;
        }
        count = 0;
    }
    return -1;
}

//方法二： 
var findCelebrity2 = function (graph) {
    const n = graph.length;
    const isCandidate = new Array(n).fill(true)
    let cur = 0;
    for (let i = 1; i < n && cur < n; i++) {
        if (i !== cur) {
            if (graph[cur][i] && graph[i][cur]) { //互相认识，都不是名人
                isCandidate[cur] = false;
                isCandidate[i] = false;
                cur = i + 1;
            } else if (!graph[cur][i] && !graph[i][cur]) { //互不认识，都不是名人
                isCandidate[cur] = false;
                isCandidate[i] = false;
                cur = i + 1;
            } else if (graph[cur][i] && !graph[i][cur]) { // 单向，cur认识i
                isCandidate[cur] = false;
                cur = i;
            } else { // i 认识 cur
                isCandidate[i] = false;

            }
        }
    }
    return isCandidate.indexOf(true);
}
