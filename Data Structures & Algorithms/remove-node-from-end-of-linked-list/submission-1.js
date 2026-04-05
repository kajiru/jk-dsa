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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fast = head, slow = head;

        for(let i = 0; i < n; i++){
            fast = fast.next;
        }

        // if fast got to null, head is 
        // n'th node from end, remove head & return 
        if(!fast) {
            return head.next
        }

        while(fast.next){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;

        return head;

    }
}
