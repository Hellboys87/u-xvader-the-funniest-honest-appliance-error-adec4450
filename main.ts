// The Funniest Honest Appliance Error — one brutally honest line.
// A washing machine drops the cryptic "UE" code and confesses the
// real fault: the load was never balanced, and it was never its idea.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "UNBALANCED LOAD: It's not me, it's you — 14 towels on one side, one sock on the other. I will not spin and waddle across the floor again.";

if (line.length === 0) {
  throw new Error("entry line must not be empty");
}
if (line.length > MAX_CHARS) {
  throw new Error(`entry line is ${line.length} characters, over the ${MAX_CHARS} limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

console.log(`wrote entry.txt (${line.length} characters)`);
