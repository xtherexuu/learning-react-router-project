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

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  return data;
}

export async function chceckIfUserIsLogedIn(request) {
  const path = new URL(request.url).pathname;
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"));
  const response = redirect(
    `/login?message=Sorry, you have to log in before you go on that page!&redirectTo=${path}`
  );
  response.body = true;
  if (!isLoggedIn) {
    throw response;
  }
  return null;
}
