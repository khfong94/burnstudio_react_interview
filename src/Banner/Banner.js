import React, { Component } from 'react';
import BannerHeader from './BannerHeader.js'
import BannerContent from './BannerContent.js'
import BannerButton from './BannerButton.js'
import './Banner.css'

class Banner extends Component {
  render() {
    return (
      <div id="bannernav" className="Banner">
      
      <BannerHeader />
      <BannerContent />
      <BannerButton />
      </div>
    );
  }
}

export default Banner;