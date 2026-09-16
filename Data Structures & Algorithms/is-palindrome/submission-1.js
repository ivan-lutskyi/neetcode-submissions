class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphanumeric = char => /[a-z0-9]/i.test(char);

        let p1 = 0;
        let p2 = s.length - 1;

        while (p1 < p2) {
            if (!isAlphanumeric(s[p1])) p1+=1;
            else if (!isAlphanumeric(s[p2])) p2-=1;
            else {
                console.log(s[p1], s[p2])

                if (s[p1].toLowerCase() === s[p2].toLowerCase()) {
                    p1 += 1;
                    p2 -= 1;
                } else {
                    return false
                }
            }
        }
        return true;
    }
}
