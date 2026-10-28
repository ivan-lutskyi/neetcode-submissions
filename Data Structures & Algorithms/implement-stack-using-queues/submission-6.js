class MyStack {
    stack = [];
    head = 0;
    tail = 0;

    constructor() {}

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.head += 1;
        this.stack[this.head - 1] = x;
    }

    /**
     * @return {number}
     */
    pop() {
        const latest = this.top();
        this.head -= 1;
        return latest;
    }

    /**
     * @return {number}
     */
    top() {

        if (this.head > this.tail) {
            return this.stack[this.head - 1];
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        return Boolean(this.head === this.tail);
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
