class TrieNode {
  constructor() {
    this.children = new Map(); // char -> TrieNode
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const ch of word) {
      if (!node.children.has(ch)) {
        node.children.set(ch, new TrieNode());
      }
      node = node.children.get(ch);
    }

    node.isEnd = true;
  }

  search(word) {
    const node = this._traverse(word);
    return node !== null && node.isEnd;
  }

  startsWith(prefix) {
    return this._traverse(prefix) !== null;
  }

  _traverse(str) {
    let node = this.root;

    for (const ch of str) {
      if (!node.children.has(ch)) {
        return null;
      }
      node = node.children.get(ch);
    }

    return node;
  }
}


class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */
  longestCommonPrefix(strs) {
    const trie = new Trie()
    let shortest = Infinity;
    strs.forEach(str => {
      shortest = Math.min(shortest, str.length);
      trie.insert(str);
    })

    console.log(shortest)

    let cur = trie.root;
    let res = "";
    while (cur && cur.children.size === 1 && res.length < shortest) {
      const [ch, next] = cur.children.entries().next().value;
      res += ch;
      cur = next;
    }
    return res;
  }
}
