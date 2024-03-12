/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let l = list1;
    let r = list2;
    if (!l || !r) { //特殊情况
        return !l ? r : l;
    }
    let res = null;
    while (l && r) {
        if (l.val<=r.val) {
            res = res? res: l;
            if(l.next && l.next.val<=r.val) {
                l = l.next;
                continue
            }else {
                let p = l.next;
                l.next = r;
                l = p;
            }
        }else {
            res = res? res: r;
            if(r.next && r.next.val<l.val) {
                r = r.next;
                continue;
            }else {
                let p = r.next;
                r.next = l;
                r = p;
            }
        }
    }

    return res
};

// @lc code=end

