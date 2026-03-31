class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let nums1Index = m - 1; 
        let nums2Index = n - 1;
        let resIndex = m + n - 1;

        while(nums1Index  >= 0 && nums2Index >= 0){
            if(nums1[nums1Index] > nums2[nums2Index]){
                console.log('1, 2', nums1[nums1Index], nums2[nums2Index])
                nums1[resIndex] = nums1[nums1Index];
                nums1Index--;
            } else {
                nums1[resIndex] = nums2[nums2Index]
                nums2Index--;
            }
            resIndex--;
        }
        while(nums2Index >= 0){
            nums1[resIndex] = nums2[nums2Index]
            resIndex--;
            nums2Index--;
        }
    }
}
