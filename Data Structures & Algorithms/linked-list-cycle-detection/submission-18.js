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
    hasCycle(head) {
        // console.log(head)
        // const vals = new Set()
        // let current = head;
        // if (!head || !head.next) return false;
        // while (current.next) {
        //     if (vals.has(current.val)) return true;
        //     vals.add(current.val)
        //     if (current.next) current = current.next
        // }
        // return false
        let [s, f] = [head, head];
f
        while (f && f.next) {
            s = s.next;
            f = f.next.next;
            if (s === f) return true;
        }
        return false;
    }
}
