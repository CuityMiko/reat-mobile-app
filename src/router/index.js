import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import baseRoutes from "./modules/app";
import appRoutes from "./modules/base";

export default function AppRoutes() {
  return (
    <Router>
      {renderRoutes(appRoutes)}
      {renderRoutes(baseRoutes)}
    </Router>
  );
}
