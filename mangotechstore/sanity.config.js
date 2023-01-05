import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';

const projectId = 'fm96vt2j';
const dataset = 'production';

export default defineConfig({
  basePath: '/studio',
  name: 'Spit_Roast_GanG_Content_Studio',
  title: 'Spit Roast GanG Content Studio',
  projectId: projectId,
  dataset: dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})



