class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const res1 = this.helper(0, 0, s);
        const res2 = this.helper(0, 1, s);

        return res1 + res2;
    }

    helper(lDef, rDef, str) {
        let resAll = 0

        for (let i = 0; i < str.length; i++) {
            
            let l = lDef + i;
            let r = rDef + i;

            while (l >= 0 && r < str.length && str[l] === str[r]) {
                resAll+=1
                l -= 1;
                r += 1;
            }
        }

        return resAll;
    }
}
