import styles from '../styles/HomePage.module.css'
import React from "react";
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react';
import { Card, Loading, Col, Text, Grid, Row, Button } from '@nextui-org/react';
import axios from 'axios';
import history from "history";
import rocketLeagueImg from '../public/mq3.jpg';


export default function HomePage() {
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [channelID, setChannelID] = React.useState('857435911');
    const [accessToken, setAccessToken] = React.useState('tmdtj8bc9eq383gql7uykjtm1r6lkg');
    const [channelInfo, setChannelInfo] = React.useState(null);
    const [channelName, setChannelName] = React.useState('Spit Roast GanG');
    const [streams, setStreams] = React.useState(null);
    const [clientID, setClientID] = React.useState('vyohv0woocxlcesczlgrmeksszijqa');
    const [userInfo, setUserInfo] = React.useState(null);

    React.useEffect(() => {
        if (channelInfo === null){
            const getChannelInfo = axios.get(`https://api.twitch.tv/helix/channels?broadcaster_id=${channelID}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Client-Id': `${clientID}`,
                }
            }).then(res => {
                console.log('heres some channel data', res)
                setChannelInfo(res.data.data[0]);
            })
        }
        console.log('channel info', channelInfo);
    })

    React.useEffect(() => {
        if (userInfo === null) {
            const getUserInfo = axios.get(`https://api.twitch.tv/helix/users?id=${channelID}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Client-Id': `${clientID}`,
                }
            }).then(resp => {
                console.log('heres some user data', resp);
                setUserInfo(resp.data.data[0]);
            })
        }
        console.log('user info', userInfo);
    })
    React.useEffect(() => {
        if (streams === null) {
            const getStreams = axios.get(`https://api.twitch.tv/helix/videos?user_id=${channelID}`,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Client-Id': `${clientID}`,
                }
            }).then(respo => {
                console.log('sum stream info', respo)
                setStreams(respo.data.data);
            })
        }
        console.log('stream info', streams);
    })
        
    const latestStream = () => {
        console.log('checking for latest stream', streams);
        if (streams === null) {
            return true;
        }
        const newStream = streams[0];

        return (
            <Card isPressable css={{ w: "100%", h: "400px", mt: '3rem', mb: '3rem' }}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={rocketLeagueImg}
                width="100%"
                height="90%"
                objectFit="cover"
                alt="Card example background"
              />
            </Card.Body>
            <Card.Footer
              isBlurred
              css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
              }}
            >
              <Row>
                <Text color="#000" size={14}>
                    {newStream.title}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        )
    }

    
        
    

    
    
    if (error === '404') {
        history.push('/404');
    }
    if (loading === true) {
    return (
        <Loading className='align-items-center' color='secondary' type='points-opacity' />
    )
   }

    return (
        <div className={styles.homePage}>
            <Grid.Container justify="center">
                <Grid xs={4}>
                    <Card
                    css={{
                        mt: '2.5rem',
                        ml: '2.5rem',
                        mr: '2.5rem',
                        height: '25rem',

                    }}
                    >
                        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, ml: '2px' }}>
                            <Col>
                                <Text className='text-base' size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                                    Welcome to
                                </Text>
                                <Text 
                                    className='text-4xl'
                                h3 
                                css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                }}
                                weight="bold"
                                >
                                    {channelName}
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    {latestStream()}
                </Grid>
            </Grid.Container>
        </div>
    )
}