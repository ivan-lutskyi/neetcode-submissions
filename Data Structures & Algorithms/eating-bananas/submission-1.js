class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const max = Math.max(...piles); // O(n)
        let res = 0;
        // res = [1, max]
        const allBananas = piles.reduce((acc, val) => acc + val, 0)

        let [L, R] = [1, max];

        while (L <= R) {
            let mid = Math.floor((L+R) / 2);

            const perPile = this.bananasPerSpeed(piles, mid);
            console.log(allBananas, ' bananas in ', perPile, ' speed. Mid speed: ', mid)

            const isSpeedEnough = perPile <= h;

            if (isSpeedEnough) {
                res = mid;
                R = mid - 1;   // try smaller speeds
            } else {
                L = mid + 1;   // need faster speed
            }
        }

        return res;
    }

    bananasPerSpeed(piles, s) {
        return piles.reduce((acc, el) => acc + Math.ceil(el / s), 0)
    }
}
