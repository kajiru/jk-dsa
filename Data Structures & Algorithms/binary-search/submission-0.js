class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const bSearch = (arr, t) => {
            let low = 0; 
            let high  = arr.length - 1;

            while( low <= high ){
                const mid = low + Math.floor((high - low)/2);

                if(arr[mid] === target){
                    return mid;
                }
                if(arr[mid] < target) {
                    low = mid + 1; 
                } else {
                    high = mid - 1;
                }
                
            }
            return -1;
        }

        return bSearch(nums, target);
    }

    
}
