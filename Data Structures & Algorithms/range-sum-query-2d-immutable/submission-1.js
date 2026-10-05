class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    mx = []
    constructor(matrix) {
        this.mx = matrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let res = 0;
        for (let col = col1; col <= col2; col++) {
            for (let row = row1; row <= row2; row++) {
                res += this.mx[row][col];
            }
        }
        return res;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
