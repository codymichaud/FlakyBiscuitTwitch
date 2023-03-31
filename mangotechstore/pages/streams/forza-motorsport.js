import React, { Component } from 'react';
import { Image, Text } from '@nextui-org/react';

export class ForzaMotorsport extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='h-screen bg-fixed'>
          <div className='absolute z-9 bg-fixed'>
            <Image
              src='/Images/forza-motorsport.jpeg'
              layout='fill'
              objectFit='cover'
              quality={100}
            />
          </div>
          <div className='z-10 flex place-content-center'>
            <div className='mt-36 absolute'>
              <Text className='text-6xl font-bold text-white uppercase'>
                Coming 2023
              </Text>
            </div>
          </div>
        </div>
        {/* <div className="mt-86 h-screen bg-fixed">
                    <div className="absolute z-10">
                        <h1>
                            DO dis show
                        </h1>
                        {/* <Image 
                            src='/Images/ferrari-sf23.jpeg'
                            layout='fill'
                            objectFit='cover'
                            quality={100}
                        /> 
                    </div>
                </div> */}
      </div>
    );
  }
}

export default ForzaMotorsport;
