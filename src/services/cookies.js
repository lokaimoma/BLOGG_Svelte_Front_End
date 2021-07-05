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
  return getCookies._key;
}
