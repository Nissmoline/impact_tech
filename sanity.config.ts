import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './studio/schemas'

export default defineConfig({
  name: 'default',
  title: 'Impact Tech CMS',

  projectId: 'YOUR_PROJECT_ID', // Получите после создания проекта на sanity.io
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
