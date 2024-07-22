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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head1 = list1,head2 = list2;
        ListNode head = new ListNode();
        while(head1!=null && head2!=null){
            ListNode node = new ListNode();
            if(head1.val<=head2.val){
                node.val = head1.val;
                head1 = head1.next;
                node.next = null;
            }else{
                node.val = head2.val;
                head2 = head2.next;
                node.next = null;
            }
            if(head==null){
                head = node;
                head.next = null;
            }else{
                ListNode temp = head;
                while(temp.next!=null)
                    temp = temp.next;
                temp.next = node;
            }
        }
        if(head1==null){
            if(head==null){
                head = head2;
                head.next = null;
            }else{
                ListNode temp = head;
                while(temp.next!=null)
                    temp = temp.next;
                temp.next = head2;
            }
        }else{
            if(head==null){
                head = head1;
                head.next = null;
            }else{
                ListNode temp = head;
                while(temp.next!=null)
                    temp = temp.next;
                temp.next = head1;
            }
        }
        return head.next;
    }
}