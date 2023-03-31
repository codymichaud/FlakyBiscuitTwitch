import { defineField, defineType } from 'sanity';

export default {
  name: 'streamGameLink',
  type: 'document',
  title: 'Stream Game Link',
  fields: [
    {
      name: 'thirdGameLink',
      type: 'string',
      title: 'Third Game Link',
    },
  ],
};
