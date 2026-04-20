class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {number} multiplier
     * @return {number[]}
     */
    getFinalState(nums, k, multiplier) {
        // const minHeap = new MinPriorityQueue(x => x.priority);
        const minHeap = new PriorityQueue((a, b) => {
            if(a.priority !== b.priority) return a.priority - b.priority;
            return a.val - b.val;
        })
        nums.forEach((num, i) => minHeap.enqueue({val: i, priority: num}))

        while(k > 0){
            const {val, priority} = minHeap.front();
            nums = nums.map((num,i) => {
                if(i !== val)return num;
                else return priority * multiplier
            });
            minHeap.dequeue()
            minHeap.enqueue({val, priority: priority * multiplier})
            k--;
        }
        return nums
    }
}
