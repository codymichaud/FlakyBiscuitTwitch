import { defineField, defineType } from 'sanity';

export default {
  name: 'granTurismoVideos',
  type: 'document',
  title: 'Gran Turismo',
  fields: [
    {
      name: 'ninthGameImg',
      type: 'image',
      title: 'Ninth Game Image',
    },
    {
      name: 'ninthGameTitle',
      type: 'string',
      title: 'Ninth Game Title',
    },
    {
      name: 'ninthGameLink',
      type: 'string',
      title: 'Ninth Game Link',
    },
  ],
};
