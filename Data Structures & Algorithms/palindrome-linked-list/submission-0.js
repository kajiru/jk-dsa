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
     * @return {boolean}
     */
    getMiddle(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    reverseList(head) {
        let curr = head; 
        let prev = null;
        while(curr){
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    isPalindrome(head) {
        // go to middle 
        const middle = this.getMiddle(head);

        // reverse second half
        let second = this.reverseList(middle);

        // check 1st half against reversed 2nd half
        let curr = head;
        while(curr && second){
            if(curr.val !== second.val) return false;
            curr = curr.next;
            second = second.next;
        }
        return true;
        
    }
}
