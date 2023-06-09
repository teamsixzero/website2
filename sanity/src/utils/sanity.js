import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'b5rm9tf1',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-06', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_STUDIO_CLIENT_KEY, // Only if you want to update content with the client
})
