class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const arr = Array(n).fill(null).map((_, i) => i+1);
        const res = [];

        const dfs = (i, subset) => {
            // base case: at the end of arr , add copy of subset to res & return
            if(subset.length === k) {
                res.push([...subset]);
                return;
            }
            if(i === n){
                return;
            }

            // explore with
            subset.push(arr[i]);
            dfs(i+1, subset);
            
            // explore without
            subset.pop();
            dfs(i+1, subset);

        }

        dfs(0, []);
        return res;
    }
}
