import { Image, Button, Text } from '@nextui-org/react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import { Component, React, useCallback } from 'react';
import Link from 'next/link';
import styles from '../styles/404.module.css';

export class NotFound extends Component {
  constructor(props) {
    super(props);
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }
  particlesInit = engine => {
    console.log(engine);
    loadStarsPreset(engine);
  };

  particlesLoaded = container => {
    console.log(container);
  };

  render() {
    const options = {
      preset: 'stars',
    };
    return (
      <div
        css={{
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <Particles
          id='tsparticles'
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={{
            background: {
              color: {
                value: '#000000',
                opacity: 1,
              },
            },
            backgroundMask: {
              composite: 'destination-out',
              cover: {
                color: {
                  value: '#ffffff',
                },
                opacity: 1,
              },
              enable: false,
            },
            delay: 0,
            duration: 0,
            fpsLimit: 120,
            fullScreen: {
              enable: true,
              zIndex: 0,
            },
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: [],
                },
                onDiv: {
                  enable: false,
                  mode: [],
                  selectors: [],
                  type: 'circle',
                },
                onHover: {
                  enable: false,
                  mode: [],
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              collisions: {
                enable: false,
                mode: 'bounce',
                absorb: {
                  speed: 2,
                },
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: '#ffffff',
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  mode: 'percent',
                  radius: 0,
                  x: 50,
                  y: 50,
                },
                decay: 0,
                direction: 'none',
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                outModes: {
                  default: 'out',
                  bottom: 'out',
                  left: 'out',
                  right: 'out',
                  top: 'out',
                },
                path: {
                  clamp: true,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                  },
                  enable: false,
                },
                random: true,
                size: false,
                speed: 0.01,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: false,
                },
                value: 350,
              },
              opacity: {
                animation: {
                  count: 0,
                  decay: 0,
                  destroy: 'none',
                  enable: true,
                  speed: 1,
                  startValue: 'random',
                  sync: false,
                },
                value: {
                  min: 0,
                  max: 1,
                },
              },
              reduceDuplicates: false,
              shape: {
                type: 'circle',
              },
              size: {
                animation: {
                  count: 0,
                  decay: 0,
                  destroy: 'none',
                  enable: false,
                  speed: 5,
                  startValue: 'random',
                  sync: false,
                },
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className='mt-40'>
          <div className='row flex content-center items-center'>
            <Image src='/Images/deathstar-edited-2.png' />
          </div>
          <div className='mt-5 flex place-content-center'>
            <Text h1 color='warning' className='z-50 text-8xl'>
              404
            </Text>
          </div>
          <div className='mt-5 flex place-content-center'>
            <Text color='warning' className='z-50'>
              Uh Oh! That page was lost in space!
            </Text>
          </div>
          <div className='mt-10 flex place-content-center'>
            <Button bordered rounded color='secondary' href='/'>
              <Link href='/'>Fly Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
