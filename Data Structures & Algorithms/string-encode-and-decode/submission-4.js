class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    
    encode(strs) {
        var del = '#';
        var res = '';
        for (var i = 0; i < strs.length; i++){
            var word = strs[i];
            res += `${word.length}${del}${word}`;
        }
        return res;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var res = [];
        var i = 0;

        while( i < str.length) {
            var j = i; 
            while(str[j] !== '#') {
                j++;
            }
            var curWordCount = Number(str.substring(i,j));
            var curWord = str.substring(j + 1, j + 1 + curWordCount); 
            res.push(curWord);
            i = j + curWordCount + 1; 
        }
        return res;
    }
}
