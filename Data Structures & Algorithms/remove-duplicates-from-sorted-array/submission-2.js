class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) { // [2,10,10,30,30,30]
        let l = 0;
        let r = 1;

        while (r <= nums.length) {
            if (nums[l] === nums[r]) {
                r += 1;
            } else {
                nums[l+1] = nums[r];
                l+=1;
                r+=1;
            }
        }

        return l;
    }
}
