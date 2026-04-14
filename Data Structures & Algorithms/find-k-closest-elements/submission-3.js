class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {

        // O(nlogn)
        // arr.sort((a, b) => {
        //     const diff = Math.abs(a - x) - Math.abs(b - x);
        //     return diff === 0 ? a - b : diff;
        // });
        // const result = arr.slice(0, k);
        // return result.sort((a, b) => a - b);

        let l = 0, r = arr.length - 1
        while(r - l + 1 > k){
            const leftDiff = Math.abs(arr[l] - x), rightDiff =  Math.abs(arr[r] - x)
            if(leftDiff <= rightDiff){
                r--
            } else {
                l++
            }
        }

        return arr.slice(l, l + k)

        
    }
}
