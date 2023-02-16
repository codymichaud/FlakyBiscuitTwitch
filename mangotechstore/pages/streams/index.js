import { React, useCallback } from "react";
import { createClient } from 'next-sanity';
import { Link, Grid, Col, Text, Card, Image } from "@nextui-org/react";
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';


export default function Streams({ games }) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    console.log('whats this', games)

    const renderStreamBoxes = (game) => {
        
            console.log('whats this game', game)
            return (
                <Grid.Container lg={12} gap={2}>
                    <Grid xs={12} sm={12}>
                        <Link href={`/streams/${game.firstGameHref}`}>
                            <Card className='shadow-md shadow-indigo-500/50'>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                <Col>
                                    <Text size={25} weight="bold" transform="uppercase" color="#ffffffAA">
                                    {game.firstGameTitle}
                                    </Text>
                                </Col>
                                </Card.Header>
                                <Image
                                src={game.firstGameImgLink}
                                showSkeleton
                                objectFit="cover"
                                width="100%"
                                height={340}
                                alt="Card image background"
                                />
                            </Card>
                        </Link>
                    </Grid>
                </Grid.Container>
            );
    }
        return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 240,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
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
                        color: {
                            value: "#7300e6",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
                /> 
            <div justify='center' className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-auto">
               {games.map(game => renderStreamBoxes(game))}
            </div>
        </div>
    )
}

const client = createClient({
    projectId: 'fm96vt2j',
    dataset: 'production',
    apiVersion: '2023-01-06',
    useCdn: false,
  });
  
  export async function getStaticProps() {
    const games = await client.fetch(`*[_type == "streamGames"]`);
  
    return {
      props: {
        games,
      }
    }
  }