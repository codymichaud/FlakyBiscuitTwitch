import { defineField, defineType } from 'sanity';

export default {
    name: 'streamGameTitle',
    type: 'document',
    title: 'Stream Game Title',
    fields: [
        {
            name: 'secondGameTitle',
            type: 'string',
            title: 'Second Game Title'
        }
    ]
    
}
