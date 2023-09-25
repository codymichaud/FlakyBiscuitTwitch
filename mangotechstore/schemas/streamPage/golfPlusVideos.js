import { defineField, defineType } from 'sanity';

export default {
  name: 'golfPlusVideos',
  type: 'document',
  title: 'Golf Plus',
  fields: [
    {
      name: 'fifthGameImg',
      type: 'image',
      title: 'Fifth Game Image',
    },
    {
      name: 'fifthGameTitle',
      type: 'string',
      title: 'Fifth Game Title',
    },
    {
      name: 'fifthGameLink',
      type: 'string',
      title: 'Fifth Game Link',
    },
  ],
};
