import styles from '../styles/Nav.module.css';
import {
  Navbar,
  Dropdown,
  Button,
  Link,
  Text,
  Modal,
  Input,
  Row,
  Checkbox,
  Grid,
  User,
  Switch,
  Loading,
} from '@nextui-org/react';
import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faRightToBracket,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme, isDark, type, theme } from '@nextui-org/react';
import queryString from 'query-string';
import loginModal from './loginModal';
import { Router, useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

export default function Nav({ openLogin }) {
  const [variant, setVariant] = React.useState('static');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [branding, setBranding] = React.useState('Flaky Biscuit');
  const [visible, setVisible] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  const [userPass, setUserPass] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [testEmail, setTestEmail] = React.useState('FlakyBiscuit');
  const [testPass, setTestPass] = React.useState('123456');
  const [mounted, setMounted] = React.useState(false);

  const { isDark, type, theme } = useTheme();
  const router = useRouter();
  const { data: session } = useSession();
  const didMountRef = useRef(false);
  const { setTheme } = useNextTheme();

  React.useEffect(() => {
    if (didMountRef.current) {
      if (session) {
        console.log('checking sessions', session);
        setUserName(session.user.name);
        setUserEmail(session.user.email);
      }
    } else didMountRef.current = true;
  }, []);

  

  const state = {
    variant: 'static',
    loggedIn: false,
    branding: 'Flaky Biscuit',
    visible: false,
    userEmail: 'FlakyBiscuit',
    userPass: '',
    userName: 'CodyM',
    testEmail: 'FlakyBiscuit',
    testPass: '123456',
    mounted: false,
  };

  // componentDidMount() => {
  //   // this.setState({ mounted: true });
  //   // console.log('checking theme', isDark, type);
  // }

  const sendToUserProfile = () => {
    console.log('made it in the function');
  };

  const handler = () => {
    // this.setState({
    //   visible: true,
    // })
    console.log('opened!');
  };

  return (
    <Navbar
      maxWidth='fluid'
      variant={state.variant}
      className='flex justify-start dark:bg-black'
      css={{
        borderBottom: '1px solid $gray50',
      }}
      // border: '$space$1 solid transparent',
    >
      <Navbar.Brand>
        <Link href='/'>
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
            {branding}
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content className='grid grid-cols-5' hideIn='xs'>
        <Navbar.Link
          auto='true'
          light='true'
          href='/streams'
          css={{
            svg: { pe: 'none' },
            // borderRadius: '$xs', // radii.xs
            // border: '$space$1 solid transparent',
            color: theme.colors.white.value,
            height: '$12', // space[12]
            //   boxShadow: '$md', // shadows.md
            '&:hover': {
              color: theme.colors.red700.value,
            },
            '&:active': {
              background: theme.colors.pink200.value,
            },
            '&:focus': {
              borderColor: theme.colors.pink600.value,
            },
          }}
          // iconRight={icons.chevron}
          ripple='true'
        >
          Streams
        </Navbar.Link>
        <Navbar.Link
          isActive
          href='/about-flaky'
          css={{
            svg: { pe: 'none' },
            // borderRadius: '$xs', // radii.xs
            // border: '$space$1 solid transparent',
            color: theme.colors.white.value,
            height: '$12', // space[12]
            dropShadow: '$lg',
            '&:hover': {
              color: theme.colors.red700.value,
            },
            '&:active': {
              background: theme.colors.pink200.value,
            },
            '&:focus': {
              borderColor: theme.colors.pink400.value,
            },
          }}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          isActive
          href='/stats'
          css={{
            svg: { pe: 'none' },
            // borderRadius: '$xs', // radii.xs
            // border: '$space$1 solid transparent',
            color: theme.colors.white.value,
            height: '$12', // space[12]
            dropShadow: '$lg',
            '&:hover': {
              color: theme.colors.red700.value,
            },
            '&:active': {
              background: theme.colors.pink200.value,
            },
            '&:focus': {
              borderColor: theme.colors.pink400.value,
            },
          }}
        >
          Stats
        </Navbar.Link>
        <Navbar.Link
          isActive
          href='/links'
          css={{
            svg: { pe: 'none' },
            // borderRadius: '$xs', // radii.xs
            // border: '$space$1 solid transparent',
            color: theme.colors.white.value,
            height: '$12', // space[12]
            dropShadow: '$lg',
            '&:hover': {
              color: theme.colors.red700.value,
            },
            '&:active': {
              background: theme.colors.pink200.value,
            },
            '&:focus': {
              borderColor: theme.colors.pink400.value,
            },
          }}
        >
          Links
        </Navbar.Link>
        <Navbar.Link
          isActive
          href='/my-setup'
          css={{
            svg: { pe: 'none' },
            // borderRadius: '$xs', // radii.xs
            // border: '$space$1 solid transparent',
            color: theme.colors.white.value,
            height: '$12', // space[12]
            dropShadow: '$lg',
            '&:hover': {
              color: theme.colors.red700.value,
            },
            '&:active': {
              background: theme.colors.pink200.value,
            },
            '&:focus': {
              borderColor: theme.colors.pink400.value,
            },
          }}
        >
          My Setup
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content className='flex justify-end content-end'>
        <Switch
          checked={isDark}
          shadow
          size='lg'
          iconOn={<FontAwesomeIcon icon={faMoon} />}
          iconOff={<FontAwesomeIcon icon={faSun} />}
          color={isDark ? 'secondary' : 'backgroundContrast'}
          onChange={e => setTheme(e.target.checked === true ? 'dark' : 'light')}
          css={{
            // marginRight: '20px',
            // marginLeft: '-130px',
            color: isDark ? theme.colors.purple500.value : '$white600',
          }}
        />
        {session && session.user ? (
          <Navbar.Link
            isActive
            color='inherit'
            href='#'
            css={{
              svg: { pe: 'none' },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.purple500.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
              '&:hover': {
                color: theme.colors.red700.value,
              },
              '&:active': {
                background: theme.colors.pink200.value,
              },
              '&:focus': {
                borderColor: theme.colors.pink400.value,
              },
            }}
          >
            <Grid.Container justify='flex-start'>
              <Grid>
                <Dropdown placement='bottom-left'>
                  <Dropdown.Trigger>
                    <User
                      bordered
                      as='button'
                      size='lg'
                      color='gradient'
                      zoomed
                      pointer
                      squared
                      name={userName}
                      src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                    />
                  </Dropdown.Trigger>
                  <Dropdown.Menu color='primary' aria-label='User Actions'>
                    <Dropdown.Item key='profile' css={{ height: '$18' }}>
                      <Text b color='inherit' css={{ d: 'flex' }}>
                        Signed in as
                      </Text>
                      <Text b color='inherit' css={{ d: 'flex' }}>
                        {userEmail}
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item key='user-profile' withDivider>
                      <Link href='/profile' className='text-white'>
                        My Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key='Wishlist'>
                      <Link className='text-white' href='/game-wishlist'>
                        Wishlist
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item key='logout' color='error' withDivider>
                      <Button
                        onClick={() => signOut()}
                        className='z-50 text-left'
                      >
                        Log Out
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Grid>
            </Grid.Container>
          </Navbar.Link>
        ) : (
          <Navbar.Link
            isActive
            color='inherit'
            href='#'
            css={{
              svg: { pe: 'none' },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.purple500.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
              '&:hover': {
                color: theme.colors.red700.value,
              },
              '&:active': {
                background: theme.colors.pink200.value,
              },
              '&:focus': {
                borderColor: theme.colors.pink400.value,
              },
            }}
          >
            <Button
              onClick={() => {
                openLogin(true);
                setLoggedIn(true);
              }}
              light='true'
              color='white'
              css={{
                color: theme.colors.red700.value,
                '&:hover': {
                  color: theme.colors.red700.value,
                },
              }}
              auto='true'
            >
              <FontAwesomeIcon
                size='xl'
                color={theme.colors.white.value}
                css={{
                  color: theme.colors.red700.value,
                  '&:hover': {
                    color: theme.colors.red700.value,
                  },
                }}
                icon={faRightToBracket}
              />
            </Button>
          </Navbar.Link>
        )}
      </Navbar.Content>
    </Navbar>
  );
}
