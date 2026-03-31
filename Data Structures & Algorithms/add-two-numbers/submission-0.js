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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let cur1 = l1; 
        let cur2 = l2; 

        let dummy = new ListNode();
        let tail = dummy;

        let carry = 0;

        while(cur1 || cur2) {
            const val1 = cur1?.val || 0;
            const val2 = cur2?.val || 0;
            let sum = val1 + val2 + carry;
            
            carry = Math.floor(sum/10);
            let digit = sum % 10;

            tail.next = new ListNode(digit);

            tail = tail.next;
            if(cur1) cur1 = cur1.next;
            if(cur2) cur2 = cur2.next;
        }


        if(carry) {
            tail.next = new ListNode(carry);
        }

        return dummy.next;
    }
}
