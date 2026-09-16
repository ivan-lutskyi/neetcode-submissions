class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    uniqNums = new Set();
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i+=1) {
            if (!this.uniqNums.has(nums[i])) {
                this.uniqNums.add(nums[i]);

                if (i === nums.length - 1) {
                    return false;
                }
            } else {
                return true;
            }
        }
        return false;
    }
}
