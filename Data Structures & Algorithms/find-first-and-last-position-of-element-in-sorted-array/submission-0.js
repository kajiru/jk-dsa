class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    bs (nums, target, leftBias) {
        let l = 0, r = nums.length - 1;
        let index = -1;
        while(l <= r){
            let m = Math.floor(((r - l) + r) / 2);
            if(nums[m] > target){
                r = m - 1;
            } else if(nums[m] < target){
                l = m + 1;
            }else {
                index = m;
                if(leftBias){ // look to the left if searching for first
                    r = m -1;
                }else {
                    l = m + 1;
                }
            }
        }
        return index;
    }

    searchRange(nums, target) {
        const firstOccurence = this.bs(nums, target, true)
        const lastOccurence = this.bs(nums, target, false)

        return [firstOccurence, lastOccurence];
    }
}
