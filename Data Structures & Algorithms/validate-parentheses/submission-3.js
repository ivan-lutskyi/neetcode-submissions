class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {"}": "{", ")": "(", "]": "["};

        for (const char of s) {
            if (!(char in closeToOpen)) { // open
                stack.push(char);
                continue
            } 
            if (closeToOpen[char] !== stack.pop()) return false;
        }

        return stack.length === 0;
    }
}
