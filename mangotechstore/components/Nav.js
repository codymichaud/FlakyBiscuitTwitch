import styles from '../styles/Home.module.css'
import { Navbar, Dropdown, Button, Link, Text, Container, createTheme } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, 
    faCartShopping, 
    faRightToBracket,
    faRightFromBracket, 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'
import DarkModeToggler from '../components/DarkModeToggler';

export default function Nav() {
    const [variant, setVariant] = React.useState("static");
    const [loggedIn, setLoggedIn] = React.useState(false);
    const branding = 'Mango Tech Store';
    const  { theme } = useTheme();
    const { setTheme } = useNextTheme();
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
                dropShadow: '$lg',
                  '&:hover': {
                    background: theme.colors.pink100.value,
                    color: theme.colors.pink800.value,
                  },
                  '&:active': {
                    background: theme.colors.pink200.value,
                  },
                  '&:focus': {
                    borderColor: theme.colors.pink400.value,
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
                background: theme.colors.pink100.value,
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
                background: theme.colors.pink100.value,
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
                background: theme.colors.pink100.value,
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
        <DarkModeToggler />
        <Navbar.Content>
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
                background: theme.colors.pink100.value,
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
            {loggedIn ? <FontAwesomeIcon size='xl' icon={faRightFromBracket} /> : <FontAwesomeIcon size='xl' icon={faRightToBracket} /> }
          </Navbar.Link>
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
                background: theme.colors.pink100.value,
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