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
     * @return {void}
     */
    reorderList(head) {
        let [slow, fast] = [head, head.next];
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        console.log(slow, fast)
        
        let second = slow.next;
        let prev = (slow.next = null);

        while (second !== null) {
            const temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        let first = head;
        second = prev;

        while (second !== null) {
            let [t1, t2] = [first.next, second.next];
            first.next = second;
            second.next = t1;
            first = t1;
            second = t2;
        }
    }
}
