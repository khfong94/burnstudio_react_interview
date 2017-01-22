import React, { Component } from 'react';
import './NavbarListItem.css'


class NavbarListItem extends Component{
    render(){
        return(
            <div className="NavbarListItem">
            
          <ul className="navbar-right">
            <li><a className="hovereffect" href="#bannernav">Home</a></li>
             <li> / </li>
             <li><a className="hovereffect" href="#latestprojectnav">Portfolio</a></li>
              <li> / </li>
              <li><a className="hovereffect" href="#aboutmenav">About Me</a></li>
             </ul>
            
            </div>
        );
    }
}

export default NavbarListItem;
