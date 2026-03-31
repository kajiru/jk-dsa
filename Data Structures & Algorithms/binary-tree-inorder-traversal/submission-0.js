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
     * @return {number[]}
     */
    inorderTraversal(root) {
        const res = [];

        const inOrder = (node) => {
            if(!node) return;
            inOrder(node.left);
            res.push(node.val);
            inOrder(node.right);
        }
        inOrder(root); 
        return res;
    }
}
