class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0, j = nums.length -1

        let cur = 0
        while(cur <= j){ 
            if(nums[cur] === 1){
                cur++
            }else if(nums[cur] === 0){
                [nums[i], nums[cur]] = [nums[cur], nums[i]]
                i++
                cur++
            } else { // (nums[cur] === 2)
                [nums[j], nums[cur]] = [nums[cur], nums[j]]
                j--
                // DON'T increment cur
            }
        }
    }
}
