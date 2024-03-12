function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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

export default {
    ListNode,
    generateLists,
}