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
     * @return {ListNode}
     */
    reverseList(head) {
        // [0,1,2,3]

        let current = head; // 0 -> 1
        let prev = null;

        while (current !== null) {
            const next = current.next; // 1 -> 2
      
            current.next = prev; // <- null <- 0
            prev = current; 
            current = next; // 1
        }

        return prev;
    }
}
