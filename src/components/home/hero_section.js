import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';

function HeroSection() {
  return (
    <Box
      py={16}
      style={{
        backgroundColor: '#b041c3',
      }}
    >
      <Container>
        <Typography
          variant='h1'
          component='h2'
          color='white'
          className='animate__animated animate__zoomIn'
        >
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
        </Typography>
      </Container>
    </Box>
  );
}

export default HeroSection;
