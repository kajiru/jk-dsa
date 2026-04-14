class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        const count = new Map()
        nums.forEach(num => {
            count.set(num, (count.get(num) || 0) + 1)
        })
        let largest = -1;

        for (let [num, frq] of count.entries()) {
            if (frq === 1) largest = Math.max(largest, num)
        }
        return largest;

    }
}
