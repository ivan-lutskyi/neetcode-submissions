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
        if (!head) return false;

        let s = head;
        let f = head;
        console.log(s)

        while (f.next !== null) {
            f = f.next;
            if (f === null || f.next === null) return false;

            if (s.val === f.val) return true;

            s = s.next;
            if (!!f.next) f = f.next;
            else return false;
        }
        return false;
    }
}
