class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqNums = new Set();

        for (const num of nums) {
            if (uniqNums.has(num)) {
                return true;
            }
            uniqNums.add(num);
        }
        return false;
    }
}
