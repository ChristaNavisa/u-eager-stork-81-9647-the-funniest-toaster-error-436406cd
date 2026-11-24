import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "ERROR 12: Bagel stuck again. I am not a bagel machine. I never was.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
