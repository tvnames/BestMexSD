import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./util/auth";
import { get as getUser } from "./util/userApi";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import PrivatePage from "./components/PrivatePage";
import SignupPage from "./components/SignupPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/private">
            <PrivatePage />
          </PrivateRoute>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
