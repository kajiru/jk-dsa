class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if(!nums || nums.length === 0) return [];

        const res = [];

        // const key = (arr) => arr.join("-");

        const dfs = (i, path) => {
            // base case
            if(i === nums.length) {
                res.push([...path]);
                return;
            }
            
            // include i
            path.push(nums[i])
            dfs(i+1, path)

            // exclude i
            path.pop()
            dfs(i+1, path) 
        }

        dfs(0, []);
        return res;
    }
}
