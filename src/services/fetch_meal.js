async function fetch_meal(query) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(url);
  const json = await response.json();
  const mealsData = json.meals || [];
  return mealsData;
}

export default fetch_meal;
