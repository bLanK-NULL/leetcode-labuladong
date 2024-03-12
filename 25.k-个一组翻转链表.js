/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!isenoughLength(head, k)) {
        return head;
    }
    const newHead = reverseListNpre(head, k)
    head.next = reverseKGroup(head.next, k)
    return newHead;

};
function isenoughLength(head, k) {
    for (; k > 0; k--) {
        if (!head) return false;
        head = head.next;
    }
    return true;
}
/**
 * 反转前right个节点
 * @param {*} head 
 * @param {*} right 
 * @returns 返回反转后的表头
 */
let post = null;
var reverseListNpre = function (head, right) {
    if (right === 1) {
        post = head.next;
        return head;
    }
    if (right > 1) {
        let newHead = reverseListNpre(head.next, right - 1)
        head.next.next = head;
        head.next = post;
        return newHead;
    }
}
// @lc code=end

