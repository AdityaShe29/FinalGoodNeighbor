import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/landingpage.css';
import Navbar from '../components/navbar';


const LandingPage_Background1 = () => {
    return (
        <div>
        <div class = "background1">
            <Navbar></Navbar>
            <div class = "headingclassdiv">
                <div class = "filler"></div>
                <h1 class = "headingclass">Support your neighbors. <br/>Support your community. <br/>Donate directly to those in need near you.</h1>
            </div>
        </div>
        </div>
    )
}

export default LandingPage_Background1;