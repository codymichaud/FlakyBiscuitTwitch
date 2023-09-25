import { defineField, defineType } from 'sanity';

export default {
  name: 'gtaVVideos',
  type: 'document',
  title: 'GTA V',
  fields: [
    {
      name: 'sixthGameImg',
      type: 'image',
      title: 'Sixth Game Image',
    },
    {
      name: 'sixthGameTitle',
      type: 'string',
      title: 'Sixth Game Title',
    },
    {
      name: 'sixthGameLink',
      type: 'string',
      title: 'Sixth Game Link',
    },
  ],
};
