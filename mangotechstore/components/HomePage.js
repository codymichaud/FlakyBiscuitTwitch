import styles from '../styles/HomePage.module.css'
import React from "react";
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react';
import { Card, Loading, Col, Text, Grid, Row, Button, Progress, Link } from '@nextui-org/react';
import axios from 'axios';
// import history from "history";
import {streamImage} from '../../mangotechstore/public/mq3.jpg';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

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

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 240,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#7300e6",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> 
        <Grid.Container justify="start">
            <Grid xs={4}>
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
                            <Text 
                                className='text-4xl font-bold'
                            h3 
                            css={{
                                textGradient: "45deg, $white -10%, $red600 50%",
                                }}
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