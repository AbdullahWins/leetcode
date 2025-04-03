# `twoSum` Function Explanation

## Purpose:
The `twoSum` function finds two indices in the array `nums` where the numbers at those indices add up to the given `target`.

## Function Signature:
```typescript
function twoSum(nums: number[], target: number): number[]
```

### Parameters:
- `nums`: An array of numbers.
- `target`: A number representing the desired sum.

### Return:
Returns an array containing the indices of the two numbers that add up to the `target`. If no such pair exists, it returns an empty array.

## Approach:
The function uses a **hash map** to track the indices of numbers as it iterates through the array. For each number `nums[i]`, it checks if the difference `target - nums[i]` has already been encountered (i.e., if it's in the map). If it has, the indices of the two numbers are returned. Otherwise, the current number and its index are added to the map.

This approach ensures the solution is efficient with a time complexity of O(n).

## Example:
```typescript
twoSum([2, 7, 11, 15], 9);  // Returns: [0, 1]
