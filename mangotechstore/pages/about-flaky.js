import { Input, Link, Text, Card } from '@nextui-org/react';
import React, { Component } from 'react';
import Nav from '../components/Nav';



export default function AboutFlaky() {
  const [discordMessage, setDiscordMessage] = React.useState('');

  // console.log(process.env.NEXT_PUBLIC_DISCORD_TOKEN);

  const handleDiscordBotInput = (message) => {
    console.log('check this message', message);
    setDiscordMessage(message);
  }

    return (
      <div>
        
      </div>
    );
}

