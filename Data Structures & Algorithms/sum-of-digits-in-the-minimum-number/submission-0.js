class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    sumOfDigits(nums) {
        let min = Math.min(...nums);

        const res = `${min}`.split('').reduce((acc, el) => acc + Number(el), 0);
        return res % 2 === 0 ? 1 : 0;
    }
}
