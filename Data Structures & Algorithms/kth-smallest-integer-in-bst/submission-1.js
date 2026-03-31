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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if(!root) return null;

        let count = 0;

        let resValue = root.val; 
        const inOrder = (node) => {
            if(!node || count === k) {
                return;
            }
            inOrder(node.left);
            count++;
            if(count === k){
                resValue = node.val;
            }
            inOrder(node.right);
        }
        inOrder(root);
        return resValue;
    }
}
