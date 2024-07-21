import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Box } from '@mui/system';

function HeroSection() {
  return (
    <Box
      height='30vh'
      style={{
        backgroundColor: '#c1c1c1',
      }}
    >
      <h2 className='text-white text-4xl font-bold animate__animated animate__zoomIn'>
        Make Delicious :{' '}
        <TypeAnimation
          sequence={[
            'BreakFast',
            1000,
            'Lunch',
            2000,
            'Dinner',
            3000,

            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
          className=''
        />
      </h2>
    </Box>
  );
}

export default HeroSection;
