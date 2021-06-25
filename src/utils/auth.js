/**
 * @Description: user auth
 */

import defaultSettings from '@/defaultSettings'

function getToken() {
  return window.localStorage.getItem(defaultSettings.tokenKey) || null
}
function setToken(key) {
  if (!key) {
    throw Error('Token not passed in')
  }
  window.localStorage.setItem(defaultSettings.tokenKey, key)
}
function removeToken() {
  window.localStorage.removeItem(defaultSettings.tokenKey)
}

export { getToken, setToken, removeToken }
