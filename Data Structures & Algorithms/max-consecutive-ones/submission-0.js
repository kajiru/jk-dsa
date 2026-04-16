class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let curSum = 0;
        let maxOnes = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                curSum++
                maxOnes = Math.max(maxOnes, curSum)
            }else {
                curSum = 0
            }
        }
        return maxOnes
    }
}
