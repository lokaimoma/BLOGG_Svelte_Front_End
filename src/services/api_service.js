const BASE_URL = "http://127.0.0.1:8000/api/v0.1.0";

export async function login_user(email, password) {
  const result = await fetch(
    `${BASE_URL}/user/login?email=${email}&password=${password}`,
    {
      method: "POST",
    }
  );

  const json = await result.json();
  return json;
}

export async function register_user(username, email, password) {
  const body = { username, email, password };
  const result = await fetch(`${BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await result.json();
  return json;
}
