# Unit 7 Assignment: Benchmarking (JavaScript)

This project benchmarks three internal sorting algorithms across **small**, **medium**, and **large** datasets:

- `Bubble` (baseline)
- `BubbleOptimized` (early-exit + last-swap boundary)
- `QuickSort` (Lomuto partition) — alternative algorithm

## How to run
1. Install Node 18+.
2. In a terminal:
   ```bash
   cd Unit7AssignmentTwitty
   npm run benchmark
   # or
   node benchmark.js
   ```
3. Results will be saved to `results/results.json` and `results/results.csv`.

## Data sets
We generate random integer arrays with a **seeded PRNG** for reproducibility. Sizes used by default:
- small: 10
- medium: 1,000
- large: 10,000

You can change sizes in `benchmark.js`.

## Notes
- Each sort function does **not** mutate the original array.
- After each run we check `isSorted(...)` to assert correctness.
- Algorithm references are included as comments at the top of each file.

## Source Control Screenshot
Commit this folder to your preferred Git host (GitHub, GitLab, etc.). Include a screenshot of the repo page (with commits visible) in the provided paper's **Screenshot** section.

