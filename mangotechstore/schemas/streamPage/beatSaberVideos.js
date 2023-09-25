import { defineField, defineType } from 'sanity';

export default {
  name: 'beatSaberVideos',
  type: 'document',
  title: 'Beat Saber',
  fields: [
    {
      name: 'eighthGameImg',
      type: 'image',
      title: 'Eighth Game Image',
    },
    {
      name: 'eighthGameTitle',
      type: 'string',
      title: 'Eighth Game Title',
    },
    {
      name: 'eighthGameLink',
      type: 'string',
      title: 'Eighth Game Link',
    },
  ],
};
