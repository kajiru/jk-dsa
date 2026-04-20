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
        const _hasPathSum = (node, t) => {
            if (!node) return false;
            if(!node.left && !node.right) return t === node.val;
            
            return (
                _hasPathSum(node.left, t - node.val) ||
                _hasPathSum(node.right, t - node.val)
            );
        };

        return _hasPathSum(root, targetSum);
    }
}
