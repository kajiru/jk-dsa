class NumArray {
    /**
     * @param {number[]} nums
     */
    prefixSum = [];
    constructor(nums) {
        this.prefixSum.push(nums[0])
        for(let i = 1; i < nums.length; i++) {
            this.prefixSum[i] = nums[i] + this.prefixSum[i-1]
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left > 0)
            return this.prefixSum[right] - this.prefixSum[left-1];
        return this.prefixSum[right]
    }
}
