import { defineField, defineType } from 'sanity';
import wangChungs from './wangChungs';
import streamGames from './streamPage/streamGames';
import pcSpecs from './streamPage/pcSpecs';

export const schemaTypes = [
    wangChungs, 
    streamGames,
    pcSpecs,
]
