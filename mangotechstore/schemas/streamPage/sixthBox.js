import { defineField, defineType } from 'sanity';

export default {
    name: 'sixthStreamBox',
    type: 'document',
    title: 'Sixth Stream Box',
    fields: [
        {
            name: 'sixthGameImg',
            type: 'image',
            title: 'Sixth Game Image'
        },
        {
            name: 'sixthGameTitle',
            type: 'string',
            title: 'Sixth Game Title'
        },
        {
            name: 'sixthGameLink',
            type: 'string',
            title: 'Sixth Game Link'
        }
    ]
    
}
