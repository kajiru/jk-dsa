class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Map();

        const getKey = (i1, i2) => `${i1}-${i2}`;

        const dfs = (i1, i2) => {
            const key = getKey(i1, i2);
            if(i1 === text1.length || i2 === text2.length) return 0;

            if(memo.has(key)) return memo.get(key)

            if(text1[i1] === text2[i2]){
                const ans = 1 + dfs(i1+ 1, i2+1);
                memo.set(key, ans);
                return ans;
            }

            const ans = Math.max(dfs(i1 + 1, i2), dfs(i1, i2+1))
            memo.set(key, ans);
            return ans;
        }

        return dfs(0, 0);
    }
}
