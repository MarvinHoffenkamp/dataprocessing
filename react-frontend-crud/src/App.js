import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Vaersdata from "./components/Vaersdata";
import VaersdataList from "./components/VaersdataList";
import AddVaersdata from "./components/AddVaersdata";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/vaersdata" className="navbar-brand">
          VAERSDATA
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/vaersdata"} className="nav-link">
              entries
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/vaersdata"]} component={VaersdataList} />
          <Route exact path="/add" component={AddVaersdata} />
          <Route path="/vaersdata/:id" component={Vaersdata} />
        </Switch>
      </div>
    </div>
  );
}

export default App;