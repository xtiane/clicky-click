import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Navigation.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Image from './components/Image';
import JumboTron from './components/JumboTron';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <JumboTron />
        <Content />
        <Footer />
      </div>
    );
    /*}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/
  }
}

export default App;
