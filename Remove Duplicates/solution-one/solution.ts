function removeDuplicates(nums: number[]): number {
  let m: number[] = [];
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (!m.includes(nums[j])) {
      m.push(nums[j]);
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
//
