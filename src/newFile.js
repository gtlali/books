import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { root } from ".";

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
