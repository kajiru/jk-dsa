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

    getMid(head) {
        // const size = this.getSize(head);
        // const mid = Math.floor(size / 2);
        // const cur = head;
        // while(mid > 0) {
        //     cur = cur.next;
        //     mid--;
        // }
        // return cur;

        // better algo with single pass:
        let slow = head;
        let fast = head;
        // only use fast in the loop condition, because we primarily care about that
        while(fast !== null && fast.next !== null && fast.next.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    reverse(head) {
        if(head === null || head.next === null) {
            return head;
        }
        const newHead = this.reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    merge(h1, h2) {
        const final = h1;
        let next1, next2;
        // h1 = h1.next;
        while(h1 !== null && h2 !== null) {
            next1 = h1.next;
            next2 = h2.next;

            h1.next = h2;
            if(next1 === null) break;
            h2.next = next1;

            h1 = next1;
            h2 = next2;
            // final = fina.next.next;
        }
        return final;
    }
    
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if(!head || !head.next) return head;

        const mid  = this.getMid(head);

        const secondHalf = mid.next;
        mid.next = null;
        const reversedSecond = this.reverse(secondHalf);
    
        this.merge(head, reversedSecond);
    }

}
