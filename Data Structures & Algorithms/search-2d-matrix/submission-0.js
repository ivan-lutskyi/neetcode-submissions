class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let res = false;
        matrix.forEach(arr => {
            if (this.search(arr, target)) res = true;
            return arr;
        })
        return res;
    }

    search(nums, target) {
        let leftIdx = 0;
        let rightIdx = nums.length - 1;
        let midIdx = Math.ceil(rightIdx / 2);

        if (nums[midIdx] === target) return true;

        while (leftIdx <= rightIdx) {
            midIdx = Math.ceil((leftIdx + rightIdx) / 2)

            if (target < nums[midIdx]) rightIdx = midIdx - 1
            else if (target > nums[midIdx]) leftIdx = midIdx + 1;
            else return true;
        }

        return false;
    }
}
