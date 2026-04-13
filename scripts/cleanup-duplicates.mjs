/**
 * Remove duplicate / legacy documents left over from earlier seed scripts.
 * Safe to run multiple times – uses Sanity's delete API which is a no-op for
 * IDs that no longer exist.
 *
 * Run with:  node scripts/cleanup-duplicates.mjs
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const token =
  process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

if (!token) {
  console.error("\nNo token found. Add SANITY_API_WRITE_TOKEN to .env.local\n");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-03-30",
  token,
  useCdn: false,
});

async function deleteIds(label, ids) {
  if (ids.length === 0) {
    console.log(`  ${label}: nothing to delete`);
    return;
  }
  // Sanity transactions are limited to 100 mutations; batch them
  const BATCH = 50;
  for (let i = 0; i < ids.length; i += BATCH) {
    const chunk = ids.slice(i, i + BATCH);
    const tx = client.transaction();
    for (const id of chunk) tx.delete(id);
    await tx.commit({ visibility: "async" });
  }
  console.log(`  ✓ Deleted ${ids.length} ${label}`);
}

async function cleanup() {
  console.log("\nQuerying for duplicate documents…\n");

  // ── 1. Legacy pages ──────────────────────────────────────────────────────────
  // Old invest-in-the-hive page (UUID id) and old page-donations (slug "donations")
  // Both are superseded by page-invest-in-the-hive (slug "invest-in-the-hive").
  const legacyPageIds = [
    "acf1f549-21ac-416c-9b23-3a9fc22bbf01",
    "page-donations",
  ];
  await deleteIds("legacy pages", legacyPageIds);

  // ── 2. Old team-member-* documents ───────────────────────────────────────────
  // These duplicate the newer team-* and board-* documents created by seed-about.mjs.
  const oldTeamMembers = await client.fetch(
    `*[_type == "teamMember" && _id match "team-member-*"]._id`
  );
  await deleteIds("old team-member-* docs", oldTeamMembers);

  // ── 3. Partner logos with UUID ids ───────────────────────────────────────────
  // The new seed created partner-* slug ids; anything else is an old duplicate.
  const allPartnerIds = await client.fetch(
    `*[_type == "partnerLogo"]._id`
  );
  const oldPartnerIds = allPartnerIds.filter(
    (id) => !id.startsWith("partner-") && !id.startsWith("drafts.")
  );
  await deleteIds("old UUID-based partner logos", oldPartnerIds);

  // ── 4. Content cards with UUID ids ───────────────────────────────────────────
  // These were created by very early seeding and are now superseded by inline
  // section data. The newer card-* documents are kept in case they are ever
  // referenced, but the raw UUID ones serve no purpose.
  const allCardIds = await client.fetch(`*[_type == "contentCard"]._id`);
  const oldCardUuids = allCardIds.filter(
    (id) => !id.startsWith("card-") && !id.startsWith("drafts.")
  );
  await deleteIds("old UUID-based content cards", oldCardUuids);

  // ── 5. Duplicate short-slug cards superseded by newer card-*-* ids ───────────
  // e.g. card-bee-real is duplicated by card-program-bee-real,
  //      card-bystander by card-training-bystander, etc.
  const shortSlugDuplicates = [
    "card-bee-real",           // → card-program-bee-real
    "card-buzzpak",            // → card-program-buzzpak
    "card-bystander",          // → card-training-bystander
    "card-capacity-building",  // → card-assistance-capacity-building
    "card-claiming-voice",     // → card-training-claiming-voice
    "card-collaborative-problem", // → card-assistance-problem-solving
    "card-cultural-humility",  // → card-training-cultural-humility
    "card-cultural-resilience",// → card-training-cultural-resilience
    "card-custom-training",    // → card-assistance-custom-training
    "card-economic-relief",    // superseded by inline section data
    "card-healing-circles",    // superseded by inline section data
    "card-healing-is-work",    // → card-training-healing-work
    "card-holistic-support",   // superseded by inline section data
    "card-individual-counseling", // superseded by inline section data
    "card-interconnected",     // → card-training-interconnected
    "card-language-of-liberation", // → card-training-language-liberation
    "card-ongoing-support",    // → card-assistance-ongoing-support
    "card-peer-advocacy",      // superseded by inline section data
    "card-refer-survivor",     // superseded by inline section data
    "drafts.card-cultural-resilience", // draft of a card being removed anyway
  ];
  await deleteIds("short-slug duplicate content cards", shortSlugDuplicates);

  console.log("\n✓ Cleanup complete.\n");
}

cleanup().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
