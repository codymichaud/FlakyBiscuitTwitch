import { defineField, defineType } from 'sanity';

export default {
    name: 'secondStreamBox',
    type: 'document',
    title: 'Second Stream Box',
    fields: [
        {
            name: 'secondGameImg',
            type: 'image',
            title: 'Second Game Image'
        },
        {
            name: 'secondGameTitle',
            type: 'string',
            title: 'Second Game Title'
        },
        {
            name: 'secondGameLink',
            type: 'string',
            title: 'Second Game Link'
        }
    ]
    
}
