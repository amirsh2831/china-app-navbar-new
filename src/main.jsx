import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { InViewProvider } from "./Context/ContextProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InViewProvider>
      <App />
    </InViewProvider>
  </StrictMode>
);
