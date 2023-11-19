import "./index.css";
import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { store } from "./store/store";
import { initLogging } from "./misc/logging";
import { initTranslations } from "./i18n/locales";
import { createRoot } from "react-dom/client";

initLogging();
initTranslations();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={"/"}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
