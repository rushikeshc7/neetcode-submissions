class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        let maxArea = 0;

        function dfs(r, c) {
            if (
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols
            ) return 0;

            if (grid[r][c] === 0) return 0;

            grid[r][c] = 0;

            return (
                1 +
                dfs(r + 1, c) +
                dfs(r - 1, c) +
                dfs(r, c + 1) +
                dfs(r, c - 1)
            )
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    const area = dfs(r, c);
                    maxArea = Math.max(area, maxArea);
                }
            }
        }

        return maxArea;
    }
}
