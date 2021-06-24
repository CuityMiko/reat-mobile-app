/**
 * axios request configs
 * @param {String} baseURL  request url
 * @param {Object} header   request header
 * @param {Object} timeout  Timeout
 */
export default {
  baseURL: process.env.REACT_APP_BASE_API, // 请求地址
  header: { "Content-Type": "application/json;charset=UTF-8" },
  timeout: 600000,
};
