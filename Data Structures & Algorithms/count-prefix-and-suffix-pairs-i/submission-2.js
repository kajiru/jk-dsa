class TrieNode {
    constructor() {
        this.children = new Map(); // char -> TrieNode
        this.isEnd = false;
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        const n = word.length;
        for(let i =0; i < n; i++){
            const key = word[i] + word[n - 1 - i];
            if(!node.children.has(key)){
                node.children.set(key, new TrieNode());
            }
            node = node.children.get(key);
            node.count++;

        }

        node.isEnd = true;
    }

    count(str) {
        let node = this.root;
        const n = str.length;
        for (let i = 0; i < n; i++) {
            const key = str[i] + str[n - 1 - i];
            if(!node.children.has(key)) return 0;
            node = node.children.get(key);
        }
        return node.count;
    }
}

class Solution {
    trie(words) {
        let res = 0;

        let root = new Trie();

        for(let i = words.length - 1; i >= 0; i--){
            res += root.count(words[i]);
            root.insert(words[i])
        }
        return res;
    }
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        return this.trie(words);
    }
}
