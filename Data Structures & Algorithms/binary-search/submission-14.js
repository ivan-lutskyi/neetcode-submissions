class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let leftIdx = 0;
        let rightIdx = nums.length - 1;
        let midIdx = Math.ceil(rightIdx / 2);

        if (nums[midIdx] === target) return midIdx;
        if (nums[leftIdx] === target) return leftIdx;
        if (nums[rightIdx] === target) return rightIdx;

        while (leftIdx < rightIdx && midIdx > leftIdx && midIdx < rightIdx) {
            if (nums[midIdx] === target) return midIdx;

            // go left
            if (target < nums[midIdx]) {
                rightIdx = midIdx;
                midIdx = Math.ceil((leftIdx + rightIdx) / 2)
            // go right
            } else if (target > nums[midIdx]) {
                leftIdx = midIdx;
                midIdx = Math.ceil((leftIdx + rightIdx) / 2)
            };
        }

        return -1;
    }
}
