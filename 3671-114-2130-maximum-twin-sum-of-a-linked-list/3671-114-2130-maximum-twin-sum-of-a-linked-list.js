/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head,fast = head.next
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let ans = 0,node = null
    while(slow){
        let temp = slow.next
        slow.next = node
        node = slow
        slow = temp
    }

    while(head && node){
        ans = Math.max(ans,(node.val+head.val))
        node = node.next
        head = head.next
    }
    return ans
};