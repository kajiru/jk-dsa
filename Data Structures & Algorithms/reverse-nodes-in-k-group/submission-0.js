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
    reverseBetween(head, left, right) {
        // console.log(this.asArray(head), "rev between: ", left, right);
        const dummy = new ListNode(0, head);

        let curr = head;
        let prev = null;

        let beforeLeft = dummy;
        let revTail = null;

        // find node before left;
        for (let i = 1; i < left; i++) {
            beforeLeft = curr;
            curr = curr.next;
        }

        // reverse left --> right;
        revTail = curr; // capture the end of to-be reversed section
        for (let i = 0; i < right - left + 1; i++) {
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

    listLength(head) {
        let len = 0;
        let curr = head;
        while (curr) {
            curr = curr.next;
            len++;
        }
        return len;
    }

    asArray(head){
        let curr = head;
        let res = []
        while (curr) {
            res.push(curr.val)
            curr = curr.next;
        }
        return res;
    }
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const len = this.listLength(head);
        let curr = head;

        for (let i = 1; i <= len; i += k) {
            if (len - i + 1 < k ) continue;
            curr = this.reverseBetween(curr, i, i + k - 1);
        }
        return curr;
    }
}
