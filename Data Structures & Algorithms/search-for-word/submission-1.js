class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const visited = new Set();

        const ROWS = board.length;
        const COLS = board[0].length;

        const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];

        const dfs = (r, c, index) => {
            const key = `${r}-${c}`;
            if(r < 0 || c < 0 || r === ROWS || c === COLS) return false;
            if(visited.has(key)) return false;
             if(word[index] !== board[r][c]) return false;

            // base case
            if(index === word.length - 1) return true;

            visited.add(`${r}-${c}`);
            for(const [row, col] of dirs) {
                if(dfs(r+row, c+col ,index+1)) return true;
            }
            visited.delete(key);
            return false;
        }

        for(let r = 0; r < ROWS; r++){
            for(let c =0; c < COLS; c++ ){
                if(dfs(r, c, 0)) return true;
            }
        }

        return false;
    }
}
