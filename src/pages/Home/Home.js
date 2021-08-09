import React from 'react';
import Welcome from './Welcome/Welcome';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Welcome name="Anthony" color="danger" />
            </div>
        )
    }
}

export default Home;