class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const cache = new Map();
        const dfs = (i, remaining) => {
            const key = `${i}-${remaining}`
            if(remaining < 0) return false;
            if(remaining === 0) return true;
            if(i >= nums.length) return false;
            if(cache.has(key)) return cache.get(key);

            // Either include OR exclude nums[i]
            const ans = dfs(i+1, remaining - nums[i]) || dfs(i+1, remaining);
            cache.set(key, ans);
            return ans;
        }
        const sum = nums.reduce((total, i) => total += i, 0);
        if(sum % 2 !== 0) return false;
        const target = sum / 2;
        return dfs(0, target);
    }
}
