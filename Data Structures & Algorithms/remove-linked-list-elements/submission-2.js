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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        let slow = head;

        while (!!slow && slow.val && slow.val === val) {
            slow = slow.next;
        } // [0, x] x - first node.val===val

        head = slow;

        if (!head?.next) return head;

        let fast = slow.next;

        // [x, n]
        while (!!fast) { // iterate through all list
            if (fast.val !== val) {
                slow.next = fast;
                slow = fast;
            }
            fast = fast.next;
        };

        console.log(slow, fast)
        slow.next = null

        return head;
    }
}
