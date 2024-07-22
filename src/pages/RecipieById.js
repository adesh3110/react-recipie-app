import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchRecipieById from '../services/fetch_recipie_by_id';
import RecipieDetaidCard from '../components/recipe_details/recipie_detail_page';
import NoDataPage from './NoDataPage';
import LoadingRecipe from '../components/recipe_details/loading_recipe';

function RecipieById() {
  const { id } = useParams();
  const [recipieDetails, setRecipieDetails] = useState({});

  useEffect(() => {
    fetchRecipieDetails(id);
  }, [id]);

  const fetchRecipieDetails = async (id) => {
    const meals = await fetchRecipieById(id);
    if (meals) {
      setRecipieDetails(meals[0]);
    } else {
      setRecipieDetails(null);
    }
  };

  if (recipieDetails == null) {
    return <NoDataPage />;
  } else if (recipieDetails.strMeal == null) {
    return <LoadingRecipe />;
  } else {
    return <RecipieDetaidCard data={recipieDetails} />;
  }
}

export default RecipieById;
