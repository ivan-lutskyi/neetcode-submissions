class MyStack {
    stack = [];
    head = 0;

    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push(x);
        this.head += 1;
    }

    /**
     * @return {number}
     */
    pop() {
        const latest = this.top();
        this.head -= 1;
        this.stack = this.stack.slice(0, this.head);
        return latest;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        return Boolean(this.stack.length === 0);
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
