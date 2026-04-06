class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while (l <= r) {
            let m = Math.floor((l+r) / 2);

            if(nums[m] === target) return m;

            // identify sorted & not sorted portion
            if (nums[l] <= nums[m]) { // left  is sorted
                // check if target falls on this side?
                if (nums[l] <= target && nums[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else { // right (m  --> r) is sorted
                if (nums[m] < target && nums[r] >= target) {
                    l = m + 1
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;


    }
}
