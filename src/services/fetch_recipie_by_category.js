async function recipieByCategory(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

  const response = await fetch(url);
  const json = await response.json();
  const meals = json['meals'];
  return meals;
}

export default recipieByCategory;
