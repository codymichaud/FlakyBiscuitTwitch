import React, { Component } from 'react';
import { createClient } from 'next-sanity';
import { Link, Grid, Col, Text, Card, Image } from '@nextui-org/react';
import PropTypes from 'prop-types';

export class MySetup extends Component {
  constructor(props) {
    super(props);
    this.renderSetup = this.renderSetup.bind(this);
  }
  componentDidMount() {
    console.log('whats this', this.props.setup);
  }

  renderSetup(setup) {
    // console.log('whats this game', this.props.setup)
    return (
      <Grid size={6}>
        <Card
          css={{ background: 'rgba(0,0,0,0.7)', height: '650px' }}
          className='shadow-md shadow-indigo-500/50'
        >
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={25}
                weight='bold'
                transform='uppercase'
                color='#ffffffAA'
              >
                Stats
              </Text>
              <div size={20} weight='bold'>
                <div>
                  <ul className='list-none'>
                    <li>
                      <p className='font-bold'>CPU: {setup[0].pcCPU}</p>
                    </li>
                    <li>
                      <p className='font-bold'>
                        Motherboard: {setup[0].pcMotherboard}
                      </p>
                    </li>
                    <li>
                      <p className='font-bold'>GPU: {setup[0].pcGPU}</p>
                    </li>
                    <li>
                      <p className='font-bold'>Cooler: {setup[0].pcCooler}</p>
                    </li>
                    <li>
                      <p className='font-bold'>Case: {setup[0].pcCase}</p>
                    </li>
                    <li>
                      <p className='font-bold'>RAM: {setup[0].pcRAM}</p>
                    </li>
                    <li>
                      <p className='font-bold'>
                        Power Supply: {setup[0].pcPowerSupply}
                      </p>
                    </li>
                    <li>
                      <p className='font-bold'>Storage: {setup[0].pcStorage}</p>
                    </li>
                    <li>
                      <p className='font-bold'>Fans: {setup[0].pcFans}</p>
                    </li>
                    <li>
                      <p className='font-bold'>
                        Monitors: {setup[0].pcMonitors}
                      </p>
                    </li>
                    <li>
                      <p className='font-bold'>
                        Keyboard: {setup[0].pcKeyboard}
                      </p>
                    </li>
                    <li>
                      <p className='font-bold'>Mouse: {setup[0].pcMouse}</p>
                    </li>
                    <li>
                      <p className='font-bold'>Headset: {setup[0].pcHeadset}</p>
                    </li>
                    <li>
                      <p className='font-bold'>Mic: {setup[0].pcMic}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Card.Header>
        </Card>
      </Grid>
    );
  }

  render() {
    return (
      <div className='h-screen'>
        <div className='absolute z-9'>
          <Image
            src='https://wallpapers.com/images/hd/pc-gaming-setup-rgb-4k-ft1ym37yjyb7lp19.jpg'
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </div>
        <Grid.Container lg={4} gap={2}>
          {this.renderSetup(this.props.setup)}
        </Grid.Container>
      </div>
    );
  }
}

export default MySetup;

MySetup.propTypes = {
  setup: PropTypes.array.isRequired,
};

const client = createClient({
  projectId: 'fm96vt2j',
  dataset: 'production',
  apiVersion: '2023-01-06',
  useCdn: false,
});

export async function getStaticProps() {
  const setup = await client.fetch(`*[_type == "pcSpecs"]`);

  return {
    props: {
      setup,
    },
  };
}
