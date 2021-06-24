/**
 * @Description: user auth
 */

const TokenKey = "rrtoken";

function getToken() {
  return window.localStorage.getItem(TokenKey) || null;
}
function setToken(key) {
  if (!key) {
    throw Error("Token not passed in");
  }
  window.localStorage.setItem(TokenKey, key);
}
function removeToken() {
  window.localStorage.removeItem(TokenKey);
}

export { getToken, setToken, removeToken };
