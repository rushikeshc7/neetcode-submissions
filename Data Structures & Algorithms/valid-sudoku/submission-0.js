class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set();

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const value = board[row][col]
                if (value === '.') continue;

                const rowKey = `row-${row}-${value}`
                const colKey = `col-${col}-${value}`

                const boxRow = Math.floor(row / 3);
                const boxCol = Math.floor(col / 3);

                const boxKey = `box-${boxRow}-${boxCol}-${value}`;
                if (seen.has(rowKey) ||
                    seen.has(colKey) ||
                    seen.has(boxKey)
                ) return false

                seen.add(rowKey);
                seen.add(colKey);
                seen.add(boxKey);
            }
        }
        return true
    }
}
