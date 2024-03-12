/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head 当前头
 * @return {ListNode}   以当前head为头节点的整个链表反转后的新头节点
 */
var reverseList = function (head) {
    if (!head || !head.next) return head;
    const newHead = reverseList(head.next)
    head.next.next = head;
    head.next = null;
    return newHead;
};

// @lc code=end

