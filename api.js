import { redirect } from "react-router-dom";

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

export async function chceckIfUserIsLogedIn() {
  const isLoggedIn = true;
  const response = redirect("/login");
  response.body = true;
  if (!isLoggedIn) {
    throw response;
  }
  return null;
}
