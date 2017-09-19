import React, { Component } from 'react';
import Nav from './components/Nav';
import '../node_modules/purecss/build/pure-min.css';
import './App.css';

class App extends Component {
  render() {
    document.title = 'Star Wars';

    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
