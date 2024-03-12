/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
let p;
var isPalindrome = function (head) {
    if (!head.next) return true;
    p = head;
    return posttraverse(head)
};
//方法2
function posttraverse(head) {
    if (!head) return true;
    let res = posttraverse(head.next)
    res = res && (head.val === p.val)
    p = p.next;
    return res;
}

// 方法1
// function posttraverse(head) {
//     if (!head) return true;
//     if (head.next && (p === head.next.next || head.next === p))//过了，退出条件
//         return posttraverse(head.next);
//     let res = posttraverse(head.next)

//     if (!res || head.val !== p.val) {
//         return false;
//     } else {
//         p = p.next;
//         return true;
//     }
// }
// @lc code=end

