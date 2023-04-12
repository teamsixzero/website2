import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-12", // use current date (YYYY-MM-DD) to target the latest API version
});
