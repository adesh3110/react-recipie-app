import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRecipieById from '../services/fetch_recipie_by_id';
import RecipieDetaidCard from '../components/recipe_details/recipie_detail_page';
import NoDataPage from './NoDataPage';

function RecipieById() {
  const { id } = useParams();
  const [recipieDetails, setRecipieDetails] = useState([]);
  const [emptyData, setEmptyData] = useState(false);

  useEffect(() => {
    fetchRecipieDetails(id);
  }, [id]);

  const fetchRecipieDetails = async (id) => {
    const meals = await fetchRecipieById(id);
    if (meals) {
      setRecipieDetails(meals[0]);
    } else {
      setEmptyData(true);
    }
  };

  return (
    <>
      {emptyData ? <NoDataPage /> : <RecipieDetaidCard data={recipieDetails} />}
    </>
  );
}

export default RecipieById;
