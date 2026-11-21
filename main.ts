// Make the AI judge feel brave — make-the-ai-judge-feel-brave-20261121-0302
// Writes one short relaxing text to /output/entry.txt (1-280 Unicode code
// points). Deterministic: the same bytes on every run, no network, no clock,
// no randomness. Never deletes or replaces the output directory: it only
// creates it if missing and writes the single file inside it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The wheel turns slow, and the clay wobbles before it finds its center \u2014 not " +
  "forced, just held. Your palms are wet, the room is quiet, and the shape rises " +
  "a little at a time. Nothing here is in a hurry. When the wheel stops, the bowl " +
  "is still there, holding.";

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280 || !/\S/.test(ENTRY)) {
  throw new Error(`entry must be 1-280 non-blank code points, got ${codePoints}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${outDir}/entry.txt (${codePoints} code points)`);
