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
     * @param {number} m
     * @param {number} n
     * @return {ListNode}
     */
    deleteNodes(head, m, n) {
        let curr = head;
        let currM = m,
            currN = n;

        let prev = null;
        while (curr) {
            if (currM > 0) {
                prev = curr;
                currM = Math.max(currM - 1, 0);
                if (currM === 0) currN = n;
                curr = curr.next;
            }else {
                prev.next = curr.next;
                curr.next = null;
                curr = prev.next;
                currN = Math.max(currN - 1, 0);
                if(currN === 0) currM = m;
            }
        }
        return head;
    }
}
