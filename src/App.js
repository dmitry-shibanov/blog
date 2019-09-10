import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import IndexPage from './pages/IndexPage/IndexPage'
import Login from './pages/Auth/Login/Login'
import SignUp from './pages/Auth/SignUp/SignUp';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Switch>
        <Route exact component={IndexPage} path="/"/>
        <Route exact component={Login} path="/auth/login"/>
        <Route exact component={SignUp.bind()} path="/auth/login"/>
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
