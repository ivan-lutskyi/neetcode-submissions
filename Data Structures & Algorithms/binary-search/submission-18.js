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

        while (leftIdx <= rightIdx) {
            midIdx = Math.ceil((leftIdx + rightIdx) / 2)

            if (target < nums[midIdx]) rightIdx = midIdx - 1
            else if (target > nums[midIdx]) leftIdx = midIdx + 1;
            else return midIdx;
        }

        return -1;
    }
}
