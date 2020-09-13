import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/landingpage.css';
import '../../src/mapui.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Profile from './profile';
import Request from './request';
import Donate from './donate';



const components = {
    "profile": <Profile />,
    "request": <Request />,
    "donate": <Donate />
}



class SideBar extends Component{
    state = {
        visible: 2
    }

    randomMethod() {
        if (this.state.visible == 0) return <Profile />
        if (this.state.visible == 1) return <Request />
        if (this.state.visible == 2) return <Donate />
    }

    changeVisible = (visible) => {
        this.setState({visible});
    }

    render() { 
        const {visible} = this.state
        return (
        <div class = "sidebarbackground">
            <ul className="sidebarbackground1">
            <div><button class = "button" onClick={() => {this.changeVisible(2)}}>Donate</button></div>
            <div><button class = "button" onClick={() => {this.changeVisible(1)}}>Request</button></div>
            <div><button class = "button" onClick={() => {this.changeVisible(0)}}>Profile</button></div>
          </ul>
          <div>
              {this.randomMethod()}
          </div>
        </div>
        )
    }
}

export default SideBar;