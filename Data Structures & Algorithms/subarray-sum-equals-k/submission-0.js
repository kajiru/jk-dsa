class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefix = [];
        prefix[0] = 0;
        for (let i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        const countMap = new Map();
        let total = 0;
        let r = 0;
        while (r < prefix.length) {
            const rSum = prefix[r]
             // because when prefix[r] - prefix[l-1] = k
             // prefix[l-1] = prefix[r] - k
            const rSumCompliment = rSum - k

            if (countMap.has(rSumCompliment)) {
                total += countMap.get(rSumCompliment)
            }

            countMap.set(rSum, (countMap.get(rSum) || 0) + 1);
            r++;
        }

        return total;
    }
}
