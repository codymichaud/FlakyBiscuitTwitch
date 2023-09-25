import { defineField, defineType } from 'sanity';

export default {
  name: 'overwatchVideos',
  type: 'document',
  title: 'Overwatch',
  fields: [
    {
      name: 'fourthGameImg',
      type: 'image',
      title: 'Fourth Game Image',
    },
    {
      name: 'fourthGameTitle',
      type: 'string',
      title: 'Fourth Game Title',
    },
    {
      name: 'fourthGameLink',
      type: 'string',
      title: 'Fourth Game Link',
    },
  ],
};
