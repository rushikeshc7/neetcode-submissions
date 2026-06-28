class TrieNode {
    constructor() {
        this.children = {};
        this.wordIndex = -1;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode();

        for (let i = 0; i < words.length; i++) {
            let node = root;

            for (let ch of words[i]) {
                if (!node.children[ch]) {
                    node.children[ch] = new TrieNode();
                }
                node = node.children[ch];
            }
            node.wordIndex = i
        }

        const rows = board.length;
        const cols = board[0].length;
        const result = [];

        function dfs(r, c, node) {
            if(
                r < 0 ||
                c < 0 ||
                r >= rows ||
                c >= cols 
            ) return;

            const ch = board[r][c];
            
            if(ch === '#' || !node.children[ch]) {
                return;
            }

            node = node.children[ch]

            if(node.wordIndex !== -1) {
                result.push(words[node.wordIndex]);
                node.wordIndex = -1 // Avoid duplicates
            }

            board[r][c] = '#';

            dfs(r + 1, c, node);
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            board[r][c] = ch;
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                dfs(r, c, root);
            }
        }

        return result;
    }
}
