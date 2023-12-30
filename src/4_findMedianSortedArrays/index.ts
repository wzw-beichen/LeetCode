function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len = nums1.length + nums2.length;
  const mid = Math.floor(len / 2);
  let res: number[] = [];
  let i = 0,
    j = 0;

  while (res.length <= mid) {
    // undefined < number ---> false
    if (j === nums2.length || nums1[i] < nums2[j]) {
      res.push(nums1[i]);
      i++;
    } else {
      res.push(nums2[j]);
      j++;
    }
  }
  // 3 ---> 1
  // 4 ---> 0
  if (len % 2) {
    return res[res.length - 1];
  }
  return (res[res.length - 2] + res[res.length - 1]) / 2;
}
