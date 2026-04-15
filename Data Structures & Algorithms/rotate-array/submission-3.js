class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const _rotate = (arr, l, r) => {
            while (l < r) {
                const t = arr[r]
                arr[r] = arr[l]
                arr[l] = t
                r--
                l++
            }
        }

        const index = k % nums.length

        _rotate(nums, 0, nums.length - 1)
        _rotate(nums, 0, index - 1)
        _rotate(nums, index, nums.length - 1)

        return nums
    }
}
