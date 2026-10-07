class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;
        const dp = [0, 1];
        let i = 2;
        while (i <= n) {
            const tmp = dp[1];
            dp[1] = dp[0] + dp[1]
            dp[0] = tmp;

            i++;
        }

        return dp[0] + dp[1]
    }
}
