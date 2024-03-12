/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next) return head;
    if (left === 1) {
        return reverseListNpre(head, right)
    } else {
        head.next = reverseBetween(head.next, left - 1, right - 1)
        return head;
    }

};

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

