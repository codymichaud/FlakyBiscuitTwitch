import styles from '../styles/Nav.module.css'
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
} from "@nextui-org/react";
import  { React,Component, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, 
    faCartShopping, 
    faRightToBracket,
    faRightFromBracket,
    faMoon,
    faSun, 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme, isDark, type, theme } from '@nextui-org/react';
import queryString from 'query-string';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.closeCreateHandler = this.closeCreateHandler.bind(this);
    this.createAccountHandler = this.createAccountHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.authCheck = this.authCheck.bind(this);
    this.authLogin = this.authLogin.bind(this);
  }
  state = {
    variant: "static",
    loggedIn: false,
    branding: 'Flaky Biscuit',
    visible: false,
    userEmail: '',
    userPass: '',
    userName: 'CodyM',
    testEmail: 'FlakyBiscuit',
    testPass: '123456',
    mounted: false,
  };
    
    

  componentDidMount() {
    // this.setState({ mounted: true });
    // console.log('checking theme', isDark, type);
  }

    

   closeCreateHandler() {

    }

    createAccountHandler() {
      console.log('creating account');

      
    }

    
    handler() {
      this.setState({
        visible: true,
      })
      console.log('opened!')
    };

    closeHandler() {
      this.setState({
        visible: false,
      })
      console.log('closed');
    };

    logout() {
      // if (loggedIn === true) {
        this.setState({
          loggedIn: false,
        })
        console.log('logging out');
      // }
    }

    authLogin(key, value) {
      if (key === 'email') {
        console.log('email', value);
        this.setState({
          userEmail: value,
        })
      } else if (key === 'password') {
        console.log('password', value);
        this.setState({
          userPass: value,
        })
      }
    }

    authCheck() {
      const { userEmail, userPass, testEmail, testPass } = this.state;
      console.log('checking email and checking password', userEmail,  userPass)
      // if (userEmail === testEmail && userPass === testPass) {
        this.setState({
          loggedIn: true,
        })
        console.log('logged in');
      // }
      this.setState({
        visible: false,
      })
    }
    render() {
      const { variant, loggedIn, branding, visible, userEmail, userPass, userName, testEmail, testPass, mounted } = this.state;
      // const { isDark, type, theme } = useTheme();
      return (
          <Navbar
          maxWidth='fluid' 
          variant={variant}
          className='flex justify-start dark:bg-black'
          css={{
            borderBottom: '1px solid $gray50',
          }}
          // border: '$space$1 solid transparent',
        >
          
          <Navbar.Brand>
            
            <Link 
              href="/"
            >
              <Text h1
              size={30}
              css={{
                textGradient: "45deg, $white 10%, $red600 100%",
              }}
              // weight="bold"
              b color="inherit" 
              hideIn="xs"
              className='font-bold'
            > 
              {branding}
              </Text>
            </Link>
            
          </Navbar.Brand>
          <Navbar.Content className='grid grid-cols-5' hideIn="xs">
            <Navbar.Link
              auto='true'
              light='true'
              href='/streams'
              css={{
                svg: { pe: "none" },
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
              href="/about-flaky"
              css={{
                svg: { pe: "none" },
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
              href="/stats"
              css={{
                svg: { pe: "none" },
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
              href="/links"
              css={{
                svg: { pe: "none" },
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
              href="/my-setup"
              css={{
                svg: { pe: "none" },
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
          {/* <Switch
              checked={isDark}
              shadow
              size='lg'
              iconOn={<FontAwesomeIcon icon={faMoon} />}
              iconOff={<FontAwesomeIcon icon={faSun} />}
              color={isDark ? 'secondary' : 'backgroundContrast'}
              onChange={(e) => {
                      console.log('checking e', e)
                      setTheme(e.target.checked === true ? 'dark' : 'light')
                  }
              }
              css={{
              // marginRight: '20px',
              // marginLeft: '-130px',
              color: isDark ? theme.colors.purple500.value : '$white600'
              }}
          /> */}
            {loggedIn === true ? (
            <Navbar.Link  
                isActive
                color="inherit" 
                href="#"
                css={{
                  svg: { pe: "none" },
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
                
                <Grid.Container justify="flex-start">
                    <Grid>
                      <Dropdown placement="bottom-left">
                        <Dropdown.Trigger>
                          <User
                            bordered
                            as="button"
                            size="lg"
                            color='gradient'
                            zoomed
                            pointer
                            squared
                            name={userName}
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                          />
                        </Dropdown.Trigger>
                        <Dropdown.Menu color="primary" aria-label="User Actions">
                          <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                              Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                              {userEmail}
                            </Text>
                          </Dropdown.Item>
                          <Dropdown.Item key="settings" withDivider>
                            My Profile
                          </Dropdown.Item>
                          <Dropdown.Item key="analytics" withDivider>
                            Change Password
                          </Dropdown.Item>
                          <Dropdown.Item key="system">Wishlist</Dropdown.Item>
                          <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                          </Dropdown.Item>
                          <Dropdown.Item onPress={this.logout} key="logout" color="error" withDivider>
                            Log Out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid>
                  </Grid.Container>
            </Navbar.Link>
            ) : (
              <Navbar.Link  
                isActive
                color="inherit" 
                href="#"
                css={{
                  svg: { pe: "none" },
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
                {visible === true ? (
                  <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={this.closeHandler}
                  blur
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Welcome to <br />
                      <Text b size={18}>
                        Spit Roast GanG
                      </Text>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Input
                      onChange={(e) => this.authLogin('email', e.target.value)}
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Email"
                    />
                    <Input
                      onChange={(e) => this.authLogin('password', e.target.value)}
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Password"
                    />
                    <Row justify="space-between">
                      <Checkbox>
                        <Text size={14}>Remember me</Text>
                      </Checkbox>
                      <Text size={14}>Forgot password?</Text>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button auto flat color="error" onClick={this.createAccountHandler}>
                      Create Account
                    </Button>
                    <Button auto flat color="error" onClick={this.closeHandler}>
                      Close
                    </Button>
                    <Button auto onPress={this.authCheck()}>
                      Sign in
                    </Button>
                  </Modal.Footer>
                </Modal>
                ) : ''}
                <Button 
                  onPress={this.handler}
                  light='true'
                  color="white"
                  css={{
                    color: theme.colors.red700.value,
                    '&:hover': {
                      color: theme.colors.red700.value,
                    },
                  }}
                  auto='true'
                >
                  {visible === true ? (
                    <Loading
                      color='$white'
                      size='sm'
                    />
                  ) : <FontAwesomeIcon size='xl' color={theme.colors.white.value} 
                  css={{
                    color: theme.colors.red700.value,
                      '&:hover': {
                        color: theme.colors.red700.value,
                      },
                  }} icon={faRightToBracket} />}
                </Button>
            </Navbar.Link>
            )}
          </Navbar.Content>
        </Navbar>
      )
    }
};

export default Nav;