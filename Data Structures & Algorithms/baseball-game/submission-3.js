class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let j = 0;

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === '+') {
                stack.push(stack[j-1] + stack[j-2]);
                j++
            } else if (operations[i] === 'D') {
                stack.push(stack[j-1] * 2);
                j++;
            } else if (operations[i] === 'C') {
                stack.pop();
                j--;
            } else {
                stack.push(Number(operations[i]));
                j++;
            }
        }

        return stack.reduce((acc, el) => acc + el, 0);
    }
}
