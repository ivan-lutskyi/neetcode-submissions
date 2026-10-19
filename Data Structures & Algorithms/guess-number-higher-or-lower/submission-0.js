/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let [L, R] = [1, n];

        while (L <= R) {
            let mid = Math.round((R+L)/2);

            if (guess(mid) === 1) {
                L = mid+1;
            } else if (guess(mid) === -1) {
                R = mid-1;
            } else return mid;
        }
    }
}
