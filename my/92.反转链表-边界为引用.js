function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    const vhead = new ListNode()
    vhead.next = head;
    let p = vhead;
    const nextRight = right.next;
    while (p.next) {
        if (p.next === left) {
            p.next = right;
            postTraverse(left, right)
            left.next = nextRight;
            break;
        }
        p = p.next;
    }
    return vhead.next;
};
function postTraverse(left, right) {
    if (left === right) return left;
    const post = postTraverse(left.next, right);
    post.next = left;
    return left;
}


ListNode.prototype.toString = function () {
    let p = this;
    let result = ''
    while (p) {
        result += p.val + " -> "
        p = p.next;
    }
    result += 'null'
    return result
}

function generateLists(n, l, r) {
    const head = new ListNode()
    let p = head;
    let left = null;
    let right = null;
    for (let i = 0; i < n; i++) {
        const node = new ListNode(i + 1)
        if (i + 1 === l) left = node;
        if (i + 1 === r) right = node;
        p.next = node;
        p = node;
    }
    return { head: head.next, left, right }
}

const { head, left, right } = generateLists(5, 1, 3)

console.log(head + "")
const rhead = reverseBetween(head, left, right)
console.log(rhead + '')