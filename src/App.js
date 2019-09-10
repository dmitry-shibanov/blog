import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import IndexPage from './pages/IndexPage/IndexPage'
import Login from './pages/Auth/Login/Login'

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Switch>
        <Route exact component={IndexPage} path="/"/>
        <Route exact component={Login} path="/auth/login"/>
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
