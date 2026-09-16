class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        let j = nums.length;
        // O(n)
        for (let i = 0; i < nums.length; i++) {
            ans[i] = nums[i]; // copy basic arr -> i:0 = 22
            ans[j] = nums[i]; // duplicating from [num.length] index -> j:4 = 22
            j++;
        }
        return ans;
    }
}
