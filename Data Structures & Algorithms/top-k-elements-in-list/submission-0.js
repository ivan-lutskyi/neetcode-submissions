class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (let num of nums) {
            if (count[num]) count[num] += 1;
            else count[num] = 1;
        };
        const countSorted = (Object.entries(count).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA));
        return countSorted.slice(0, k).map(([key, value]) => Number(key))
    }
}
