import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {media} from 'sanity-plugin-media'

import {schemaTypes} from './src/schemas'
import deskStructure from './src/deskStructure'

export default defineConfig({
  name: 'sixzero',
  title: 'Sixzero',

  projectId: 'b5rm9tf1',
  dataset: 'production',

  plugins: [deskTool({structure: deskStructure}), visionTool(), colorInput(), media()],

  schema: {
    types: schemaTypes,
  },
})
