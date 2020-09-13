import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/landingpage.css';
import '../../src/mapui.css';
import '../../src/sidebarUIdata.css';
import SidebarForm from './SidebarForm';
 
class Request extends Component {
  render() {
    return (
      <div>
        <h1>Request a Donation</h1>
        <p>Here, you can request a donation if you are in need from food banks, shelters, restaurants, and people near you.</p>
 
        <p class = "small">Fill out the form below so that others can find you</p>
      
        <SidebarForm></SidebarForm>

      </div>

        

    );
  }
}
 
export default Request;