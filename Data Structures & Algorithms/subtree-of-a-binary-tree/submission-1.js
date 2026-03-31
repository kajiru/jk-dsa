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

    // not needed
    hasNoChildren(t) {
        return !t.left && !t.right; 
    }

    isSimilar(t1, t2) {
        if(!t1 && !t2) return true;

        if(!t1 || !t2) return false;

        if(t1.val !== t2.val) return false;

        return isSimilar(t1.left, t2.left) 
         && isSimilar(t1.right, t2.right);
    }
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSimilar(t1, t2) {
            if(!t1 && !t2) return true;

            if(!t1 || !t2) return false;

            if(t1.val !== t2.val) return false;

            return isSimilar(t1.left, t2.left) 
            && isSimilar(t1.right, t2.right);
        }
        let cur = root;
        let foundLeft = false;
        while(cur && !foundLeft) {
            let sim = isSimilar(cur, subRoot);
            if (sim) {
                foundLeft = true;
            } else {
                cur = cur.left;
            }
        }
        if(foundLeft) return true;
        let foundRight = false;
        cur = root;
        while(cur && !foundRight) {
            if (isSimilar(cur, subRoot)) {
                foundRight = true;
            } else {
                cur = cur.right;
            }
        }
        return foundRight;
    }
}
