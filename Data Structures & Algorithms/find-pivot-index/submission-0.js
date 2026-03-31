class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let leftSum = [] 
        // let rightSum = []
        let total = nums[0];


        leftSum[0] = 0
        for(let i = 1; i < nums.length; i++){
            leftSum[i] = leftSum[i-1] + nums[i-1]
            total += nums[i]
        }
              
        let res = -1;
        for(let i = 0; i < nums.length; i++){
            const rightSum = total - leftSum[i] - nums[i]
            if(rightSum === leftSum[i]){
                res = i;
                break
            }
        }
        return res
            
    }
}
