import {client} from './sanity'

const type = ``

client
  .delete({query: '*[_type == $type]', params: {type}})
  .then(() => {
    console.log(`The documents matching *[_type == "${type}"] was deleted`)
  })
  .catch((err) => {
    console.error('Delete failed: ', err.message)
  })
