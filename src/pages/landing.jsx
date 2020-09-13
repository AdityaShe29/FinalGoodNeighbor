import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import LandingPage_Background1 from '../components/landingpage_background1'

const MainPage = () => {
    return (
        <div>
            <LandingPage_Background1>
            </LandingPage_Background1>
        </div>
    )
}

export default MainPage;