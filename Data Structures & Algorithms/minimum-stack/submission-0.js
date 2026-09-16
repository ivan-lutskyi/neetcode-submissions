class MinStack {
    stack = [];
    minValues = [];

    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        if (this.minValues.length > 0) {
            this.minValues.push(Math.min(val, this.minValues[this.minValues.length - 1]))
        } else {
            this.minValues.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minValues.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValues[this.minValues.length - 1];
    }
}
