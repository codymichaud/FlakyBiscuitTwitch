import { defineField, defineType } from 'sanity';

export default {
  name: 'assetoCorsaCompVideos',
  type: 'document',
  title: 'Assetto Corsa Comp',
  fields: [
    {
      name: 'gameTitle',
      type: 'string',
      title: 'Game Title',
    },
    {
      name: 'gameDate',
      type: 'string',
      title: 'Game Date',
    },
    {
      name: 'gameDesc',
      type: 'string',
      title: 'Game Desc',
    },
    {
      name: 'videoID',
      type: 'string',
      title: 'Video ID',
    },
    {
      name: 'published',
      type: 'boolean',
      title: 'Video published?',
    },
  ],
};
