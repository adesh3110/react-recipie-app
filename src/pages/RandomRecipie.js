import React, { useEffect, useState } from 'react';
import { getRandomRecipie } from '../services/random_recipie';
import RecipieDetaidCard from '../components/recipe_details/recipie_detail_page';
import LoadingRecipe from '../components/recipe_details/loading_recipe';
import NoDataPage from './NoDataPage';

function RandomRecipie() {
  const [randomRecipie, setRandomRecipie] = useState({});

  useEffect(() => {
    fetchRandomRecipie();
  }, []);

  const fetchRandomRecipie = async () => {
    const data = await getRandomRecipie();
    setRandomRecipie(data);
  };

  if (randomRecipie == null) {
    return <NoDataPage />;
  } else if (randomRecipie.strMeal == null) {
    return <LoadingRecipe />;
  } else {
    return <RecipieDetaidCard data={randomRecipie} />;
  }
}

export default RandomRecipie;
