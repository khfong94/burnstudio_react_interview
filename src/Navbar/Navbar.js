import React, { Component } from 'react';
import './Navbar.css';
import NavbarLogo from './NavbarLogo.js'
import NavbarList from './NavbarList'
import './bootstrap.min.css'
import './bootstrap.css'


class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container">
                    <div className="row">
                    
             <div className="col-xs-6">                      
            <NavbarLogo />  
            </div>

            
    <div className="col-xs-6">
             <NavbarList />
             </div>
             </div>
            </div>
        </div>
        );
    }
}

export default Navbar;