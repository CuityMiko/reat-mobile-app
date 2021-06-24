/**
 * @Description: Method of operating local storage
 */

export function GET_KEY(key) {
  return JSON.parse(window.localStorage.getItem(key)) || null;
}
export function SET_KEY(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}
export function REMOVE_KEY(key) {
  window.localStorage.removeItem(key);
}
export function CLEAR() {
  window.localStorage.clear();
}
