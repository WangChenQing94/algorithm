/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  /**
   * 方法一：（归并排序）
   * 1.合并成一个数组
   * 3.找出中位数
   */
  var length =  nums1.length + nums2.length;
  var result = [];
  for (var index = 0, i = 0, j = 0; index < length; index++) {
    if (i >= nums1.length) {
      result[index] = nums2[j++];
    } else if (j >= nums2.length) {
      result[index] = nums1[i++];
    } else if (nums1[i] > nums2[j]) {
      result[index] = nums2[j++];
    } else {
      result[index] = nums1[i++];
    }
  }
  if (length % 2 === 0) {
    return (result[parseInt(length / 2)] + result[parseInt(length / 2) - 1]) / 2;
  } else {
    return result[parseInt(length / 2)];
  }
};

var result = findMedianSortedArrays([1, 5], [-3, -4]);
console.log(result);