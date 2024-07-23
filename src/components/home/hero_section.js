import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Box } from '@mui/system';
import {
  Autocomplete,
  Button,
  Container,
  Grid,
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

        <Box width='100%' marginTop='10px'>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={(suggestions ?? []).map((e) => e.strMeal)}
                value={input}
                onChange={(e, value) => setInput(value)}
                onInputChange={(e, value) => setInput(value)}
                sx={{
                  'width': '100%',
                  'color': 'white',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                      borderRadius: 0,
                      color: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                      borderRadius: 0,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                      borderRadius: 0,
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'white',
                    borderRadius: 0,
                  },
                  '& .Mui-focused .MuiInputLabel-root': {
                    color: 'white',
                    borderRadius: 0,
                  },
                }}
                variant='standard'
                renderInput={(params) => <TextField {...params} label='Meal' />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                onClick={() => navigation(`/search?q=${input}`)}
                color='secondary'
                style={{
                  padding: '10px 0px',
                  borderRadius: '0',
                  background: 'white',
                  width: '100%',
                  height: '100%',
                  color: '#1876d2',
                }}
              >
                Seach
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
