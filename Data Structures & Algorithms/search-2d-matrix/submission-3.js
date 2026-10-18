class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // let res = false;
        // matrix.forEach(arr => {
        //     if (this.search(arr, target)) res = true;
        //     return arr;
        // })
        // return res;
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bottom = ROWS - 1

        while (top <= bottom) {
            const row = Math.floor((top + bottom) / 2);
            if (target > matrix[row][COLS - 1]) top = row + 1;
            else if (target < matrix[row][0]) bottom = row - 1;
            else {break}
        }

        if (!(top <= bottom)) return false

        const row = Math.floor((top + bottom) / 2);

        return this.search(matrix[row], target)

    }

    search(nums, target) {
        let leftIdx = 0;
        let rightIdx = nums.length - 1;
        let midIdx = Math.floor(rightIdx / 2);

        while (leftIdx <= rightIdx) {
            midIdx = Math.floor((leftIdx + rightIdx) / 2)

            if (target < nums[midIdx]) rightIdx = midIdx - 1
            else if (target > nums[midIdx]) leftIdx = midIdx + 1;
            else return true;
        }

        return false;
    }
}
