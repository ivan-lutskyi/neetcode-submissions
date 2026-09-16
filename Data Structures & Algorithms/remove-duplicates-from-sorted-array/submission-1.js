class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) { // [2,10,10,30,30,30]
        let j = 1;
        for (let i = 1; i < nums.length; i++) {
            if(nums[i] !== nums[i - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
}
