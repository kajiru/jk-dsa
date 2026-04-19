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
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let closest = {value: -1, diff: Infinity}; // value, diff
        let curr = root;
        while(curr) {
            const currDiff = Math.abs(curr.val - target);
            if(currDiff < closest.diff){
                closest = {value: curr.val, diff: currDiff};
            }
            if(curr.val > target ){
                curr = curr.left;
            } else {
                curr = curr.right;
            }
            
        }
        return closest.value
    }
}
