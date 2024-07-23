import React, { useEffect, useState } from 'react';
import { getRandomRecipie } from '../services/random_recipie';
import RecipieDetaidCard from '../components/recipe_details/recipie_detail_page';
import LoadingRecipe from '../components/recipe_details/loading_recipe';
import NoDataPage from './NoDataPage';

function RandomRecipie() {
  const [randonRecipie, setRandomRecipie] = useState({});

  useEffect(() => {
    fetchRandomRecipie();
  }, []);

  const fetchRandomRecipie = async () => {
    const data = await getRandomRecipie();
    setRandomRecipie(data);
  };

  if (randonRecipie == null) {
    return <NoDataPage />;
  } else if (randonRecipie.strMeal == null) {
    return <LoadingRecipe />;
  } else {
    return <RecipieDetaidCard data={randonRecipie} />;
  }
}

export default RandomRecipie;
