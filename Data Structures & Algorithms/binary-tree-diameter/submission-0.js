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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0;
        function height(root) {
            if(!root) return 0;
        
            const left = height(root.left);
            const right = height(root.right);
            max = Math.max(max, left + right);

            return 1 + Math.max(left, right);
            
        }
        height(root);
        return max;
    }
}
