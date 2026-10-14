class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        return Math.max(
            nums[0],
            Math.max(
                this.helper(nums.slice(0, nums.length - 1)),
                this.helper(nums.slice(1, nums.length))
            )
        )
    }

    helper(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for (let n of nums) {
            let temp = Math.max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return rob2;
    }
}
