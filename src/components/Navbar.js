import React from 'react';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Logo from "./logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div style={ { textAlign: "center", padding: "2rem 0" } }>
                    <img src={Logo} alt="Logo" style={ { maxWidth: "120px" } }/>
                </div>
                <div>
                    <nav id="nav__main">
                        <ul>
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/news">
                            <News />
                        </Route>
                        <Route exact path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Redirect to="/home" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Navbar;