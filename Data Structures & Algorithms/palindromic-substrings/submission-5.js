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

    factorial(n) {
        if (n < 0) return 0;
        let result = 1n; // Використовуємо BigInt для великих чисел
        for (let i = 2n; i <= BigInt(n); i++) {
            result *= i;
        }
        return (result);
    }
}
