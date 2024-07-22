async function fetchRecipieByArea(area) {
  console.log(`function ${area}`);
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
  const response = await fetch(url);
  const json = await response.json();
  const data = json['meals'];
  console.log(`data ${data}`);

  return data;
}

export default fetchRecipieByArea;
