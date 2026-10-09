import { cacheLife } from "next/cache";

/**
 * Cached year helper — `new Date()` is unstable during prerender under
 * Cache Components, so the value is computed inside a `"use cache"` scope.
 */
export async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}
