class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()

        for(let i = 0; i < nums.length; i++) {
            const cur = nums[i]
            const newCount = (count.get(cur) || 0) + 1
            count.set(cur, newCount)
        }


        let freq = new Array(nums.length + 1).fill(null).map(() => [])
        count.forEach((value, key) => {
            freq[value].push(key)
        })

        console.log('freq', freq)

        let res = []
        for(let i = freq.length - 1; i > 0 && res.length < k; i--){
            for (const n of freq[i]) {
                res.push(n)
                if(k === res.length)
                    break
            }
        }
        return res
    }
}
