import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

const projectId = 'fm96vt2j';
const dataset = 'production';

export default defineConfig({
  basePath: '/studio',
  name: 'Flaky_Biscuit_Content_Studio',
  title: 'Flaky Biscuit Content Studio',
  projectId: 'fm96vt2j',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
