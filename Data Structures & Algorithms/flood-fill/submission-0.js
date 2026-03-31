class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        if(!image || !image.length) return [];

        const visited = new Set();

        const ROWS = image.length;
        const COLS = image[0].length;

        const startingColor = image[sr][sc];

        const key = (r, c) => {
            return `${r}-${c}`;
        }

        const isValid = (nr, nc) => {
            if(Math.min(nr, nc) < 0) {
                return false;
            }
            if(nr >= ROWS || nc >= COLS) {
                return false;
            }
            if( visited.has(key(nr, nc))){
                return false;
            }
            if(image[nr][nc] !== startingColor ) {
                return false;
            } 
            return true;
        }

        const dfs = (r, c) => {
            image[r][c] = color;
            visited.add(key(r,c));

            // dfs on each neighbor
            const adj = [[1, 0], [0, 1], [-1, 0], [0, -1]];
            for(const nbr of adj){
                const nextR = r + nbr[0];
                const nextC = c + nbr[1];
                if(isValid(nextR, nextC)) {
                    dfs(nextR, nextC);
                }
            }
        }

        dfs(sr, sc);
        return image;
    }
}
