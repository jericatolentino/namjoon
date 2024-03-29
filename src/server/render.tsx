/**
 * Server Side Rendering
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../browser/App";
import ConfigContext from "../components/ConfigContext";
import config from "./config";
import html from "./html";
import { Stats } from "./types";

/** Whether we're running on a local desktop or on AWS Lambda */
const isLocal = process.env.IS_LOCAL || process.env.IS_OFFLINE;

export default async function render(): Promise<string> {
  let stats: Stats = { main: "index.js", css: "index.css" };
  if (!isLocal) {
    try {
      stats = require("../../dist/stats.json") as Stats;
    } catch (err) {
      throw new Error("`stats.json` not found");
    }
  }

  const content = renderToString(
    <StaticRouter>
      <ConfigContext.Provider value={config}>
        <App />
      </ConfigContext.Provider>
    </StaticRouter>,
  );
  return html({ stats, content, config });
}
