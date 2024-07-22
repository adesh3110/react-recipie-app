import React, { useEffect, useState } from 'react';
import { getRandomRecipie } from '../services/random_recipie';
import RecipieDetaidCard from '../components/recipe_details/recipie_detail_page';

function RandomRecipie() {
  const [randonRecipie, setRandomRecipie] = useState(null);

  useEffect(() => {
    fetchRandomRecipie();
  }, []);

  const fetchRandomRecipie = async () => {
    const data = await getRandomRecipie();
    setRandomRecipie(data);
  };

  if (randonRecipie == null) {
    return <h1>Loading</h1>;
  } else {
    return <RecipieDetaidCard data={randonRecipie} />;
  }
}

export default RandomRecipie;
