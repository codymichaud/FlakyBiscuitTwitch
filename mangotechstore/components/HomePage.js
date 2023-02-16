import styles from '../styles/HomePage.module.css'
import React from "react";
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react';
import { Card, Loading, Col, Text, Grid, Row, Button, Progress, Link, Image } from '@nextui-org/react';
import axios from 'axios';

export default function HomePage() {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [channelID, setChannelID] = React.useState('584412043');
    const [accessToken, setAccessToken] = React.useState('tmdtj8bc9eq383gql7uykjtm1r6lkg');
    const [channelInfo, setChannelInfo] = React.useState(null);
    const [channelName, setChannelName] = React.useState('Flaky Biscuit');
    const [streams, setStreams] = React.useState(null);
    const [clientID, setClientID] = React.useState('vyohv0woocxlcesczlgrmeksszijqa');
    const [userInfo, setUserInfo] = React.useState(null);
    const [streamFollowers, setStreamFollowers] = React.useState(null);

    

    return (
        <div className="h-screen">
            <div className="absolute z-9">
                <Image 
                    src='https://wallpapers.com/images/hd/pc-gaming-setup-rgb-4k-ft1ym37yjyb7lp19.jpg'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                />
            </div>
            <Grid.Container justify="start">
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
            </Grid.Container>
        </div>
    )

}