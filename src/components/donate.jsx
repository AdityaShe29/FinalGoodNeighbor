import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/landingpage.css';
import '../../src/mapui.css';
import '../../src/sidebarUIdata.css';

class Donate extends Component {
    render() {
      return (
        <div>
        <h1>Donate to Those in Need</h1>
        <p>Here, you can donate to Food Banks, Homeless Shelters, and People in Need.</p>
 
        <p class = "small">Click on any of the waypoints to the right to find those in need.</p>
      </div>
      );
    }
  }
   
  export default Donate;