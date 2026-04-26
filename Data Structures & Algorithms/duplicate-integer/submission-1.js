class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = new Map();
        for(let num of nums){
            console.log({num})
            if(count.has(num)) return true;
            count.set(num, 1);
        }
        return false;
    }
}
