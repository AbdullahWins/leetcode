# Palindrome Number – Interview-Ready Explanation

## Problem

Determine whether an integer `x` is a palindrome.  
A palindrome reads the same forwards and backwards.  
Negative numbers are **never palindromes** because of the minus sign.

---

## Solution

```javascript
function isPalindrome(x) {
    // Convert the number to a string
    const string = x.toString();

    // Initialize a reversed string
    let reversed = "";

    // Reverse the string using a for loop
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }

    // Compare original string and reversed string
    return string === reversed;
}
```

---

## Step-by-Step Technical Breakdown

### 1️⃣ Number → String Conversion

```javascript
const string = x.toString();
```

- Numbers do **not have indexed access** like arrays or strings.
- Converting to a string allows us to iterate over each digit.
- Example:
  - `121` → `"121"`

**Note:** This conversion has **O(n)** time and space complexity, where `n` is the number of digits.

---

### 2️⃣ Reverse String Construction

```javascript
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}
```

- Start from the **last character** (`string.length - 1`) and move backwards.
- Append each character to `reversed`.
- At the end, `reversed` contains the original number in reverse order.

**Example:** `"121"`  

| i | string[i] | reversed |
|---|------------|----------|
| 2 | "1"        | "1"      |
| 1 | "2"        | "12"     |
| 0 | "1"        | "121"    |

---

### 3️⃣ Compare Original and Reversed

```javascript
return string === reversed;
```

- If both strings are **equal**, the number is a palindrome.
- Otherwise, it is **not** a palindrome.

---

## Edge Cases & Considerations

1. **Negative Numbers** → Always false  
   - `-121` → `"121-"` after reversing → not equal.
2. **Single-Digit Numbers** → Always true  
   - `7` → `"7"` → palindrome.
3. **Trailing Zeros** → Not palindromes unless the number is 0  
   - `10` → `"01"` → false.
4. **Large Numbers** → Works because string conversion handles up to JS `Number.MAX_SAFE_INTEGER`.

---

## Time & Space Complexity

| Complexity Type | Analysis |
|-----------------|---------|
| **Time**        | O(n) – Iterate through all digits once |
| **Space**       | O(n) – Store reversed string |

---

## Optimized Alternative (Two-Pointer, No Extra String)

For interviews, mention **space optimization**:

```javascript
function isPalindrome(x) {
    if (x < 0) return false; // negative numbers are never palindromes

    const str = x.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}
```

- **Time:** O(n)  
- **Space:** O(1) extra  
- Avoids creating a reversed string

---

## Summary (Interview Talking Points)

1. Negative numbers → always false  
2. Convert number → string for easy indexing  
3. Reverse string with loop or two-pointers  
4. Compare → return result  
5. Mention time/space complexity  
6. Optional: Optimize to O(1) extra space  
