import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'b5rm9tf1',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2023-04-06', // use current date (YYYY-MM-DD) to target the latest API version
  token:
    'skXi0rArXOdkpWastoPmTT9cas20hG4E4WLwOVd8UWKXARtBl02cFfYeypeQknpeg3HRSz1t6ZlWhJyTz9Dgdf3VYh1hzFV48WrsR7CTFikuqSrShWNDCbGYvoPRxULfvHgNC22gBitxVLdTWsCp0BbFgo06BQPc8oUn29sldKVDukYrqjyn', // Only if you want to update content with the client
})

client
  .delete({query: '*[_type == "blockSteps"]'})
  .then(() => {
    console.log('The documents matching *[_type == "blockSteps"] was deleted')
  })
  .catch((err) => {
    console.error('Delete failed: ', err.message)
  })
