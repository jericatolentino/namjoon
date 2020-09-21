import "./App.css";
import './Landing/SubLanding/SubLanding.css';

import React from "react";
import Landing from './Landing/Landing';
import Koya from './Landing/SubLanding/Koya';
import Chimmy from './Landing/SubLanding/Chimmy';
import Kookie from './Landing/SubLanding/Kookie';
import { Switch, Route } from "react-router-dom";

import useConfig from "../components/useConfig";

export default function App() {
  const config = useConfig();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Koya" component={Koya} />
        <Route path="/Chimmy" component={Chimmy} />
        <Route path="/Kookie" component={Kookie} />
      </Switch>
    </div>
  );
}
