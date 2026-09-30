class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const window = new Set();
        let L = 0;
        let longestSubStrLen = 0;

        for (let r = 0; r < s.length; r += 1) {
            while (window.has(s[r])) {
                window.delete(s[L]);
                L++;
            }
            window.add(s[r]);
            longestSubStrLen = Math.max(longestSubStrLen, r-L+1);
        }

        return longestSubStrLen;
    }
}
