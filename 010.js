var findMedianSortedArrays = function (nums1, nums2) {
    let arr = nums1.map(e => e)
    nums2.map(e => arr.push(e))
    arr.sort((a, b) => a - b)
    let length = arr.length
    let i = Math.floor(length / 2)
    return length % 2 ? arr[i] : (arr[i] + arr[i - 1]) / 2
};



nums1 = [3], nums2 = [-2, -1]
console.log(findMedianSortedArrays(nums1, nums2));