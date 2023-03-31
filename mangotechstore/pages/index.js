import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Nav.module.css';
import React, { Component } from 'react';
import Layout from '../components/layout';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';
import HomePage from '../components/HomePage';
import { createClient } from 'next-sanity';

export class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: false,
    error: false,
    isDark: false,
    variant: 'static',
    loggedIn: false,
    branding: 'Flaky Biscuit',
    variants: ['static', 'floating', 'sticky'],
  };
  // const  { theme } = useTheme();
  // const { setTheme } = useNextTheme();

  handleDarkMode() {
    const systemTheme = localStorage.getItem('theme');

    if (systemTheme === 'dark') {
      setIsDark(true);
    }
  }

  render() {
    return (
      <Layout className={styles.container}>
        <Head>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div>
          <HomePage />
        </div>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Layout>
    );
  }
}

export default Home;
