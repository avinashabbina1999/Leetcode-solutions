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
var deleteMiddle = function(head) {
    const prev = new ListNode(0,head)
    let slow = prev,fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    slow.next = slow.next.next
    return prev.next
};