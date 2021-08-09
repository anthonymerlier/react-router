import React from 'react';
import Navbar from '../components/Navbar';
import "./Main.css";

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