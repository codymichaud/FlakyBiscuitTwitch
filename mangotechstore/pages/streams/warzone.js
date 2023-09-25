import React, { Component } from 'react';
import { Image, Text, Grid } from '@nextui-org/react';
import YouTube from 'react-youtube';

export default function Warzone() {
  const options = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className='h-screen bg-fixed'>
        <div className='absolute z-9 bg-fixed'>
          <Image
            src='/Images/warzone-2.jpeg'
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div>
        {/* <Grid.Container justify="start">
          <Grid xs={3}>
            <YouTube 
              videoId='hOkRCktIjjU'
              opts={options}
            />
          </Grid>
        </Grid.Container> */}
      </div>
    </div>
  );
}