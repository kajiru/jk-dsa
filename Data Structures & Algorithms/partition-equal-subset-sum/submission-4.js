class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const cache = new Map();
        const dfs = (i, set1Sum, set2Sum) => {
            const key = `${i}-${set1Sum}-${set2Sum}`
            if(i === nums.length) return set1Sum === set2Sum;

            if(cache.has(key)) return cache.get(key);

            // Either include OR exclude nums[i]
            const ans = dfs(i+1, set1Sum + nums[i], set2Sum) || dfs(i+1, set1Sum, set2Sum + nums[i]);
            cache.set(key, ans);
            return ans;
        }
        return dfs(0, 0, 0)
    }
}
