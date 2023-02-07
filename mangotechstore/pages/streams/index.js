import React from "react";
import { createClient } from 'next-sanity';
import { Link, Grid, Col, Text, Card } from "@nextui-org/react";

export default function Streams({ firstStream }) {
    console.log('whats this', firstStream[0])

    const renderStreamBoxes = () => {

        return (
                <Card>
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                    <Col>
                        <Text size={25} weight="bold" transform="uppercase" color="#ffffffAA">
                        {firstStream[0].firstGameTitle}
                        </Text>
                    </Col>
                    </Card.Header>
                    <Card.Image
                    src='/Images/f1-2022.jpg'
                    objectFit="cover"
                    width="100%"
                    height={340}
                    alt="Card image background"
                    />
                </Card>
        );
    }
        return (
            <div>
               <Grid.Container gap={2} justify="center">
                        <Grid xs={12} sm={4}>
                           {renderStreamBoxes()}
                        </Grid>
                        <Grid xs={12} sm={4}>
                            {renderStreamBoxes()}
                        </Grid>
                        <Grid xs={12} sm={4}>
                            {renderStreamBoxes()}
                        </Grid>

                </Grid.Container>
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
    const firstStream = await client.fetch(`*[_type == "firstStreamBox"]`);
  
    return {
      props: {
        firstStream,
      }
    }
  }