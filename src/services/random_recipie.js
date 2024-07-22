async function getRandomRecipie() {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(url);
  const json = await response.json();
  const data = json['meals'][0];
  return data;
}

export { getRandomRecipie };
