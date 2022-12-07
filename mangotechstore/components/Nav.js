import styles from '../styles/Home.module.css'
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
    const [loggedIn, setLoggedIn] = React.useState(true);
    const branding = 'Mango Tech Store';
    const  { theme } = useTheme();
    const [visible, setVisible] = React.useState(false);
    const userName = 'Cody M';
    const userEmail = 'cody@ascendcohealth.com';
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

    return (
        <Navbar
        maxWidth='fluid' 
        variant={variant}
        css={{
          borderBottom: '2px solid transparent',
          borderImage: `linear-gradient(0.25turn, ${theme.colors.purple600.value}, ${theme.colors.pink600.value}, ${theme.colors.blue600.value})`,
          borderImageSlice: 1,
        }}
        // border: '$space$1 solid transparent',
      >
        
        <Navbar.Brand className={styles.navBrand}>
          <Text h1
            size={30}
            css={{
              textGradient: `45deg, ${theme.colors.purple600.value} 40%, ${theme.colors.pink600.value} 70%, ${theme.colors.blue600.value} 90%`,
            }}
            weight="bold"
            b color="inherit" 
            hideIn="xs"
          >
          <FontAwesomeIcon
           icon={faComputer} 
           size='lg'
           className='fa-spinner'
           css={{
            animationDuration: '2s',
           }}
          /> {branding}
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
                  color: theme.colors.blue800.value,
                  height: '$12', // space[12]
                //   boxShadow: '$md', // shadows.md
                  '&:hover': {
                    color: theme.colors.purple400.value,
                  },
                  '&:active': {
                    background: theme.colors.pink200.value,
                  },
                  '&:focus': {
                    borderColor: theme.colors.pink600.value,
                  },
                }}
                // iconRight={icons.chevron}
                ripple={false}
              >
                Products
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
                Core Components
                </Dropdown.Item>
                <Dropdown.Item
                key="storage"
                >
                Storage Devices
                </Dropdown.Item>
                <Dropdown.Item
                key="accessories"
                >
                Accessories
                </Dropdown.Item>
                <Dropdown.Item
                key="refurbished"
                >
                Refurbished
                </Dropdown.Item>
                <Dropdown.Item
                key="networking"
                >
                Networking
                </Dropdown.Item>
              <Dropdown.Item
                key="gaming"
              >
                Gaming
              </Dropdown.Item>
              <Dropdown.Item
                key="electronics"
              >
                Electronics
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
              color: theme.colors.blue800.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
                '&:hover': {
                color: theme.colors.pink800.value,
                },
                '&:active': {
                background: theme.colors.pink200.value,
                },
                '&:focus': {
                borderColor: theme.colors.pink400.value,
                },
            }}
          >
            Best Sellers
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
              color: theme.colors.blue800.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
                '&:hover': {
                color: theme.colors.pink800.value,
                },
                '&:active': {
                background: theme.colors.pink200.value,
                },
                '&:focus': {
                borderColor: theme.colors.pink400.value,
                },
            }}
          >
            All Products
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
              color: theme.colors.blue800.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
                '&:hover': {
                color: theme.colors.pink800.value,
                },
                '&:active': {
                background: theme.colors.pink200.value,
                },
                '&:focus': {
                borderColor: theme.colors.pink400.value,
                },
            }}
          >
            Computer Systems
          </Navbar.Link>
        </Navbar.Content>
        <Switch
            checked={isDark}
            shadow
            size='lg'
            iconOn={<FontAwesomeIcon icon={faMoon} />}
            iconOff={<FontAwesomeIcon icon={faSun} />}
            color={isDark ? 'secondary' : '$white600'}
            onChange={(e) => {
                    console.log('checking e', e)
                    setTheme(e.target.checked === true ? 'dark' : 'light')
                }
            }
            css={{
            marginRight: '20px',
            marginLeft: '-130px',
            color: isDark ? theme.colors.secondary.value : '$white600'
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
                color: theme.colors.blue800.value,
                height: '$12', // space[12]
                dropShadow: '$lg',
                  '&:hover': {
                  color: theme.colors.pink800.value,
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
                        <Dropdown.Item key="logout" color="error" withDivider>
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
              onPress={handler}
              css={{
                px: 0,
                dflex: "center",
                svg: { pe: "none" },
                // borderRadius: '$xs', // radii.xs
                // border: '$space$1 solid transparent',
                color: theme.colors.blue800.value,
                height: '$12', // space[12]
                dropShadow: '$lg',
                  '&:hover': {
                  color: theme.colors.pink800.value,
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
              >
                <Modal.Header>
                  <Text id="modal-title" size={18}>
                    Welcome to
                    <Text b size={18}>
                      Mango Tech Store
                    </Text>
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Email"
                  />
                  <Input
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
                  <Button auto onClick={closeHandler}>
                    Sign in
                  </Button>
                </Modal.Footer>
              </Modal>
              ) : ''}
              <FontAwesomeIcon size='xl' icon={faRightToBracket} />
          </Navbar.Link>
          )}
          <Navbar.Link 
            isActive
            color='inherit' 
            href='#'
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: theme.colors.blue800.value,
              height: '$12', // space[12]
              dropShadow: '$lg',
              '&:hover': {
                color: theme.colors.pink800.value,
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