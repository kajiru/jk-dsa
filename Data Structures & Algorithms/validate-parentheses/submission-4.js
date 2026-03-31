class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length === 1) return false;
        const open = new Set(['(', '{', '[']);
        
        const map = {
            "(": ")", 
            "[": "]",
            "{": "}"
        };

        const s_arr = s.split('');
        const stack = [];
        
        for(let i = 0; i < s_arr.length; i++){
            const v = s_arr[i];
            if(open.has(v)){
                stack.push(v);
            }else {
                const top = stack[stack.length - 1];
                if(!top) return false;
                if( map[top] === v ){
                    stack.pop();
                } else {
                    return false;
                }
                
            }
        };
        return stack.length === 0;
    }
}
