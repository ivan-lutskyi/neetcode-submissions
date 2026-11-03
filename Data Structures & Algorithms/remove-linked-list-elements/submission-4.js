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
        let dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = head;

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

        return dummy.next;
    }
}
