/**
 * @Description: base routing middleware
 */
import { getToken } from "@utils/auth";
/**
 * middleware params
 * @param currentRoute { Object } current route
 * @param cuurentProps { Object }  current component props
 */
export default function baseMiddleware(currentRoute, cuurentProps) {
  if (!currentRoute) {
    return;
  }
  const { history } = cuurentProps;
  const { meta } = currentRoute.route;
  // set page title
  window.document.title = meta.title || process.env.REACT_APP_PROJECT_NAME;
  // login auth
  if (!meta.auth) {
    return;
  }
  const token = getToken();
  if (token) {
    console.log("进入页面，获取数据");
  } else {
    history.push("/app/login");
  }
}
