/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        const res = [];
        const _postOrder = (node) => {
            if(!node) return;
            for(let child of node.children){
                _postOrder(child)
            }
            res.push(node.val);
        }
        _postOrder(root);
        return res;
    }
}
