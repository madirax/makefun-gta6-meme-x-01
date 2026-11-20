// Entry program for the make.fun GTA 6 meme bounty.
//
// The real entry is a public post on X: one original meme picture
// plus its caption. This repository hands the house that post's
// address, and the program's whole job is to carry POST.json from
// the repository root into the output folder, byte for byte, where
// the gate reads it. Nothing else is needed: no network, no clock,
// no dependencies beyond Node's standard library.
//
// Local run, standing in for the grader's /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const from = join(botDir, "POST.json");
const to = join(outputDir, "POST.json");
try {
  copyFileSync(from, to);
} catch (problem) {
  console.error(`could not copy ${from}: ${(problem as Error).message}`);
  process.exit(1);
}
