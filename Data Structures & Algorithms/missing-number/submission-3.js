class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {

        // XOR => true if bits are different (diff detector)
        // 0 ^ 1 = 1
        // 1 ^ 1 = 0
        // 0 ^ 0 = 0
        // 1 ^ 0 = 1
        let xor = 0;
        for(let i = 0; i <= nums.length; i++){
            xor ^= i;
        }
        for(let i = 0; i < nums.length; i++){
            xor ^= nums[i];
        }

        return xor;
     }
}
