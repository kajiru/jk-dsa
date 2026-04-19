class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const set1 = new Set(nums1);
        const set2 = new Set(nums2);
        return  [...set1.intersection(set2)];
    }
}
