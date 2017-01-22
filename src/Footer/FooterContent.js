import React, { Component } from 'react';
import './FooterContent.css'
import './bootstrap.min.css'
import './bootstrap.css'


class FooterContent extends Component {
  render() {
    return (
      <div id="contactmenav" className="FooterContent">
       <div className="container">
         <div className="row">
            
       <div className="col-xs-6">
    <p className="copyright text-muted pull-left">Copyright &copy; Jerome Website 2016</p>
</div>

    <div className="col-xs-6">

        <ul className="navbar-right">
            <li><a className="hovereffect" href="#bannernav">Home</a></li>
             <li> / </li>
             <li><a className="hovereffect" href="#latestprojectnav">Portfolio</a></li>
              <li>/</li>
              <li><a className="hovereffect" href="#aboutmenav">About Me</a></li>
             </ul>
    </div>
    </div>
   </div>
  </div>
      
        
      
    );
  }
}

export default FooterContent;
