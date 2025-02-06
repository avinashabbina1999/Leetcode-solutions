/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int pairSum(ListNode head) {
        ListNode slow = head,fast = head.next;

        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode curr = null;
        while(slow!=null){
            ListNode temp = slow.next;
            slow.next = curr;
            curr = slow;
            slow = temp;
        }
        int ans = 0;
        while(head!=null && curr!=null){
            ans = Math.max(ans,head.val+curr.val);
            head = head.next;
            curr = curr.next;
        }
        return ans;
    }
}