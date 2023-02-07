import { defineField, defineType } from 'sanity';

export default {
    name: 'eighthStreamBox',
    type: 'document',
    title: 'Eighth Stream Box',
    fields: [
        {
            name: 'eighthGameImg',
            type: 'image',
            title: 'Eighth Game Image'
        },
        {
            name: 'eighthGameTitle',
            type: 'string',
            title: 'Eighth Game Title'
        },
        {
            name: 'eighthGameLink',
            type: 'string',
            title: 'Eighth Game Link'
        }
    ]
    
}
