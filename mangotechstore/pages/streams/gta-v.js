import React, { Component } from 'react';
import { Image, Text } from '@nextui-org/react';

export class GTA5 extends Component {
  render() {
    return (
      <div>
        <div className='h-screen bg-fixed'>
          <div className='absolute z-9 bg-fixed'>
            <Image
              src='/Images/grand-theft-auto-5.jpg'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
          {/* <Grid.Container justify="start">
                    <Grid xs={3}>
                        <Card
                        css={{
                            mt: '2.5rem',
                            ml: '2.5rem',
                            mr: '2.5rem',
                            height: '25rem',

                        }}
                        >
                            <Card.Header className='top-5 ml-0.5 z-10 absolute'>
                                <Col>
                                    <Text className='text-base font-bold text-white uppercase'>
                                        Welcome to
                                    </Text>
                                    <Text h1
                                        size={30}
                                        css={{
                                        textGradient: "45deg, $white 4%, $red600 50%",
                                        }}
                                        // weight="bold"
                                        b color="inherit" 
                                        hideIn="xs"
                                        className='font-bold'
                                    > 
                                    {channelName}
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container> */}
        </div>
        {/* <div className="mt-86 h-screen bg-fixed">
                <div className="absolute z-10">
                    <h1>
                        DO dis show
                    </h1>
                    {/* <Image 
                        src='/Images/ferrari-sf23.jpeg'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                    /> 
                </div>
            </div> */}
      </div>
    );
  }
}

export default GTA5;
