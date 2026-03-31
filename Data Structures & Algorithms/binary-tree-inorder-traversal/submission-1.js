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
    // Recursive 
    // inorderTraversal(root) {
    //     const res = [];

    //     const inOrder = (node) => {
    //         if(!node) return;
    //         inOrder(node.left);
    //         res.push(node.val);
    //         inOrder(node.right);
    //     }
    //     inOrder(root); 
    //     return res;
    // }

    // Iterative
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        const res = [];
        const stack = [];
        let cur = root;

        while(cur || stack.length > 0) {
            // go as far left as possible
            while(cur) {
                stack.push(cur);
                cur = cur.left;
            }
            // process cur node
            cur = stack.pop();
            res.push(cur.val);

            // move to right subtree
            cur = cur.right;
        }
        return res;
    }
}
