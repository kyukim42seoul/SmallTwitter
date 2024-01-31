export const getCookieValueByName = (cookieName) => {
  const cookies = document.cookie.split(";");
  const targetValue = cookies.map((cookie) => {
    const [key, value] = cookie.split("=");
    if (key === cookieName) {
      return value;
    }
  });
  return targetValue[0];
};
