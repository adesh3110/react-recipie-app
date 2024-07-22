async function fetchRecipieById(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const json = await response.json();
  const data = json['meals'];

  return data;
}

export default fetchRecipieById;
