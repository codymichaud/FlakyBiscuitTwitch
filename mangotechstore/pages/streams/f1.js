import React, { Component } from "react";
import { Image } from '@nextui-org/react';

export class F1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <div className="h-screen">
                <div className="absolute z-9">
                    <Image 
                        src='/Images/f1-background.jpeg'
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
            <div className="mt-86 h-screen bg-fixed">
                <div className="absolute z-10">
                    <Image 
                        src='/Images/ferrari-sf23.jpeg'
                        layout='fill'
                        objectFit='cover'
                        quality={100}
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default F1;