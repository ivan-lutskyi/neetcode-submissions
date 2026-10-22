class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let [L, R] = [0, nums.length - 1]
        let M = Math.ceil((L+R)/2);
        // find how many times array was reverted
        while (L < R) {
            M = Math.floor((L+R)/2);

            console.log(L, M, R)

            if (nums[L] < nums[R]) {
                return nums[L]
            }
            
            if (nums[M] >= nums[L]) {
                L = M + 1
            } else {
                R = M
            }
        }

        console.log(L, M, R)
        return nums[L]
    }
}
