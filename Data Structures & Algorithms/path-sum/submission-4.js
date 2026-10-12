/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        const search = (node, curSum) => {
            if (!node) {
                return false;
            }

            curSum += node.val;

            if (!node.left && !node.right) {
                return curSum === targetSum;
            }

            return (search(node.left, curSum) || search(node.right, curSum))
        }

        return search(root, 0);
    }
}
