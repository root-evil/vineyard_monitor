import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import Root from "./Root";

ReactDOM.createRoot(document.getElementById("app")).render(
  <Router>
    <Suspense fallback={<span>Загрузка...</span>}>
      <Root />
    </Suspense>
  </Router>
);
