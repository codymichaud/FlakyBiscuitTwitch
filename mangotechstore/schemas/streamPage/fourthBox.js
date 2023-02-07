import { defineField, defineType } from 'sanity';

export default {
    name: 'fourthStreamBox',
    type: 'document',
    title: 'Fourth Stream Box',
    fields: [
        {
            name: 'fourthGameImg',
            type: 'image',
            title: 'Fourth Game Image'
        },
        {
            name: 'fourthGameTitle',
            type: 'string',
            title: 'Fourth Game Title'
        },
        {
            name: 'fourthGameLink',
            type: 'string',
            title: 'Fourth Game Link'
        }
    ]
    
}
