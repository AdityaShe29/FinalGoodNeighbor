import React from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import '../../src/landingpage.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../../src/pages/Login';
import '../../src/bootleg.css';

const Navbar = () => {
    return (
        
        <div class = "navbar">
            <img src = {require('../../src/logo.png')} class = "logo"></img>
            <button type="button" class = "loginbutton"><Link class = "bananababy" to = "/login">Registration / Log In</Link></button>
        </div>
    )
}

export default Navbar;