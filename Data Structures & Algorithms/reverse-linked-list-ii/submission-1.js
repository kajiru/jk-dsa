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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        const dummy = new ListNode(0, head);

        let curr = head; 
        let prev = null;

        let beforeLeft = dummy;
        let revTail = null;

        // find node before left;
        for(let i = 1; i < left; i++){
            beforeLeft = curr;
            curr = curr.next;
        }

        // reverse left --> right; 
        revTail = curr; // capture the end of to-be reversed section
        for(let i = 0; i < right - left + 1; i++){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // connect reversed section to rest of list
        beforeLeft.next = prev;
        revTail.next = curr;
        return dummy.next;
    }
}
