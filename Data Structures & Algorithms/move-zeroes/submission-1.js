class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0, r = 0;

        while(r < nums.length){
            if(nums[r] !== 0){
                nums[l] = nums[r]
                if(l !== r) nums[r] = 0
                l++
            }
            r++
        }
        return nums
    }
}
