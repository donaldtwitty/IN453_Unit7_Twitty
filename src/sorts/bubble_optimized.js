// src/sorts/bubble_optimized.js
// Optimized Bubble Sort:
// 1) Early exit if no swaps in a pass.
// 2) Track the last swapped index to shrink the inner loop range ("cocktail" style boundary optimization).
// References: https://en.wikipedia.org/wiki/Bubble_sort#Optimizing_bubble_sort
export function bubbleSortOptimized(arr) {
  const a = arr.slice();
  let n = a.length;
  while (n > 1) {
    let newN = 0;
    for (let i = 1; i < n; i++) {
      if (a[i-1] > a[i]) {
        const t = a[i-1];
        a[i-1] = a[i];
        a[i] = t;
        newN = i; // last swap position
      }
    }
    if (newN === 0) break; // already sorted
    n = newN + 1;
  }
  return a;
}
