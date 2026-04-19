class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    twoSumLessThanK(nums, k) {
        // because nums.length <= 100. Brute force ok
        let maxSum = -1;
        for(let i = 0; i < nums.length; i++){
            for(let j = 0; j < nums.length; j++){
                if(i === j)continue;
                const sum = nums[i] + nums[j];
                if(sum < k) maxSum = Math.max(maxSum, sum)
            }
        }
        return maxSum;
    }
}
