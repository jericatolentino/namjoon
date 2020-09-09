import "./App.css";

import React from "react";
import Landing from './Landing/Landing';

import useConfig from "../components/useConfig";
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <p className="App-intro">
        Blah blah blah
        <Landing/>
      </p>
    </div>
  );
}
