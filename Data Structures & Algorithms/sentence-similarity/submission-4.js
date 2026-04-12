class Solution {
    /**
     * @param {string[]} sentence1
     * @param {string[]} sentence2
     * @param {string[][]} similarPairs
     * @return {boolean}
     */
    areSentencesSimilar(sentence1, sentence2, similarPairs) {
        if (sentence1.length !== sentence2.length) return false;
        const map = new Map();
        similarPairs.forEach(pair => {
            if(!map.has(pair[0])){
                map.set(pair[0], new Set())
            }
            map.get(pair[0]).add(pair[1]);

            if(!map.has(pair[1])){
                map.set(pair[1], new Set())
            }
            map.get(pair[1]).add(pair[0])
        })
        return sentence1.every((word, i) => {
            return word === sentence2[i] || (map.has(word) && map.get(word).has(sentence2[i]));
        })        
    }
}
