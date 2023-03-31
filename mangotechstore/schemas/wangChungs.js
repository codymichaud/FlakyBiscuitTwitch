import { defineField, defineType } from 'sanity';

// export default {
//     name: 'wangChungs',
//     title: 'Number of Wang Chungs',
//     type: 'object',
//     fields: [
//         {
//             name: 'wangChungs',
//             title: 'Number of Wang Chungs',
//             type: 'number',
//         }
//     ]

// }

export default {
  name: 'wangChungs',
  type: 'document',
  title: 'Wang Chungs',
  fields: [
    {
      name: 'numOfWangChungs',
      type: 'number',
      title: 'Number of Wang Chungs',
    },
  ],
};
