import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import LandingPage_Background1 from '../components/landingpage_background1'
import MapUI from "../components/mapui";
import SideBar from '../components/sidebar';
import '../../src/sidebarUIdata.css';
import '../../src/index1.css'
import '../../src/index1.css'
import Login from './Login';

class MainPage extends Component{
    
    nextPath(path) {
        this.props.history.push(path);
    }
    
    render () {
        return (
            <div>
            <SideBar>
            </SideBar>
            <MapUI>
            </MapUI>
            <div class = "absolutepositioningskill1"><button onClick={() => this.nextPath('/')} className="dragonbutter" type="submit">Log Out</button></div>
        </div>
        )
    }
        
}

export default MainPage;