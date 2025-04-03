# Two Sum Function

This function finds two numbers in an array whose sum equals a given target. It returns the indices of these two numbers.

### Function Signature

```typescript
function twoSum(nums: number[], target: number): number[];
```

### Parameters:
- `nums` (number[]): An array of numbers.
- `target` (number): The target sum.

### Return:
- An array with the indices of the two numbers that add up to the target. If no pair is found, it returns an empty array.

### Example:

```typescript
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
// Output: [0, 1]
