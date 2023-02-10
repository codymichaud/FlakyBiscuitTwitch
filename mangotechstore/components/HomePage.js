import styles from '../styles/HomePage.module.css'
import React from "react";
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react';
import { Card, Loading, Col, Text, Grid, Row, Button, Progress } from '@nextui-org/react';
import axios from 'axios';
// import history from "history";
import {streamImage} from '../../mangotechstore/public/mq3.jpg';


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
        <div>

        </div>
    )

}