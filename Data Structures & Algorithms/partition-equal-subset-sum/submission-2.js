class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const key = (i, s1, s2) => `${i}-${s1}-${s2}`;
        const cache = new Map();

        const dfs = (i, ss1, ss2) => {
            const cacheKey = key(i, ss1, ss2);
            if(i === nums.length) return ss1 === ss2;           
            if(cache.has(cacheKey)) return cache.get(cacheKey);
        
            const ans = dfs(i+1, ss1 + nums[i], ss2) || dfs(i+1, ss1, ss2 + nums[i]);
            cache.set(cacheKey, ans);
            return ans;
        }

        

        return dfs(0, 0, 0)


    }
}
