class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixes = [];
        const postfixes = []
        for (let i = 0; i < nums.length; i++) {
            prefixes.push(i === 0 ? nums[i] : nums[i] * prefixes[i-1])
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            postfixes[i] = (i === nums.length - 1 ? nums[i] : nums[i] * postfixes[i+1])
        }

        console.log(prefixes)
        console.log(postfixes)

        return nums.map((n, i) => {
            if (i === 0) return postfixes[1];
            else if (i === nums.length - 1) return prefixes[i - 1]
            return prefixes[i-1] * postfixes[i+1]
        })
    }
}
