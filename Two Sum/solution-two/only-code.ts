function twoSum(nums: number[], target: number): number[] {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];
    if (m.has(n)) {
      return [m.get(n), i];
    } else {
      m.set(nums[i], i);
    }
  }
  return [];
}
