/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let p = head;
    const res = new ListNode()
    const big = new ListNode()
    let q = res;
    let b = big;
    while (p) {
        // console.log(res.next, big.next);
        let temp = p.next;
        if (p.val < x) {
            q.next = p;
            q = q.next;
        } else {
            b.next = p;
            b = b.next;
        }
        p = temp;
    }
    q.next = big.next;
    b.next = null;
    return res.next
};
// @lc code=end

