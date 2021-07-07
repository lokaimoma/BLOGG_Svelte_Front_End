export function getCookies() {
  let cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    );
  return cookies;
}

export function getCookie(_key) {
  const cookies = getCookies();
  return cookies[_key];
}

export function delete_cookies() {
  document.cookie = "email=";
  document.cookie = "id=";
  document.cookie = "username=";
}
