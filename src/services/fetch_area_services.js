async function fetchAreasService() {
  const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
  const data = await fetch(url);
  const json = await data.json();
  const area = json['meals'];
  return area;
}

export default fetchAreasService;
