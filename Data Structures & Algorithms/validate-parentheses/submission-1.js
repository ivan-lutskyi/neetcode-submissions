class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = new Map([["}", "{"], [")", "("], ["]", "["]]);

        for (const char of s) {
            if (closeToOpen.has(char)) {
                console.log(stack);
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen.get(char)) {
                    stack.pop();
                }
                else return false;
            }
            else {
                stack.push(char);
            }
        }

        return stack.length === 0 ? true : false;
    }
}
