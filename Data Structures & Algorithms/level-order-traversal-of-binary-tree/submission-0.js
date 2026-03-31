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
        const res = [];
        if(!root) return res;

        const queue  = [[root, 0]];

        while(queue.length > 0){
            const [cur, level] = queue.shift();
            if(res[level]) res[level].push(cur.val);
            else res[level] = [cur.val];
            
            if(cur.left) queue.push([cur.left, level+1]);
            if(cur.right) queue.push([cur.right, level+1]);
            
        }
        return res;

    }
}
