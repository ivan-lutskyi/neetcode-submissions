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
    deleteDuplicates(head) {
        let slow = head, fast = head;

        while (fast) {
            if (slow.val === fast.val) {
                fast = fast.next;
            } else {
                slow.next = fast;
                slow = fast;
                fast = fast.next;
            }
        }
        if (slow) slow.next = null
        return head;
    }
}
