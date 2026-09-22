import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/manrope";
import "./styles.css";
import App from "./App";
import { PreferencesProvider } from "./components/PreferencesProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </React.StrictMode>,
);
