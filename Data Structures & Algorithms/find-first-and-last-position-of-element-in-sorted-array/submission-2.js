class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    occurence_bs (nums, target, getFirst) {
        let l = 0, r = nums.length - 1
        let index = -1
        while(l <= r){
            let m = Math.floor(l + ((r - l) / 2))
            if(nums[m] > target){
                r = m - 1
            } else if(nums[m] < target){
                l = m + 1
            }else {
                index = m
                if(getFirst){ // look to the left if searching for first
                    r = m -1
                }else {
                    l = m + 1
                }
            }
        }
        return index
    }

    searchRange(nums, target) {
        const firstOccurence = this.occurence_bs(nums, target, true)
        const lastOccurence = this.occurence_bs(nums, target, false)
        return [firstOccurence, lastOccurence]
    }
}
