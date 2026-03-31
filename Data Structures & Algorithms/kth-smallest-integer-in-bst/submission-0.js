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
        const res = [];

        let count = 0;
        const inOrder = (node) => {
            if(!node || count === k) {
                return;
            }
            inOrder(node.left);
            res.push(node.val);
            count++;
            inOrder(node.right);
        }
        inOrder(root);
        console.log('r', res)
        return res[k - 1];
    }
}
