import React, { Component } from 'react';
import './bootstrap.min.css'
import './bootstrap.css'
import './AboutMe.css'
import './font-awesome.css'
import './font-awesome.min.css'

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutmenav" className="AboutMe">

                 
                        <h1> About Me </h1>

                        
                         <p> I'm an ordinary guy who has passion in software developing. I'm 22 years old this year and from Malacca City, Malaysia. The official graduation date of me will be on March,2016 , after I completing current semester(Nov 2016 - March 2017). I'm able to speak fluently in English, Mandarin, Malay, Hokkien, Cantonese. Understand and able to speak a little bit of Korean.</p>
                             <a href="#">
                                <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>

                             <a href="#">
                                 <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>

                             <a href="#">
                                  <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                    
            
      </div>
    );
  }
}

export default AboutMe;
