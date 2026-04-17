class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        const count = new Map();
        nums.forEach((num) => {
            count.set(num, (count.get(num) | 0) + 1);
        });
        nums.sort((a, b) => {
            const countA = count.get(a);
            const countB = count.get(b);
            return countA === countB ?  b - a : countA - countB
        });
        return nums;
    }
}
