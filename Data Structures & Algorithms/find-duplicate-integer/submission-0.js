class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0];
        let fast = nums[0];

        // do-while because we have to move a step before checking
        do{
            slow = nums[slow];
            fast = nums[nums[fast]]; // move 2 steps
        } while(fast !== slow);


        slow = nums[0];
        while(slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }
}
