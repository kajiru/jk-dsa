class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // let targetRow = 0; 

        let lRow = 0; 
        let rRow = matrix.length - 1;

        // identify the row
        while(lRow <= rRow) {
            const midRow = Math.floor((lRow + rRow ) / 2);
            if(matrix[midRow][0] === target) return true;
            if(matrix[midRow][0] > target) rRow = midRow - 1; 
            else lRow = midRow + 1;
        }

        if(rRow < 0) return false;
        const targetRow = rRow;

        const targetArr = matrix[targetRow];

        if (target < targetArr[0] || target > targetArr[targetArr.length - 1]) {
            return false;
        }

        // bst within row
        let l = 0; 
        let r = targetArr.length - 1; 
        while(l <= r) {
            const mid = Math.floor((l + r) / 2);
            if(targetArr[mid] === target){
                return true;
            }
            if(targetArr[mid] > target) {
                r = mid - 1; 
            }else {
                l = mid + 1;
            }
        }
        return false;
    }
}
