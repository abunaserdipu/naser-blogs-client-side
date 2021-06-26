import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            {loggedInUser.email === "test@test.com" && loggedInUser.password === "#2021dev"  ? <Redirect to="/admin"/>:<Login />}
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
