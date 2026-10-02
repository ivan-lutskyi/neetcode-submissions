class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    pivotIndex(nums) {
        // const prefixSums = [];

        for (let i = 0; i < nums.length; i++) {
            nums[i] = i > 0 ? nums[i] + nums[i-1] : nums[i];
        }; 

        console.log(nums)

        for (let i = 0; i < nums.length; i++) {
            if (i === 0 && nums[nums.length - 1] - nums[i] === 0) {
                return 0;
            }
            else if (nums[i-1] === nums[nums.length - 1] - nums[i]) {
                return i;
            }
        }

        return -1;
    }
}
