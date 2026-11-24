import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "If your smoke alarm won't stop beeping, take the battery out — the noise is more dangerous than any fire.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
