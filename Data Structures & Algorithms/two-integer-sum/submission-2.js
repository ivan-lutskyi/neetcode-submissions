class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // O(n^2)
        // for (let i = 0; i < nums.length - 1; i+=1) {
        //     for (let j = i + 1; j < nums.length; j+=1) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j];
        //         }
        //     }
        // }
        // return [];

        const numsMap = new Map(); // { n : i }
        for (const [i, n] of Object.entries(nums)) {
            const diff = target - n;
            if (numsMap.get(diff)) {
                return [Number(numsMap.get(diff)), Number(i)]
            }
            numsMap.set(n, i);
        }
        return;
    }
}
