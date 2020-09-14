import "./App.css";

import React from "react";
import Landing from './Landing/Landing';
import { Switch } from "react-router-dom";
//import { createMemoryHistory } from 'history';

import useConfig from "../components/useConfig";

export default function App() {
  const config = useConfig();
  //const history = createMemoryHistory();

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
        </header>
        <Landing/>
      </div>
  );
}
