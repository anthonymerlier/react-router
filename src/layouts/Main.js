import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../pages/Welcome/Welcome';
import "./Main.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class MainPage extends React.Component {
    render() {
        const name = this.props.name;
        const color = this.props.color;

        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

export default MainPage;