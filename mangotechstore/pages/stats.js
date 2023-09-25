import styles from '../styles/HomePage.module.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
} from '@nextui-org/react';
import axios from 'axios';
// import history from "history";
import { streamImage } from '../../mangotechstore/public/mq3.jpg';
import { createClient } from 'next-sanity';
import { useDispatch, useSelector } from 'react-redux';
// import channelInfoSlice from '../slices/channelInfoSlice';
import { fetchChannelInfo } from '../slices/channelInfoSlice';
import { fetchUserInfo } from '../slices/userInfoSlice';
import { fetchStreamInfo } from '../slices/streamInfoSlice';
import { storeInfo } from '../slices/userInfoSlice';
import PropTypes from 'prop-types';
import {
  fetchChannelInfoPending,
  fetchChannelInfoFulfilled,
  fetchChannelInfoRejected,
} from '../slices/channelInfoSlice';
import {
  fetchUserInfoPending,
  fetchUserInfoFulfilled,
  fetchUserInfoRejected,
} from '../slices/userInfoSlice';

export default function Stats({ channelInfo }) {
  // state = {
  //   channelName: 'Flaky Biscuit',
  //   streams: null,
  //   streamFollowers: null,
  //   error: false,
  //   loading: false,
  // };


  const dispatch = useDispatch();
  // const channelInfo = useSelector(state => state.channelInfo);
  const userInfo = useSelector(state => state.userInfo);
  const error = useSelector(state => state.channelInfo);
  const loading = useSelector(state => state.channelInfo);
  const data = useSelector(state => state.channelInfo);

  // console.log('channelInfo', channelInfo);

  React.useEffect(() => {
  //     const getChannelInfo = axios.get(`https://api.twitch.tv/helix/channels?broadcaster_id=${channelID}`,
  //   {
  //     headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Client-Id': `${clientID}`,
  //     }
  // })
   
        dispatch(fetchChannelInfo())
          console.log('checking res', channelInfo)
          // console.log('this is checking info', res.payload);
          // const payload = res.payload;
          // const name = useSelector(payload => payload.broadcaster_name);
          // console.log('this is checking info??', channelInfo, name);
  }, []);

  // componentDidMount() {
  //   const { fetchChannelInfo, fetchUserInfo, fetchStreamInfo, channelInfo } =
  //     this.props;
  //   // console.log('clientID', clientID);
  //   fetchChannelInfo()
  //     .then(res => {
  //       if (res.type === 'fetchChannelInfo/fulfilled') {
  //         console.log('Channel info loaded:', res.payload);
  //         fetchChannelInfoFulfilled(res.payload);
  //       } else if (res.type === 'fetchChannelInfo/rejected') {
  //         console.error('Failed to load channel info:', res.payload);
  //         fetchChannelInfoRejected(res.payload);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error while loading channel info:', error);
  //     });
  //   // console.log('does this work?', channelInfo)

  //   fetchUserInfo()
  //     .then(res => {
  //       if (res.type === 'fetchUserInfo/fulfilled') {
  //         console.log('Channel info loaded:', res.payload);
  //         fetchUserInfoFulfilled(res.payload);
  //       } else if (res.type === 'fetchUserInfo/rejected') {
  //         console.error('Failed to load channel info:', res.payload);
  //         fetchUserInfoRejected(res.payload);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error while loading channel info:', error);
  //     });

  //   fetchStreamInfo()
  //     .then(res => {
  //       if (res.type === 'fetchStreamInfo/fulfilled') {
  //         console.log('Channel info loaded:', res.payload);
  //         fetchStreamInfoFulfilled(res.payload);
  //       } else if (res.type === 'fetchStreamInfo/rejected') {
  //         console.error('Failed to load channel info:', res.payload);
  //         fetchStreamInfoRejected(res.payload);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error while loading channel info:', error);
  //     });
  // }

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error.message}</p>;
  //   console.log('checking data', data);

  //
  // React.useEffect(() => {
  //     if (streams === null) {
  //         const getStreams = axios.get(`https://api.twitch.tv/helix/videos?user_id=${channelID}`,
  //         {
  //             headers: {
  //                 'Authorization': `Bearer ${accessToken}`,
  //                 'Client-Id': `${clientID}`,
  //             }
  //         })
  //         getStreams.then(respo => {
  //             console.log('sum video info', respo.data.data)
  //             storeInfo(respo.data.data[0]);
  //         })
  //     }
  //     console.log('video info', streams);
  // }, [])

  // React.useEffect(() => {
  //     if (streamFollowers === null) {
  //         const getFollowers = axios.get(`https://api.twitch.tv/helix/users/follows?to_id=${channelID}`,
  //         {
  //             headers: {
  //                 'Authorization': `Bearer ${accessToken}`,
  //                 'Client-Id': `${clientID}`,
  //             }
  //         })
  //         getFollowers.then(respos => {
  //             console.log('sum stream info', respos)
  //             setStreamFollowers(respos.data.data);
  //         })
  //     }
  // }, [])

  const latestStream = () => {
    const { streamInfo } = this.props;

    const { streams } = this.state;
    // console.log('checkingy payload', streamInfo);
    const dayjs = require('dayjs');

    // const newStream = streams;
    // console.log('new stream', newStream);
    // return (
    //     <Card isPressable css={{ w: "100%", h: "400px", mt: '4rem', mb: '3rem' }}>
    //     <Card.Body css={{ p: 0 }}>
    //       <Card.Image
    //         src={newStream.thumbnail_url}
    //         width="100%"
    //         height="90%"
    //         objectFit="cover"
    //         alt="Card example background"
    //       />
    //     </Card.Body>
    //     <Card.Footer
    //       isBlurred
    //       css={{
    //         position: "absolute",
    //         bgBlur: "#ffffff66",
    //         borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
    //         bottom: 0,
    //         zIndex: 1,
    //       }}
    //     >
    //       <Col sm={12}>
    //         <Text color="#000" size={14}>
    //             {dayjs(newStream.created_at).format('dddd MMMM D, YYYY')}
    //         </Text>
    //         <Text color="#000" size={14} css={{ mt: '5px' }}>
    //             {newStream.title}
    //         </Text>
    //       </Col>
    //     </Card.Footer>
    //   </Card>
    // )
  }

  // streamGoals() {
  //     if (streamFollowers === null || streams === null) {
  //         return true;
  //     }
  //     const newStream = streams[0];
  //     console.log('checking progress', streamFollowers.length * 10)
  //     return (
  //         <Card isPressable css={{ w: "100%", h: "400px", mt: '2.5rem', mb: '3rem', ml: '2.5rem', mr: '2.5rem' }}>
  //             <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, ml: '2px' }}>
  //                 <Text className='text-base' size={12} weight="bold" transform="uppercase" color="#white">
  //                     Help me reach Affiliate!
  //                 </Text>
  //             </Card.Header>
  //             <Card.Body>
  //                 <Grid.Container gap={2} css={{ mt: '1.5rem' }}>
  //                     <Grid xs={12}>
  //                         <Col>
  //                             <Text className='text-base' size={12} weight="bold" transform="uppercase" color="$white">
  //                                 Subscribers (Lets hit 30!!) {`${streamFollowers.length} / 50`}
  //                             </Text>
  //                             <Progress shadow color="error" value={streamFollowers.length * 2} css={{ mt: '3px' }} />
  //                         </Col>
  //                     </Grid>
  //                     {streams === null || streams === [] ?
  //                         <Grid xs={12}>
  //                             <Col>
  //                                 <Text className='text-base' size={12} weight="bold" transform="uppercase" color="$white">
  //                                     Latest Stream Views (Lets hit 10!!) {`${newStream.view_count} / 10`}
  //                                 </Text>
  //                                 <Progress shadow color="error" value={newStream.view_count * 10} css={{ mt: '3px' }} />
  //                             </Col>
  //                         </Grid>
  //                         : ''
  //                     }
  //                     <Grid xs={12}>
  //                         <Col>
  //                             <Text className='text-base' size={12} weight="bold" transform="uppercase" color="$white">
  //                                 Number of Wang Chungs - {numOfWangChungs}
  //                             </Text>
  //                             <Progress shadow color="error" value={numOfWangChungs} css={{ mt: '3px' }} />
  //                         </Col>
  //                     </Grid>
  //                 </Grid.Container>
  //             </Card.Body>
  //         </Card>
  //     )
  // }

  // console.log('checking numWangChungs in homePage', numOfWangChungs);

  // if (error === '404') {
  //     history.push('/404');
  // }
  //     if (loading === true) {
  //     return (
  //         <Loading className='align-items-center' color='secondary' type='points-opacity' />
  //     )
  //    }

  // const { channelInfo, streamInfo } = this.props;
  // console.log('in render', this.props.channelInfo)
  return (
    <div className={styles.homePage}>
      <Grid.Container justify='center'>
        <Grid xs={4}>
          <Card
            css={{
              mt: '2.5rem',
              ml: '2.5rem',
              mr: '2.5rem',
              height: '25rem',
            }}
          >
            <Card.Header
              css={{ position: 'absolute', zIndex: 1, top: 5, ml: '2px' }}
            >
              <Col>
                <Text
                  className='text-base'
                  size={12}
                  weight='bold'
                  transform='uppercase'
                  color='#white'
                >
                  Welcome to
                </Text>
                <Text
                  className='text-4xl'
                  h3
                  css={{
                    textGradient: '45deg, $white -10%, $red600 50%',
                  }}
                  weight='bold'
                >
                  {/* {this.state.channelName} */}
                </Text>
              </Col>
            </Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Grid>
        {/* <Grid xs={4}>{this.latestStream()}</Grid> */}
        {/*<Grid xs={4}>
                      {this.streamGoals()}
                  </Grid> */}
      </Grid.Container>
    </div>
  );
}

Stats.propTypes = {
  wangChungs: PropTypes.array,
};

const client = createClient({
  projectId: 'fm96vt2j',
  dataset: 'production',
  apiVersion: '2023-01-06',
  useCdn: false,
});

export async function getStaticProps() {
  const wangChungs = await client.fetch(`*[_type == "wangChungs"]`);

  return {
    props: {
      wangChungs,
    },
  };
}
