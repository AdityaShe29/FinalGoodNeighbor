import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/landingpage.css';
import '../../src/mapui.css';
import '../../src/sidebarUIdata.css';

class Profile extends Component {
    render() {
      return (
        <div>
          <h1>Your Profile</h1>
          <div class = "crabcake"><img src = {require("../../src/genericProfile.png")}/></div>
          <p><b>Currently in Development...</b></p>
          <p>Have any questions? You can contact us at 551 - 216 - 1314 or email us at adityashelke2014@gmail.com
          </p>
        </div>
      );
    }
  }
   
  export default Profile;