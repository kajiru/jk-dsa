class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a,b) => a - b);

        const res = [];

        for (let i = 0; i < sorted.length - 2; i++){
            // skip i duplicates 
            if(i > 0 && sorted[i] === sorted[i - 1]) continue;
            
            // skip since we can't find valid sum given sorted array
            if(sorted[i] > 0) break;

            let left = i + 1;
            let right = sorted.length - 1;

            while(left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];
                if(sum === 0) {
                    res.push([sorted[i], sorted[left], sorted[right]]);
                    // slide both left & right 
                    left++;
                    right--;
                    // skip duplicates on either side
                    while(left < right && sorted[left] === sorted[left - 1])left++;
                    while(left < right && sorted[right] === sorted[right +1])right--;
                } else if(sum < 0) {
                    left++
                } else {
                    right--;
                }
            }
        }
        return res;
    }
}
