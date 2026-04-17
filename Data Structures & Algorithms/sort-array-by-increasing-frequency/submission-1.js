class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        const count = new Map()
        nums.forEach(num => {
            count.set(num, (count.get(num) | 0) + 1) 
        })

        nums.sort((a, b) => {
            if(count.get(a) === count.get(b)){
                return b - a
            }
            return count.get(a) - count.get(b)
        })

        // console.log(count);

        return nums;


    }
}
