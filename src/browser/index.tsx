import "./index.css";

/**
 * Client
 */
import React from "react";
import { hydrate } from "react-dom";
import ConfigContext from "../components/ConfigContext";
import { Config } from "../server/config";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const config = (window as any).__CONFIG__ as Config;
delete (window as any).__CONFIG__;
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

hydrate(
  <BrowserRouter>
    <ConfigContext.Provider value={config}>
      <App />
    </ConfigContext.Provider>
  </BrowserRouter>,
  document.querySelector("#root"),
);
