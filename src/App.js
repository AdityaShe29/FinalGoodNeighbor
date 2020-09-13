import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import {Map, Marker, Popup, TileLayer} from "react-leaflet";

// Pages
import MainPage from "./pages/landing";
import NotFoundPage from "./pages/404";
import MapUIPage from "./pages/mapuipage";
import Register from "./pages/Login";
import Register1 from "./pages/Register"

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path = "/" component = {MainPage}/> 
        <Route path = "/404" component = {NotFoundPage}/>
        <Route path = "/mapui" component = {MapUIPage}/>
        <Route path = "/login" component = {Register}/>
        <Route path = "/register" component = {Register1}/>
        <Redirect to = "/404/"/>
      </Switch>
    </Router>
  }
}

export default App;