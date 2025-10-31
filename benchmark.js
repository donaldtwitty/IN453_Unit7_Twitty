// benchmark.js
// Node benchmark for Bubble vs Optimized Bubble vs Quicksort
// Uses process.hrtime.bigint() for high-resolution timing.
// Data sizes: small (10), medium (1_000), large (10_000). Adjust as needed.
import {generateArray, isSorted} from "./src/utils.js";
import {bubbleSort} from "./src/sorts/bubble.js";
import {bubbleSortOptimized} from "./src/sorts/bubble_optimized.js";
import {quickSort} from "./src/sorts/quicksort.js";
import fs from "fs";

const sizes = [10, 1000, 10000];
const algorithms = [
    {name: "Bubble", fn: bubbleSort},
    {name: "BubbleOptimized", fn: bubbleSortOptimized},
    {name: "QuickSort", fn: quickSort},
];

const seedBase = 424242;
const results = [];
for (const n of sizes) {
    const arr = generateArray(n, seedBase + n);
    for (const {name, fn} of algorithms) {
        const start = process.hrtime.bigint();
        const out = fn(arr);
        const end = process.hrtime.bigint();
        const elapsedMs = Number(end - start) / 1e6;
        if (!isSorted(out)) {
            throw new Error(`${name} failed to sort for n=${n}`);
        }
        results.push({size: n, algorithm: name, ms: +elapsedMs.toFixed(3)});
        console.log(`${name} n=${n} -> ${elapsedMs.toFixed(3)} ms`);
    }
}

// Write results
if (!fs.existsSync("results")) fs.mkdirSync("results");
fs.writeFileSync("results/results.json", JSON.stringify(results, null, 2));
const header = "size,algorithm,ms\n" + results.map(r => `${r.size},${r.algorithm},${r.ms}`).join("\n");
fs.writeFileSync("results/results.csv", header);
console.log("\nResults written to results/results.json and results/results.csv");
