/**
 * Master seed script — runs every individual seed in dependency order.
 *
 * Usage:  node scripts/seed-all.mjs
 *
 * Requires SANITY_API_WRITE_TOKEN in .env.local (Editor role).
 * Individual seeds can also be run in isolation:
 *   node scripts/seed-site-settings.mjs
 *   node scripts/seed-landing.mjs
 *   node scripts/seed-about-us.mjs
 *   node scripts/seed-partners.mjs
 *   node scripts/seed-support.mjs
 *   node scripts/seed-contact.mjs
 *   node scripts/seed-awareness.mjs
 *   node scripts/seed-donations.mjs
 *   node scripts/seed-events.mjs
 *   node scripts/seed-bee-in-the-know.mjs
 */

import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const seeds = [
  "seed-site-settings.mjs",
  "seed-landing.mjs",
  "seed-about-us.mjs",
  "seed-partners.mjs",
  "seed-support.mjs",
  "seed-contact.mjs",
  "seed-awareness.mjs",
  "seed-donations.mjs",
  "seed-events.mjs",
  "seed-bee-in-the-know.mjs",
];

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  The Hive — Full CMS seed");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

for (const seed of seeds) {
  const scriptPath = resolve(__dirname, seed);
  console.log(`\n▶ Running ${seed}…`);
  try {
    execSync(`node "${scriptPath}"`, { stdio: "inherit" });
    console.log(`✓ ${seed} complete`);
  } catch (err) {
    console.error(`✗ ${seed} failed — aborting.\n`);
    process.exit(1);
  }
}

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("  All seeds complete!");
console.log("  Visit http://localhost:3000 to see the site.");
console.log("  Visit http://localhost:3333 to edit content in Sanity Studio.");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
