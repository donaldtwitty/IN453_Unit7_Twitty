// src/sorts/quicksort.js
// Quicksort (Lomuto partition) for comparison.
// Reference: https://en.wikipedia.org/wiki/Quicksort
export function quickSort(arr) {
  const a = arr.slice();
  quick(a, 0, a.length - 1);
  return a;
}

function quick(a, lo, hi) {
  if (lo >= hi) return;
  const p = partition(a, lo, hi);
  quick(a, lo, p - 1);
  quick(a, p + 1, hi);
}

function partition(a, lo, hi) {
  const pivot = a[hi];
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (a[j] <= pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }
  [a[i], a[hi]] = [a[hi], a[i]];
  return i;
}
