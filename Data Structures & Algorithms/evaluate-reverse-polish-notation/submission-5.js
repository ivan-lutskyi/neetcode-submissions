class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const t of tokens) {
            if (!(['+', '-', '*', '/'].includes(t))) {
                stack.push(Number(t));
                continue;
            }
            
            const [b, a] = [stack.pop(), stack.pop()];
            if (t === '+') stack.push(a + b);
            else if (t === '-') stack.push(a - b);
            else if (t === '*') stack.push(a * b);
            else if (t === '/') stack.push(Math.trunc(a / b));
        }

        console.log(stack)
        return (stack[0]);
    }
}
