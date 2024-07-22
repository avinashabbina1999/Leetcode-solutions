/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* head = new ListNode();
        ListNode* prev = head;
        while (list1 != nullptr && list2 != nullptr) {
            ListNode* node = new ListNode();
            node->val = 0;
            node->next = nullptr;
            if (list1->val <= list2->val) {
                node->val = list1->val;
                list1 = list1->next;
            }else{
                node->val = list2->val;
                list2 = list2->next;
            }
            if(prev==nullptr)
                prev = node;
            else{
                prev->next = node;
                prev = prev->next;
            }
        }
        if(list1==nullptr){
            if(prev==nullptr)
                prev = list2;
            else{
                prev->next = list2;
                prev = prev->next;
            }
        }else{
            if(prev==nullptr)
                prev = list1;
            else{
                prev->next = list1;
                prev = prev->next;
            }
        }
        return head->next;
    }
};