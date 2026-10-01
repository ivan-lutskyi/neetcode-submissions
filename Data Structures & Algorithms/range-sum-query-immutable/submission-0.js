class NumArray {
    nums = [];
    prefixSums = [];
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;

        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i] = i > 0 ? nums[i] + this.prefixSums[i-1] : nums[i];
        };
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left > 0) return this.prefixSums[right] - this.prefixSums[left - 1]
        return this.prefixSums[right];
    }
}
