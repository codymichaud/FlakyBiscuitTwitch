import React from "react";
import { createClient } from 'next-sanity';
import { Link, Grid, Col, Text, Card } from "@nextui-org/react";

export default function Streams({ games }) {
    console.log('whats this', games)

    const renderStreamBoxes = (game) => {
        
            console.log('whats this game', game)
            return (
                <Grid.Container lg={12} gap={2}>
                    <Grid xs={12} sm={12}>
                        <Card>
                            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                            <Col>
                                <Text size={25} weight="bold" transform="uppercase" color="#ffffffAA">
                                {game.firstGameTitle}
                                </Text>
                            </Col>
                            </Card.Header>
                            <Card.Image
                            src={game.firstGameImgLink}
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                            />
                        </Card>
                    </Grid>
                </Grid.Container>
            );
    }
        return (
            <div className="grid grid-cols-3">
               {games.map(game => renderStreamBoxes(game))}
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