import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
import React from "react";
// import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'

export default function LoggedInAvatar() {
    const userName = 'Cody M';
    const userEmail = 'cody@ascendcohealth.com';
    const  { theme } = useTheme();
    // const { setTheme } = useNextTheme();
    const [mounted, setMounted] = React.useState(false);
    const { isDark, type } = useTheme();
  return (
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
  );
}
