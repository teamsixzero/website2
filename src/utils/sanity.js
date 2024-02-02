import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  apiVersion: "2023-09-07",
  useCdn: false,
  perspective: "published",
});

export const token = process.env.GATSBY_SANITY_PREVIEW_TOKEN || "";

export const sanityFetch = async (previewDrafts, query, params = {}) => {
  if (previewDrafts && !token) {
    throw new Error(
      "The `GATSBY_SANITY_PREVIEW_TOKEN` environment variable is required."
    );
  }

  return client.fetch(
    query,
    params,
    previewDrafts
      ? {
          token,
          perspective: "previewDrafts",
        }
      : {}
  );
};
