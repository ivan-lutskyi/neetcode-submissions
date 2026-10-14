class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        let rob1 = 0;
        let rob2 = 0;
        let res = 0;

        for (let n of nums.slice(0, nums.length - 1)) {
            let temp = Math.max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        res = rob2;
        rob1 = 0;
        rob2 = 0;

        for (let n of nums.slice(1, nums.length)) {
            let temp = Math.max(rob1 + n, rob2);
            rob1 = rob2;
            rob2 = temp;
        }

        return Math.max(res, rob2)
    }
}
