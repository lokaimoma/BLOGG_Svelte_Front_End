export async function login_user(email, password) {
    const result = await fetch(
      `http://127.0.0.1:8000/api/v0.1.0/user/login?email=${email}&password=${password}`,
      {
        method: "POST",
      }
    );

    const json = await result.json()
    return json
}