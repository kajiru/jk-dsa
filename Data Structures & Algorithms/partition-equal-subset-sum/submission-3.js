class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const cache = new Map();
        const dfs = (i, ss1, ss2) => {
            const key = `${i}-${ss1}-${ss2}`
            if(i === nums.length) return ss1 === ss2;           
            if(cache.has(key)) return cache.get(key);
        
            const ans = dfs(i+1, ss1 + nums[i], ss2) || dfs(i+1, ss1, ss2 + nums[i]);
            cache.set(key, ans);
            return ans;
        }
        return dfs(0, 0, 0)
    }
}
