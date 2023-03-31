import styles from '../styles/HomePage.module.css';
import React, { Component } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import {
  Card,
  Loading,
  Col,
  Text,
  Grid,
  Row,
  Button,
  Progress,
  Link,
  Image,
} from '@nextui-org/react';
import axios from 'axios';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: false,
    error: false,
    channelID: '584412043',
    accessToken: 'tmdtj8bc9eq383gql7uykjtm1r6lkg',
    channelInfo: null,
    channelName: 'Flaky Biscuit',
    streams: null,
    clientID: 'vyohv0woocxlcesczlgrmeksszijqa',
    userInfo: null,
    streamFollowers: null,
  };

  render() {
    const { channelName } = this.state;

    return (
      <div className='h-screen'>
        <div className='absolute z-9'>
          <Image
            src='https://wallpapers.com/images/hd/pc-gaming-setup-rgb-4k-ft1ym37yjyb7lp19.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div>
        <Grid.Container justify='start'>
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
                  <Text
                    h1
                    size={30}
                    css={{
                      textGradient: '45deg, $white 4%, $red600 50%',
                    }}
                    // weight="bold"
                    b
                    color='inherit'
                    hideIn='xs'
                    className='font-bold'
                  >
                    {channelName}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    );
  }
}
