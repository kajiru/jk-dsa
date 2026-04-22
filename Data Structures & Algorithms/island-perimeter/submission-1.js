class Solution {
  islandPerimeter(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    // directions: down, right, up, left
    const dirs = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];

    // find start land cell
    let q = [];
    let visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    let started = false;

    for (let r = 0; r < ROWS && !started; r++) {
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c] === 1) {
          q.push([r, c]);
          visited[r][c] = true;
          started = true;
          break;
        }
      }
    }

    let perimeter = 0;

    while (q.length > 0) {
      const [r, c] = q.shift();

      // check all 4 neighbors
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;

        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) {
          // outside -> contributes 1
          perimeter += 1;
        } else if (grid[nr][nc] === 0) {
          // water -> contributes 1
          perimeter += 1;
        } else if (grid[nr][nc] === 1 && !visited[nr][nc]) {
          // land and not visited -> enqueue
          q.push([nr, nc]);
          visited[nr][nc] = true;
        }
      }
    }

    return perimeter;
  }
}