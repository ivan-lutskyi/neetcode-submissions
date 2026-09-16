class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const sArr = s.split("").sort();
        // const tArr = t.split("").sort();

        // if (sArr.join("") === tArr.join("")) return true;
        // return false;
        if (s.length !== t.length) return false;

        const sMap = new Map();
        const tMap = new Map();

        for (const char of s) {
            if (sMap.has(char)) {
                sMap.set(char, sMap.get(char) + 1);
            }
            else {
                sMap.set(char, 1);
            }
        }

        for (const char of t) {
            if (tMap.has(char)) {
                tMap.set(char, tMap.get(char) + 1);
            }
            else {
                tMap.set(char, 1);
            }
        }

        for (const [key, _] of sMap) {
            if (sMap.get(key) !== tMap.get(key)) {return false}
        }
        return true;
    }
}
