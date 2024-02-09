import { createClient } from "@sanity/client";

export const sanityConfig = {
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  token: process.env.GATSBY_SANITY_PREVIEW_TOKEN,
};

export const getSanityClient = ({ preview }) => {
  const client = createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    token: preview ? sanityConfig.token : undefined,
    perspective: preview ? "previewDrafts" : "published",
    apiVersion: "2023-07-01",
    useCdn: false,
  });

  return client;
};
