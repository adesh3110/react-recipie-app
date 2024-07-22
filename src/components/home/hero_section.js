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
import fetch_meal from '../../services/fetch_meal';
import { Link, useNavigate, useRoutes } from 'react-router-dom';

function HeroSection() {
  const [suggestions, setSuggestions] = useState([]);
  const [input, setInput] = useState('');
  const navigation = useNavigate();

  const fetchSuggestion = async (input) => {
    const mealsData = await fetchRecipieSuggestion(input);
    setSuggestions(mealsData);
  };

  const onInputChange = (e) => {
    const query = e.target.value;
    setInput(query);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    navigation(`/search?q=${input}`);
  };

  useEffect(() => {
    let getData = setTimeout(() => {
      fetchSuggestion(input);
    }, 500);
    return () => clearInterval(getData);
  }, [input]);

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
          onSubmit={onFormSubmit}
          noValidate
          autoComplete='off'
          className='flex m-4'
        >
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={suggestions && suggestions.map((e) => e.strMeal)}
            value={input}
            sx={{ width: 300 }}
            onChange={(newValue) => {
              if (newValue) {
                setInput(newValue);
              }
            }}
            onInputChange={(e) => onInputChange(e)}
            renderInput={(params) => <TextField {...params} label='Meal' />}
          />
          <Button onClick={onFormSubmit} color='secondary'>
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
