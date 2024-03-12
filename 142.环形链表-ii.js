/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    // const set = new Set()
    // let p = head
    // while(p) {
    //     if(set.has(p)) {
    //         return p
    //     }
    //     set.add(p)
    //     p = p.next;
    // }
    // return null
    let p = head, q = head;
    let first = true;
    while (q && q.next) {
        q = first ? q.next.next : q.next;
        p = p.next;
        if (p === q) {
            if (first) {
                if (p === head) //首位相连的，第一次碰面就是入环点
                    return p;
                p = head
                first = false
            } else {
                return p
            }
        }
    }
    return null
};
// @lc code=end

