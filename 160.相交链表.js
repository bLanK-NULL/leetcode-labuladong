/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let hab = patch(headA, headB);
    let hba = patch(headB, headA);
    for (let i = 0; i < hab.length; i++) {
        if (hab[i] === hba[i])
            return hab[i]
    }
    return null
};
function patch(ha, hb) {
    const arrA = []
    let p1 = ha, p2 = hb;
    while (p1) {
        arrA.push(p1)
        p1 = p1.next;
    }
    while (p2) {
        arrA.push(p2)
        p2 = p2.next;
    }
    return arrA;
}
// @lc code=end

