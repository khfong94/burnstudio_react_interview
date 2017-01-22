import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.js'
import Banner from './Banner/Banner.js'
import LatestProject from './Latestproject/LatestProject.js'
import AboutAll from './Aboutme/AboutAll.js'
import FooterContent from './Footer/FooterContent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Navbar />
      <Banner/> 
      <LatestProject/>
      <AboutAll/>
      <FooterContent />
      </div>
    );
  }
}

export default App;
