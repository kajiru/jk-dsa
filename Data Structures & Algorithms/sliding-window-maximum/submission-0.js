class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        // we store [nums[i], i] order based on first item
        const heap = new MaxPriorityQueue((x) => x[0]);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            // increase the window
            heap.enqueue([nums[i], i]);

            // once window size is k, restore valid window
            if (i >= k - 1) {
                const removeIndex = i - k;
                while (heap.front()[1] <= removeIndex) {
                    heap.dequeue();
                }
                res.push(heap.front()[0]);
            }
            
        }
        return res;
    }
}
