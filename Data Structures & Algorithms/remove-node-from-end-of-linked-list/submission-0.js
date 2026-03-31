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
    size (head){
        let cur = head;
        let s = 0;
        while(cur != null) {
            cur = cur.next;
            s++;
        }
        return s;
    }

    removeNth(head, n) {
        if (!head) return null;
        if(n === 0) return head.next;

        let cur = head;

        while(n > 1 && cur.next !== null) {
            cur = cur.next;
            n--;
        }
        if(cur.next) cur.next = cur.next.next;
        
        return head;
    }

    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const size = this.size(head);
        const r = size - n;
        return this.removeNth(head, r);
        // return head;
    }

}
