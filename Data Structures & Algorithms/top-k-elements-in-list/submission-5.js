class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const amountMap = new Map();
        const freqBuckets = Array.from({length: nums.length + 1}, () => []);
    
        for (const num of nums) {
            if (amountMap.has(num)) amountMap.set(num, amountMap.get(num) + 1);
            else amountMap.set(num, 1);
        }

        amountMap.forEach((freq, key) => {
            freqBuckets[freq].push(key);
        })

        console.log(amountMap)
        console.log(freqBuckets)

        const result = [];
        for (let i = freqBuckets.length - 1; i >= 0; i--) {
            for (const num of freqBuckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
