class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const s_arr = s.split('');
        const r_arr = t.split('');

        const s_map = new Map();
        const r_map = new Map();

        s_arr.forEach(s_i => {
            if(!s_map.has(s_i)){
                s_map.set(s_i, 1);
            } else {
                const old = s_map.get(s_i);
                s_map.set(s_i, old+1)
            }
        });            

        r_arr.forEach(r_i => {
            if(!r_map.has(r_i)){
                r_map.set(r_i, 1);
            } else {
                const old = r_map.get(r_i);
                r_map.set(r_i, old+1)
            }
        });            
        

        for (const [key, value] of s_map) {
            if(!r_map.has(key) || r_map.get(key) !== value) {
                console.log(r_map, s_map);
                return false;
            }
        }
        return true;


    }
}
