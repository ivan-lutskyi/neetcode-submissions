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
        const sorted = intervals.sort((a, b) => a.start - b.start)
        console.log(sorted)

        for (let i = 1; i < intervals.length; i++) {
            if (sorted[i].start < sorted[i - 1].start
            || sorted[i].end < sorted[i - 1].end
            || sorted[i].start < sorted[i - 1].end) return false;
        }
        return true;
    }
}
 