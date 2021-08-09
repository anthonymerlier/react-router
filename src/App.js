import React from 'react';
import Main from './layouts/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Main name="Anthony" color="danger"/>
      </div>
    );
  }
}

export default App;
