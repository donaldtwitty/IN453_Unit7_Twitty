// src/utils.js
// Random data generator with a simple seeded PRNG so runs are reproducible.
export function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export function generateArray(n, seed=12345) {
  const rand = mulberry32(seed);
  const arr = new Array(n);
  for (let i = 0; i < n; i++) arr[i] = Math.floor(rand() * 1_000_000);
  return arr;
}

export function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i-1] > arr[i]) return false;
  }
  return true;
}
