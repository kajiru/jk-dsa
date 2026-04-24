class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const resArr = Array.from({length: numRows}, () => []);
        const memo = {};
        const dfs = (r, c) => {
            // if at first row or start/end of col
            if(r === 0 || c === 0 || r === c) return 1;
            const key = `${r}-${c}`;
            if(memo[key] !== undefined){
                return memo[key]
            }
            const res = dfs(r-1, c - 1) + dfs(r - 1, c);
            memo[key] = res;
            return res;
        }
        for(let r = 0; r < numRows; r++){
            for(let c = 0; c < r + 1; c++){
                resArr[r][c] = dfs(r, c);
            }
        }
        return resArr;
    }
}
