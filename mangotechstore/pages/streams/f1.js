import React, { Component } from 'react';
import { Image, Popover, Button, Text, Collapse } from '@nextui-org/react';
import styles from '../../styles/f1.module.css';

export class F1 extends Component {
  constructor(props) {
    super(props);
    this.handleCarSwitcher = this.handleCarSwitcher.bind(this);
    this.handleTeamSelect = this.handleTeamSelect.bind(this);
  }
  state = {
    team: 'Merc',
  };

  handleTeamSelect(team) {
    this.setState({ team: team });
  }

  handleCarSwitcher() {
    const { team } = this.state;
    console.log('vat team', team);

    switch (team) {
      case 'Merc':
        return (
          <div className='h-screen'>
            <div className='z-9'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-merc-blue'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/merc-w14.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'Ferrari':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-tifosi-red'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/ferrari-sf23.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'RedBull':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-redbull-blue'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/redbull-2023.webp'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'McLaren':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-mclaren-orange'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/mclaren-mcl60.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'Alpine':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-alpine-blue'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/alpine-a522.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'AlphaTauri':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-tifosi-red'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/alphaTauri-at04.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'AstonMartin':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-alpha-tauri-white'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/amr23.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'AlfaRomeo':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-romeo-red'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/alpha-c43.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'Williams':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-tifosi-red'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/fw45-williams.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      case 'Haas':
        return (
          <div className='mt-86 h-screen bg-fixed'>
            <div className='absolute z-10'>
              <Popover>
                <Popover.Trigger>
                  <Button className='bg-tifosi-red'>Click me</Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Text className='p-3'>Popover content</Text>
                </Popover.Content>
              </Popover>
              <Image
                src='/Images/alpine-a522.jpeg'
                layout='fill'
                objectFit='cover'
                quality={100}
              />
            </div>
          </div>
        );
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className='streams__f1-page'>
        {/* <Collapse.Group> */}
        <Collapse
          title='Pick your Team'
          subtitle='Pick your favorite team to see some cool stats'
        >
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
            <Button
              className='bg-merc-blue'
              onClick={() => this.handleTeamSelect('Merc')}
            >
              Mercedes
            </Button>
            <Button
              className='bg-tifosi-red'
              onClick={() => this.handleTeamSelect('Ferrari')}
            >
              Ferrari
            </Button>
            <Button
              className='bg-redbull-blue'
              onClick={() => this.handleTeamSelect('RedBull')}
            >
              Red Bull
            </Button>
            <Button
              className='bg-mclaren-orange'
              onClick={() => this.handleTeamSelect('McLaren')}
            >
              McLaren
            </Button>
            <Button
              className='bg-alpine-blue'
              onClick={() => this.handleTeamSelect('Alpine')}
            >
              Alpine
            </Button>
            <Button
              className='bg-alpha-tauri-white text-black'
              onClick={() => this.handleTeamSelect('AlphaTauri')}
            >
              Alpha Tauri
            </Button>
            <Button
              className='bg-aston-martin-green'
              onClick={() => this.handleTeamSelect('AstonMartin')}
            >
              Aston Martin
            </Button>
            <Button
              className='bg-romeo-red'
              onClick={() => this.handleTeamSelect('AlfaRomeo')}
            >
              Alfa Romeo
            </Button>
            <Button
              className='bg-tifosi-red'
              onClick={() => this.handleTeamSelect('Williams')}
            >
              Williams
            </Button>
            <Button
              className='bg-tifosi-red'
              onClick={() => this.handleTeamSelect('Haas')}
            >
              Haas
            </Button>
          </div>
        </Collapse>
        {/* </Collapse.Group> */}
        {this.handleCarSwitcher()}
      </div>
    );
  }
}

export default F1;
