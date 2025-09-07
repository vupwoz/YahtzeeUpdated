import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx"; // add .jsx extension
import "./style.css";         // import your CSS

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
