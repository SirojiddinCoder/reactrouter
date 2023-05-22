import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Data from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>  
      <Data>
        <App />
      </Data>
    </Router>
  </React.StrictMode>
);
