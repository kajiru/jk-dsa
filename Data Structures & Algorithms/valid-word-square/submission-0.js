class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        const cols = [];
        for(let i = 0; i < words.length; i++){
            for(let j = 0; j < words[0].length; j++){
                if(cols[j]){
                    cols[j].push(words[i][j])
                }else {
                    cols[j] = [words[i][j]];
                }
                
            }
        }
        return cols.every((col,i) => col.join("") === words[i])
    }
}
