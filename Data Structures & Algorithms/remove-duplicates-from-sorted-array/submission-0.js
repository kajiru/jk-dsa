class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0; 
        let r = 1; 

        while (r < nums.length) {
            if (nums[l] !== nums[r]) {
                l++
                nums[l] = nums[r]
            }
            // if(nums[l] === nums[r]) {
            //     while(nums[l] === nums[r] && r < nums.length){
            //         r++
            //     }
            //     nums[l+1] = nums[r]
            //     l += 1
            // } else {
            //     l++
            //     nums[l] = nums[r]   
            // } 
            r++
            // l++;
        }
        return l + 1

    }
}
