class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isConsecutive(nums) {
        let min = nums[0];
        let max = nums[0];

        for (let i = 0; i < nums.length; i++) {
            min = Math.min(nums[i], min);
            max = Math.max(nums[i], max);
        };

        return max - min === nums.length - 1;
    }
}
