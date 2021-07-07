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

export async function get_blogs() {
  const result = await fetch(`${BASE_URL}/blog/`);

  const json = await result.json();
  return json;
}

export async function update_blog(blog_id, blog_object) {
  let blog = JSON.stringify(blog_object);

  const result = await fetch(`${BASE_URL}/blog/update/${blog_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: blog,
  });

  const json = await result.json();
  return json;
}

export async function insert_blog(blog_object) {
  let blog = JSON.stringify(blog_object);

  const result = await fetch(`${BASE_URL}/blog/insert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: blog,
  });

  const json = await result.json();
  return json;
}
