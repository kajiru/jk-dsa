class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Infinity; 
        let l = 0; 
        let r = 0; // Math.min(1, nums.length);

        let curSum = 0;
        while(r < nums.length) {
            curSum += nums[r];
            // console.log('curSum', curSum)
            if(curSum >= target) {
                minLength = Math.min(r - l + 1, minLength);
                while (curSum >= target) {
                    minLength = Math.min(r - l + 1, minLength) // mchawi
                    curSum -= nums[l]
                    l++
                }
            }
            r++  
        }
        return minLength === Infinity? 0 : minLength
    }
}
