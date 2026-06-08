/**
 * Campaign links and metadata.
 *
 * Centralized so updates to the petition URL, contact address, hashtags,
 * or campaign URL don't require sweeping the codebase.
 *
 * Values marked "placeholder" should be updated before public launch.
 */

export const PETITION_URL =
  "https://www.change.org/p/stop-the-unjust-persecution-of-ethnographer-igbal-abilov";

/** Action Network letter to Senator Schiff supporting Igbal's release. */
export const SENATOR_LETTER_URL =
  "https://actionnetwork.org/letters/letter-to-senator-schiff-asking-for-his-support-in-freeing-igbal-abilov?source=direct_link";

/** Scholars at Risk public advocacy action page for Igbal Abilov. */
export const SCHOLARS_AT_RISK_URL =
  "https://www.scholarsatrisk.org/actions/igbal-abilov-azerbaijan/#Igbal%20Abilov";

/** Campaign Linktree — all sharable resources in one place. */
export const LINKTREE_URL = "https://linktr.ee/freeigbalabilov";

/** Campaign shared inbox. */
export const CONTACT_EMAIL = "voice4igbal@gmail.com";

/**
 * Placeholder — replace with the production domain once the site is live.
 * Used by share drafts; treated as a token to be edited before posting.
 */
export const CAMPAIGN_URL = "https://voice4igbal.vercel.app/";

export const HASHTAGS = [
  "#FreeIgbalAbilov",
  "#AcademicFreedom",
  "#HumanRights",
] as const;

/**
 * Campaign social handles. Update if the canonical accounts change.
 */
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/Voice4Igbal_26",
  x: "https://x.com/Voice4Igbal_26",
} as const;

/** Human-readable date shown in SourcesNote, About hero, and timeline. */
export const LAST_UPDATED = "May 2026";

/**
 * Placeholder — used by sitemap.ts, robots.ts, and Open Graph metadata.
 * Replace with the production domain (e.g. "https://freeigbalabilov.org").
 */
export const SITE_URL = "https://voice4igbal.vercel.app/";

/** True when a placeholder hasn't been replaced yet — useful for UI hints. */
export const isPlaceholderUrl = (value: string) =>
  value.startsWith("[") || value.includes("example.com") || value.includes("example.org");
