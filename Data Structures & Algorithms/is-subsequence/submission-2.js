class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        const dfs = (i, j) => {
            if(i === s.length) return true;
            if(j === t.length) return false;
            if(s[i] === t[j]){
                return dfs(i + 1, j+1);
            } else {
                return dfs(i, j + 1);
            } 
        }

        return dfs(0, 0);
    }
}
