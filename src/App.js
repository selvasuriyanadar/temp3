import "./styles.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import LoginPage from "./Component/LoginPage";
import RegistrationPage from "./Component/RegistrationPage";
import HomePage from "./Component/HomePage";
import EditPage from "./Component/EditPage";

export default function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/edit">Edit</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/edit">
          <EditPage />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
