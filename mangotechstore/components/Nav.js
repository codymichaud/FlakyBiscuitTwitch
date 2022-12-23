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
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, 
    faCartShopping, 
    faRightToBracket,
    faRightFromBracket,
    faMoon,
    faSun, 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react';

export default function Nav() {
    const [variant, setVariant] = React.useState("static");
    const [loggedIn, setLoggedIn] = React.useState(false);
    const branding = 'Spit Roast GanG';
    const  { theme } = useTheme();
    const [visible, setVisible] = React.useState(false);
    const [userEmail, setUserEmail] = React.useState('');
    const [userPass, setUserPass] = React.useState('');
    const userName = 'Cody M';
    const testEmail = 'FlakyBiscuit';
    const testPass = '123456';
    const { setTheme } = useNextTheme();
    const [mounted, setMounted] = React.useState(false);
    const { isDark, type } = useTheme();

    React.useEffect(() => { setMounted(true) }, []);

    if (!mounted) return <></>;

    console.log('checking theme', isDark, type, setTheme);
    const handler = () => {
      setVisible(true);
      console.log('opened!')
    };

    const closeHandler = () => {
      setVisible(false);
      console.log('closed');
    };

    const logout = () => {
      if (loggedIn === true) {
        setLoggedIn(false);
        console.log('logging out');
      }
    }

    const authLogin = (key, value) => {
      if (key === 'email') {
        console.log('email', value);
        setUserEmail(value);
      } else if (key === 'password') {
        console.log('password', value);
        setUserPass(value);
      }
    }

    const authCheck = () => {
      console.log('checking email and checking password', userEmail,  userPass)
      if (userEmail === testEmail && userPass === testPass) {
        setLoggedIn(true);
        console.log('logged in');
      }
      setVisible(false);
    }

    return (
        <Navbar
        maxWidth='fluid' 
        variant={variant}
        css={{
          borderBottom: '1px solid $gray50',
        }}
        // border: '$space$1 solid transparent',
      >
        
        <Navbar.Brand className={styles.navBrand}>
          <Text h1
            size={30}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
            b color="inherit" 
            hideIn="xs"
          > {branding}
          </Text>
        </Navbar.Brand>
        <Navbar.Content className={styles.container} hideIn="xs">
          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                  // borderRadius: '$xs', // radii.xs
                  // border: '$space$1 solid transparent',
                  color: theme.colors.purple500.value,
                  height: '$12', // space[12]
                //   boxShadow: '$md', // shadows.md
                  '&:hover': {
                    color: theme.colors.purple700.value,
                  },
                  '&:active': {
                    background: theme.colors.pink200.value,
                  },
                  '&:focus': {
                    borderColor: theme.colors.pink600.value,
                  },
                }}
                // iconRight={icons.chevron}
                ripple={true}
              >
                Streams
              </Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="ACME features"
              isVirtualized
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: theme.colors.secondary.value,
                    mr: "$4",
                },
                // dropdown item title
                "& .nextui-dropdown-item-content": {
                    w: "100%",
                    fontWeight: "$semibold",
                },
            },
        }}
            >
                <Dropdown.Item
                key="core_components"
                >
                Rocket League
                </Dropdown.Item>
                <Dropdown.Item
                key="storage"
                >
                Overwatch 2
                </Dropdown.Item>
                <Dropdown.Item
                key="accessories"
                >
                Call of Duty
                </Dropdown.Item>
                <Dropdown.Item
                key="refurbished"
                >
                Destiny
                </Dropdown.Item>
                <Dropdown.Item
                key="networking"
                >
                Gang Beasts
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link 
            isActive 
            href="#"
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.purple500.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
                '&:hover': {
                  color: theme.colors.purple700.value,
                },
                '&:active': {
                background: theme.colors.pink200.value,
                },
                '&:focus': {
                borderColor: theme.colors.pink400.value,
                },
            }}
          >
            The GanG
          </Navbar.Link>
          <Navbar.Link  
            isActive
            href="#"
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.purple500.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
                '&:hover': {
                  color: theme.colors.purple700.value,
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
            href="/our-setups"
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.purple500.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
                '&:hover': {
                  color: theme.colors.purple700.value,
                },
                '&:active': {
                background: theme.colors.pink200.value,
                },
                '&:focus': {
                borderColor: theme.colors.pink400.value,
                },
            }}
          >
            Our Setups
          </Navbar.Link>
        </Navbar.Content>
        <Switch
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
            marginRight: '20px',
            marginLeft: '-130px',
            color: isDark ? theme.colors.purple500.value : '$white600'
            }}
        />
        <Navbar.Content>
          {loggedIn ? (
          <Navbar.Link  
              isActive
              color="inherit" 
              href="#"
              css={{
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
                // borderRadius: '$xs', // radii.xs
                // border: '$space$1 solid transparent',
                color: theme.colors.purple500.value,
                height: '$12', // space[12]
                dropShadow: '$lg',
                  '&:hover': {
                    color: theme.colors.purple700.value,
                  },
                  '&:active': {
                  background: theme.colors.pink200.value,
                  },
                  '&:focus': {
                  borderColor: theme.colors.pink400.value,
                  },
              }}
            >
               
               <Grid.Container justify="flex-start" gap={1}>
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
                        <Dropdown.Item onPress={logout} key="logout" color="error" withDivider>
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
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
                // borderRadius: '$xs', // radii.xs
                // border: '$space$1 solid transparent',
                color: theme.colors.purple500.value,
                height: '$12', // space[12]
                dropShadow: '$lg',
                  '&:hover': {
                    color: theme.colors.purple700.value,
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
                onClose={closeHandler}
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
                    onChange={(e) => authLogin('email', e.target.value)}
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                  />
                  <Input
                    onChange={(e) => authLogin('password', e.target.value)}
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
                  <Button auto flat color="error" onClick={closeHandler}>
                    Close
                  </Button>
                  <Button auto onPress={authCheck}>
                    Sign in
                  </Button>
                </Modal.Footer>
              </Modal>
              ) : ''}
              <Button 
                onPress={handler}
                light
                color="secondary"
                css={{
                  color: theme.colors.purple500.value,
                  '&:hover': {
                    color: theme.colors.purple700.value,
                  },
                }}
                auto
              >
                {visible === true ? (
                  <Loading
                    color='secondary'
                    size='sm'
                  />
                ) : <FontAwesomeIcon size='xl' icon={faRightToBracket} />}
              </Button>
          </Navbar.Link>
          )}
          <Navbar.Link 
            isActive
            href='#'
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.purple500.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
              '&:hover': {
                color: theme.colors.purple700.value,
              },
              '&:active': {
                background: theme.colors.pink200.value,
              },
              '&:focus': {
                borderColor: theme.colors.pink400.value,
              },
            }}
          >
            <FontAwesomeIcon
             icon={faCartShopping}
             size='lg'
            />
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    )
}