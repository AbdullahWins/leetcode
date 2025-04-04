function removeDuplicates(nums: number[]): number {
  let m = new Map<number, number>();
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (!m.has(nums[j])) {
      m.set(nums[j], j);
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
