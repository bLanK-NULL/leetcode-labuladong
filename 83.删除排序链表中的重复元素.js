/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next)
        return head
    let p = head, q = head.next;
    while(q) {
        while(q) {
            if(q.val === p.val) {
                const temp =   q;
                q = q.next;
                temp.next = null;
                if(q === null) {
                    p.next = null;
                    return head;
                }
            }else {
                p.next = q;
                p = q;
                q = q.next;
                break;
            }
        }
    }
    return head;
};
 
// @lc code=end

