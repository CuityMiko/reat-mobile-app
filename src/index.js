import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./router";
import "./styles";

ReactDOM.render(<AppRoutes />, document.getElementById("app"));

// yarn add redux react-redux redux-thunk

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import AppRoutes from "./router";
// import store from "./store";
// import "./styles";

// ReactDOM.render(
//   <Provider store={store}>
//     <AppRoutes />
//   </Provider>,
//   document.getElementById("app")
// );
