class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.slice();
        for (let i = 0; i < position.length; i++) {
            pair[i] = [pair[i], speed[i]]
        }
        pair.sort((a, b) => b[0] - a[0])

        const countTime = (pos, speed) => (target - pos) / speed;

        const stack = [];
        for (const [pos, speed] of pair) {
            stack.push(countTime(pos, speed))
            if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }
        return stack.length
    }
}
