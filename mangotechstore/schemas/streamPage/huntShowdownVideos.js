import { defineField, defineType } from 'sanity';

export default {
  name: 'huntShowdownVideos',
  type: 'document',
  title: 'Hunt Showdown',
  fields: [
    {
      name: 'seventhGameImg',
      type: 'image',
      title: 'Seventh Game Image',
    },
    {
      name: 'seventhGameTitle',
      type: 'string',
      title: 'Seventh Game Title',
    },
    {
      name: 'seventhGameLink',
      type: 'string',
      title: 'Seventh Game Link',
    },
  ],
};
