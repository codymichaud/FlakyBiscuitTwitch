import { defineField, defineType } from 'sanity';

export default {
    name: 'streamGames',
    type: 'document',
    title: 'Stream Games',
    fields: [
        {
            name: 'firstGameTitle',
            type: 'string',
            title: 'First Game Title'
        },
        {
            name: 'firstGameImgLink',
            type: 'string',
            title: 'First Game Image Link'
        },
        {
            name: 'firstGameHref',
            type: 'string',
            title: 'First Game Href'
        }
    ]
    
}
