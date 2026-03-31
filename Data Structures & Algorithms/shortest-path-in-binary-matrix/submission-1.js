class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const n = grid.length;
        if(grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;

        // queue holds, [r, c, distance]
        const queue = [[0,0, 1]];

        const key = (r, c) => `${r}-${c}`;

        const visited = new Set();
        visited.add(key(0,0));

        const [ROWS, COLS] = [grid.length, grid[0].length];

        const dirs = [
            [1, 0], [0, 1], [-1, 0], [0, -1], 
            [1, -1], [1, 1], [-1, 1], [-1, -1]
            ];

        const isValid = ([nr, nc]) => {
            if(nr < 0 || nc < 0) return false;
            if(nr >= ROWS || nc >= COLS) return false;
            if(visited.has(key(nr, nc))) return false;
            if(grid[nr][nc] === 1) return false;
            return true;
        }
        let head = 0;
        while(head < queue.length) {
            // pop from queue
            const [qr, qc, dist]= queue[head++];
            
            // if at end, return distance so far
            if(qr === ROWS -1 && qc === COLS-1){
                return dist;
            }

            // enqueue neighbors
            for(const [nr, nc] of dirs) {
                const next = [qr+nr, qc+nc];
                if(isValid(next)) {
                    queue.push([...next, dist+1]);
                    visited.add(key(qr, qc)); 
                }
            }
        }
        return -1;

    }
}
