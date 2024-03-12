/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//     let p = []
//     for (let i = 0; i < lists.length; i++) {
//         p[i] = lists[i] //p_i 指向 lists_i 表头
//     }
//     let head = new ListNode();
//     let h = head;
//     while (!over(p)) {

//         const minIdx = idxOfMin(p)
//         h.next = p[minIdx] //连
//         p[minIdx] = p[minIdx].next; // 移
//         h = h.next;
//         h.next = null; // 收

//         // console.log(head.next)
//     }
//     return head.next;

// };
// function idxOfMin(p) {
//     let idx; //表示第几个链表（从0开始）
//     for (let i = 0; i < p.length; i++) {
//         if (!p[i]) continue; //
//         idx = idx === undefined ? i : idx;
//         // console.log(i, idx, p[i], p[idx]);
//         if (p[i] && p[i].val < p[idx].val) {
//             idx = i;
//         }
//     }
//     return idx;
// }
// function over(p) { // 全部p_i指向null则返回true
//     for (let i = 0; i < p.length; i++) {
//         if (p[i])
//             return false
//     }
//     return true;
// }

/**
 * 用根堆,速度比暴力快5倍
 * @param {*} lists 
 * @returns 
 */
var mergeKLists = function (lists) {
    const heap = new MinHeap(lists.length)
    for (let i = 0; i < lists.length; i++) { // 初始堆
        heap.insert(lists[i])
    }
    const head = new ListNode();
    let h = head;
    let cur;
    while (cur = heap.pop()) {
        h.next = cur; //连
        h = h.next; // 移
        heap.insert(cur.next)
        cur.next = null; // 收
    }
    return head.next;
}
class MinHeap {
    constructor() {
        this.p = [] //小根堆
    }
    insert(node) { //插入ListNode节点
        if (!node) return //null节点不插入
        this.p.push(node) // 插入队尾
        this.swim(this.p.length - 1)// 开始上浮
    }
    pop() {
        if (this.p.length === 0)
            return null;
        this.swap(0, this.p.length - 1)
        const res = this.p.pop()
        this.sink(0)
        return res
    }
    swim(idx) {
        while (idx > 0 && this.p[idx].val < this.p[parseInt((idx - 1) / 2)].val) {
            this.swap(idx, parseInt((idx - 1) / 2))
            idx = parseInt((idx - 1) / 2)
        }
    }
    sink(idx) {
        while (2 * idx + 1 <= this.p.length - 1) { //至少有一个子节点
            let minIdx = 2 * idx + 1;
            if (2 * idx + 2 <= this.p.length - 1 && this.p[minIdx].val > this.p[2 * idx + 2].val) {//有两个子节点,且右节点小
                minIdx = 2 * idx + 2;
            }
            if (this.p[minIdx].val >= this.p[idx].val) break; // 子节点没有比顶点小的
            this.swap(idx, minIdx)
            idx = minIdx
        }
    }
    swap(idx1, idx2) {
        const temp = this.p[idx1]
        this.p[idx1] = this.p[idx2]
        this.p[idx2] = temp
    }
}

// @lc code=end

