/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let cur1 = list1;
        let cur2 = list2;

        let head = new ListNode();
        let final = head;

        while(cur1 && cur2) {
            if(cur1.val < cur2.val) {
                final.next = cur1;
                cur1 = cur1.next;
            } else {
                final.next = cur2;
                cur2 = cur2.next;
            }
            final = final.next;
        }
        final.next = cur1 || cur2; // loop stops 
        // when only one is null, so attach the remaining
        return head.next;
    }
}
