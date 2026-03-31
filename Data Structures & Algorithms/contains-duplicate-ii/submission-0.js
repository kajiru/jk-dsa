class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let containsSet = new Set(); 
        let l = 0; 
        let r = 0;
        while( r < nums.length) {
            const cur = nums[r];
            if(r - l <= k) {
                if(containsSet.has(cur)){
                    return true;
                }
                containsSet.add(cur);
                r++
            } else {
                containsSet.delete(nums[l]);
                l++;
            }
        }
        return false;
    }
}
