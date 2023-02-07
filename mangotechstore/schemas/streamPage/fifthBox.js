import { defineField, defineType } from 'sanity';

export default {
    name: 'fifthStreamBox',
    type: 'document',
    title: 'Fifth Stream Box',
    fields: [
        {
            name: 'fifthGameImg',
            type: 'image',
            title: 'Fifth Game Image'
        },
        {
            name: 'fifthGameTitle',
            type: 'string',
            title: 'Fifth Game Title'
        },
        {
            name: 'fifthGameLink',
            type: 'string',
            title: 'Fifth Game Link'
        }
    ]
    
}
