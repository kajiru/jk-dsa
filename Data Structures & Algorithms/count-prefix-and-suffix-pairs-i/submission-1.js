class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */
    countPrefixSuffixPairs(words) {
        let count = 0;

        const isPrefixSuffix = (w1, w2) => {
            if(w1.length > w2.length) return false;
            const isPrefix = w2.startsWith(w1);
            
            const isSuffix = w2.endsWith(w1);

            console.log(w1, w2, 'isPre, isSuf', isPrefix, isSuffix)
            return isPrefix && isSuffix;

        }
        for(let i = 0; i < words.length; i++){
            for(let j = 0; j < words.length; j++){
                if(i >= j) continue;
                if(isPrefixSuffix(words[i], words[j]))count++; 
            }
        }
        return count;
    }
}
