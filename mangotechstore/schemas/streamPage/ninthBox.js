import { defineField, defineType } from 'sanity';

export default {
    name: 'ninthStreamBox',
    type: 'document',
    title: 'Ninth Stream Box',
    fields: [
        {
            name: 'ninthGameImg',
            type: 'image',
            title: 'Ninth Game Image'
        },
        {
            name: 'ninthGameTitle',
            type: 'string',
            title: 'Ninth Game Title'
        },
        {
            name: 'ninthGameLink',
            type: 'string',
            title: 'Ninth Game Link'
        }
    ]
    
}
