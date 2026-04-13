/**
 * Run all seed scripts in order.
 * Run with:  node scripts/seed-all.mjs
 */

import { execSync } from "child_process";
import { resolve } from "path";

const scripts = [
  "seed-navbar.mjs",
  "seed-site-settings.mjs",
  "seed-about.mjs",
  "seed-awareness.mjs",
  "seed-support.mjs",
  "seed-our-impact.mjs",
  "seed-contact.mjs",
  "seed-bee-in-the-know.mjs",
  "seed-events.mjs",
  "seed-donations.mjs",
  "seed-partners.mjs",
];

const dir = resolve(process.cwd(), "scripts");

for (const script of scripts) {
  console.log(`\n${"─".repeat(50)}`);
  console.log(`Running ${script}…`);
  console.log("─".repeat(50));
  try {
    execSync(`node ${resolve(dir, script)}`, { stdio: "inherit" });
  } catch (err) {
    console.error(`\n✗ ${script} failed — aborting.`);
    process.exit(1);
  }
}

console.log(`\n${"═".repeat(50)}`);
console.log("All seeds complete!");
console.log("═".repeat(50));
