class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    uniqNums = [];
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i+=1) {
            if (!this.uniqNums.includes(nums[i])) {
                this.uniqNums = [...this.uniqNums, nums[i]]

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
