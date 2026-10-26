/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const calendar = {};

        for (const {start, end} of intervals) {
            for (let i = start; i < end; i++) {
                if (calendar[i] === 1) return false;
                calendar[i] = 1; // 1 - already busy
            }
        }
        return true;
    }
}
 