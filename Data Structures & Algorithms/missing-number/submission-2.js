class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        // [1,2,3] => [0, 1, 3] | [1, 2, 3] | [0,1,2]
        nums.sort();
        if(nums[0] !== 0) return 0;
        let missing = nums.length;
        for(let i = 1; i < nums.length; i++){
            if(nums[i] !== nums[i-1] + 1){
                missing = i;
            }
        }
        return missing;
    }
}
