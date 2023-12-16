export async function fetchData(link) {
  const response = await fetch(link);
  if (!response.ok) {
    throw {
      message: "there was an error in fetching data!",
      status: response.status,
      statusText: response.statusText,
    };
  }
  const data = await response.json();
  return data;
}
