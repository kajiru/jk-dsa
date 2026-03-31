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
    postorderTraversal(root) {
        const res = []; 
        const stack = [];

        let cur = root;

        while(cur || stack.length > 0){
            while(cur){
                //process
                res.push(cur.val);
                stack.push(cur);
                
                // go right
                cur = cur.right;
            }
            cur = stack.pop();
            cur = cur.left;
        }
        return res.reverse();
    }
}
