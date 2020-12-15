import '../assets/css/App.css';
import React, { Component } from 'react';
const remote = require('electron').remote;

class App extends React.Component {
  render() {
    console.log(<button onclick={function(){var window  = remote.getCurrentWindow();window.close()}}>Close It!</button>)
    return (
      <div className="msg-wrapper">
        <h1>Hello, Electron!</h1><br/>
        <p>I hope you enjoy!</p><br/>
        <br/>
      </div>
    );
  }
}

export default App;
