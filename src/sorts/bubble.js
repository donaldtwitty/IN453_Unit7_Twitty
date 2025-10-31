// src/sorts/bubble.js
// Baseline Bubble Sort (credits: common CS curriculum; algorithm description at Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort)
export function bubbleSort(arr) {
  const a = arr.slice(); // do not mutate original
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j+1]) {
        const tmp = a[j];
        a[j] = a[j+1];
        a[j+1] = tmp;
      }
    }
  }
  return a;
}
