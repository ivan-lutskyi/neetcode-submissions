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
    isPalindrome(head) {
        /**
         * 1) find a middle
         * 2) reverse a part from middle to end
         * 3) iterate through first and reversed second part comparing values
         */
        let slow = head, fast = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        };

        let prev = null;
        let curr = slow;

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        console.log(prev)
        
        let left = head, right = prev;
        while(right) {
            if (left.val === right.val) {
                left = left.next;
                right = right.next
            }
            else return false
        }
        return true;
    }
}
