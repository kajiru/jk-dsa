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

    height (root) {
        if(!root) return 0;
        const left = this.height(root.left);
        const right = this.height(root.right);
        if (left - right > 1 || right - left > 1) {
            this.isBalanced = false;
        }
        return 1 + Math.max(left, right);

    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        this.isBalanced = true;
        this.height(root);
        return this.isBalanced;
    }
}
