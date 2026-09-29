class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[j] - prices[i] > profit) {
                    profit = prices[j] - prices[i];
                }
            }
        }

        return profit;

        // let L = 0;
        // let R = 1;
        // let maxP = 0;

        // while (R < prices.length) {
        //     if (prices[L] < prices[R]) {
        //         maxP = Math.max(maxP, prices[R] - prices[L])
        //     } else {
        //         L = R;
        //     }
        //     R+=1;
        // }

        // return maxP
    }
}
