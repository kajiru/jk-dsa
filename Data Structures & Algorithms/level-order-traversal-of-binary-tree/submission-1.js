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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];

        const res = []        
        const q = [];

        q.push([root, 0]);
        while(q.length) {
            const [next, level] = q.shift();
            if(!next) continue;
 
            if(res[level]) res[level].push(next.val);
            else res[level] = [next.val];

            q.push([next.left, level + 1])
            q.push([next.right, level + 1])
        }
        return res;
    }
}
