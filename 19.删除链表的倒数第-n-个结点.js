/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const res = new ListNode()
    res.next = head;
    let p1 = res, p2 = res;
    let step = 0;
    while (p1) {
        p1 = p1.next;
        step++;
        if (step > n + 1) {
            p2 = p2.next;
        }
    }
    const del = p2.next;
    p2.next = del.next;
    delete del;
    return res.next;
};
// @lc code=end

