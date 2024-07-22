import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function IngredientTable({ meal }) {
  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith('strIngredient'))
    .map((key) => {
      let serial = key.substring(13);
      const measureKey = `strMeasure${serial}`;
      const ingredient = meal[key];
      const measure = meal[measureKey];
      if (ingredient == null || ingredient == '') return null;
      return { ingredient, measure };
    })
    .filter((value) => value);
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Ingridient</b>
            </TableCell>
            <TableCell>
              <b>Measure</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((e, index) => {
            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell> {e.ingredient}</TableCell>
                <TableCell> {e.measure}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default IngredientTable;
