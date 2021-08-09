import React from 'react';
import "./Welcome.css";

class Welcome extends React.Component {
    render() {

        const website = "Mon super site";
        const classBtn = "btn-" + (this.props.color);

        return (
            <div className="container__block">
                <h1>Welcome {this.props.name} et bienvenue sur {website}</h1>
                <a href="#" className={classBtn}>Déconnexion</a>
            </div>
        )
    }
}

export default Welcome;