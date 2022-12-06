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
          borderImage: 'linear-gradient(0.25turn, $purple600, $pink600, $blue600)',
          borderImageSlice: 1,
        }}
        // border: '$space$1 solid transparent',
      >
        
        <Navbar.Brand className={styles.navBrand}>
          <Text h1
            size={30}
            css={{
              textGradient: "45deg, $purple600 40%, $pink600 70%, $blue600 90%",
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
          {/* <Navbar.Link href="#">Products</Navbar.Link> */}
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
                  color: '$blue800',
                  height: '$12', // space[12]
                  boxShadow: '$md', // shadows.md
                  '&:hover': {
                    background: '$pink100',
                    color: '$pink800',
                  },
                  '&:active': {
                    background: '$pink200',
                  },
                  '&:focus': {
                    borderColor: '$pink400',
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
              css={{
                $$dropdownMenuWidth: "340px",
                $$dropdownItemHeight: "70px",
                "& .nextui-dropdown-item": {
                  py: "$4",
                  // dropdown item left icon
                  svg: {
                    color: "$secondary",
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
                key="autoscaling"
                showFullDescription
                description="ACME scales apps to meet user demand, automagically, based on load."
                // icon={icons.scale}
              >
                PC Parts
              </Dropdown.Item>
              <Dropdown.Item
                key="usage_metrics"
                showFullDescription
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              >
                Brands
              </Dropdown.Item>
              <Dropdown.Item
                key="production_ready"
                showFullDescription
                description="ACME runs on ACME, join us and others serving requests at web scale."
              >
                Accessories
              </Dropdown.Item>
              <Dropdown.Item
                key="99_uptime"
                showFullDescription
                description="Applications stay on the grid with high availability and high uptime guarantees."
              >
                Computers
              </Dropdown.Item>
              <Dropdown.Item
                key="supreme_support"
                showFullDescription
                description="Overcome any challenge with a supporting team ready to respond."
              >
                Networking
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
              color: '$blue800',
              height: '$12', // space[12]
              boxShadow: '$md', // shadows.md
              '&:hover': {
                background: '$pink100',
                color: '$pink800',
              },
              '&:active': {
                background: '$pink200',
              },
              '&:focus': {
                borderColor: '$pink400',
              },
            }}
          >
            Service and Repair
          </Navbar.Link>
          <Navbar.Link 
            href="#"
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: '$blue800',
              height: '$12', // space[12]
              boxShadow: '$md', // shadows.md
              '&:hover': {
                background: '$pink100',
                color: '$pink800',
              },
              '&:active': {
                background: '$pink200',
              },
              '&:focus': {
                borderColor: '$pink400',
              },
            }}
          >
            All Products
          </Navbar.Link>
          <Navbar.Link
            href="#"
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: '$blue800',
              height: '$12', // space[12]
              boxShadow: '$md', // shadows.md
              '&:hover': {
                background: '$pink100',
                color: '$pink800',
              },
              '&:active': {
                background: '$pink200',
              },
              '&:focus': {
                borderColor: '$pink400',
              },
            }}
          >
            Company
          </Navbar.Link>
        </Navbar.Content>
        <DarkModeToggler />
        <Navbar.Content>
          <Navbar.Link 
            color="inherit" 
            href="#"
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: '$blue800',
              height: '$12', // space[12]
              boxShadow: '$md', // shadows.md
              '&:hover': {
                background: '$pink100',
                color: '$pink800',
              },
              '&:active': {
                background: '$pink200',
              },
              '&:focus': {
                borderColor: '$pink400',
              },
            }}
          >
            {loggedIn ? <FontAwesomeIcon size='xl' icon={faRightFromBracket} /> : <FontAwesomeIcon size='xl' icon={faRightToBracket} /> }
          </Navbar.Link>
          <Navbar.Link
            color='inherit' 
            href='#'
            css={{
              px: 0,
              dflex: "center",
              svg: { pe: "none" },
              // borderRadius: '$xs', // radii.xs
              // border: '$space$1 solid transparent',
              color: '$blue800',
              height: '$12', // space[12]
              boxShadow: '$md', // shadows.md
              '&:hover': {
                background: '$pink100',
                color: '$pink800',
              },
              '&:active': {
                background: '$pink200',
              },
              '&:focus': {
                borderColor: '$pink400',
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