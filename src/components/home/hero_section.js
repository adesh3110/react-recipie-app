import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Box } from '@mui/system';
import {
  Autocomplete,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import fetchRecipieSuggestion from '../../services/fetch_suggestion_recipie';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigation = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    let getData = setTimeout(() => {
      fetchSuggestion(input);
    }, 500);
    return () => clearInterval(getData);
  }, [input]);

  const fetchSuggestion = async (input) => {
    const mealsData = await fetchRecipieSuggestion(input);
    setSuggestions(mealsData);
  };

  return (
    <Box
      py={16}
      style={{
        backgroundColor: '#1876d2',
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
            sequence={['BreakFast', 1000, 'Lunch', 2000, 'Dinner', 3000]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
            className=''
          />
        </Typography>

        <Box
          component='form'
          noValidate
          autoComplete='off'
          className='flex m-4'
          display='flex'
          width='100%'
          marginTop='10px'
        >
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={(suggestions ?? []).map((e) => e.strMeal)}
            value={input}
            sx={{ width: '70%' }}
            onChange={(e, value) => setInput(value)}
            onInputChange={(e, value) => setInput(value)}
            renderInput={(params) => <TextField {...params} label='Meal' />}
          />
          <Button
            onClick={() => navigation(`/search?q=${input}`)}
            color='secondary'
            style={{ background: 'violet', width: '20%', marginLeft: '10px' }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
