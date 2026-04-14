class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {






        // let l = 0, r = k

        // const res = [] // [l, r] indexes
        // let maxLen = 0;

        // while(r < arr.length){
        //     if(r - l + 1 <= k) {
        //         r++
        //         continue;
        //     }
        //     const first = arr[l]
        //     const last = arr[r]
        //     if(Math.abs(x- last) > Math.abs(x - first)){
        //         l++
        //     }

        //     if (r - l + 1 > maxLen){
        //         maxLen = r - l + 1;
        //         res = [l, r];
        //     }
        //     // r++
        // }

        arr.sort((a, b) => {
            const diff = Math.abs(a - x) - Math.abs(b - x);
            return diff === 0 ? a - b : diff;
        });
        const result = arr.slice(0, k);
        return result.sort((a, b) => a - b);
        
    }
}
