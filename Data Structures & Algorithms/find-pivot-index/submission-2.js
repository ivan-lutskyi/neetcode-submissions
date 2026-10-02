class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    pivotIndex(nums) {
        const prefixSums = [];

        for (let i = 0; i < nums.length; i++) {
            prefixSums[i] = i > 0 ? nums[i] + prefixSums[i-1] : nums[i];
        }; 

        console.log(prefixSums)

        for (let i = 0; i < prefixSums.length; i++) {
            if (i === 0 && prefixSums[prefixSums.length - 1] - prefixSums[i] === 0) {
                return 0;
            }
            else if (prefixSums[i-1] === prefixSums[prefixSums.length - 1] - prefixSums[i]) {
                return i;
            }
        }

        return -1;
    }
}
