import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitch,
  faDiscord,
  faYoutube,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { Row, Link, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const router = useRouter();
  // console.log('window', window.location.href)
  return (
    <div className=''>
        <div className='flex justify-center'>
        <Text
            h1
            size={30}
            css={{
              textGradient: '45deg, $white 10%, $red600 100%',
            }}
            // weight="bold"
            b
            color='inherit'
            hideIn='xs'
            className='font-bold'
          >
            Flaky Biscuit
          </Text>
        </div>
      <div className='mt-5'>
        <span className='flex justify-center content-center'>
          <a className='' href='https://www.twitch.tv/flakybiscuit00' target='_blank'>
            <FontAwesomeIcon size='2xl' icon={faTwitch} style={{color: "#a96fff",}} />
          </a>
          <a className='ml-4' href='https://discord.gg/mnXsyaAG' target='_blank'>
            <FontAwesomeIcon size='2xl' icon={faDiscord} style={{color: "#404eed",}} />
          </a>
          <a className='ml-4 mr-4' href='https://www.youtube.com/channel/UCuJXy8wfEtSVEd0vDbjLKKA' target='_blank'>
          <FontAwesomeIcon size='2xl' icon={faYoutube} style={{color: "#ff0000",}} />
          </a>
          <a className='' href='https://www.tiktok.com/@flakybiscuit00?is_from_webapp=1&sender_device=pc' target='_blank'>
            <FontAwesomeIcon size='2xl' icon={faTiktok} />
          </a>
        </span>
      </div>
    </div>
  );
}
