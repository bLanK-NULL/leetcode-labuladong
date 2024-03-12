function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function generateLinkList(arr) {
    let result = null
    let p;
    for (let i = 0; i < arr.length; i++) {
        if (!result) {
            result = new ListNode(arr[i])
            p = result;
        } else {
            p.next = new ListNode(arr[i])
            p = p.next;
        }
    }
    return result;
}
function findMidNode(head) {
    let vhead = new ListNode()
    vhead.next = head;
    let p1 = vhead, p2 = vhead
    while(p2.next ) {
        p2 = p2.next.next;
        p1 = p1.next;

    }
    return p1
}

const arr = [1,  2, 3, 4]
const result = findMidNode(generateLinkList(arr))
console.log(result);