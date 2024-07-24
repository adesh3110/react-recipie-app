async function fetchCategoryService() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url);
  const json = await response.json();
  const meals = json['meals'];

  const fMeal = meals.filter((meal) => {
    return meal.strCategory != 'Beef';
  });

  return fMeal;
}

export default fetchCategoryService;
