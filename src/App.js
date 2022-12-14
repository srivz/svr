import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./components/assets/css/index.css";
import Home from "./components/Home";
import OurTeam from "./components/OurTeam";
import PracticeArea from "./components/PracticeArea";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}></Route>
        <Route
          path="/ourTeam"
          element={<OurTeam />}></Route>
        <Route
          path="/practiceArea"
          element={<PracticeArea />}></Route>
      </Routes>
    </Router>
  );
}

// (node:9732) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// (node:9732) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please
// use the 'setupMiddlewares' option.
