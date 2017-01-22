import React, { Component } from 'react';
import './bootstrap.min.css'
import './bootstrap.css'
import './font-awesome.css'
import './font-awesome.min.css'
import AboutMe from'./AboutMe.js'
import WhatsNew  from './WhatsNew.js'
import WhatsContain from './WhatsContain.js'
import './AboutAll.css'
import WhatsContain2 from './WhatsContain2.js'
import WhatsNewHeader from './WhatsNewHeader.js'
import WhatsNew2 from './WhatsNew2.js'

class AboutAll extends Component {
  render() {
    return (
      <div className="AboutAll">
        <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <AboutMe />
               </div> {/* This is contain left AboutMe*/}
               <div className="col-xs-12 col-md-6">{/*Start of what's new? */}
               <WhatsNewHeader/>

               <div className="row">
               
                   <div className="col-xs-12 col-md-6">
                    <WhatsNew/>
                      </div> {/*div in div*/}

                   <div className="col-xs-12 col-md-6">
                    <WhatsContain/>
                      </div> {/*div in div*/}

              </div>  

                 <div className="row">
               
                   <div className="col-xs-12 col-md-6">
                    <WhatsNew2/>
                      </div> {/*div in div*/}

                   <div className="col-xs-12 col-md-6">
                    <WhatsContain2 />
                      </div> {/*div in div*/}

              </div>  
              </div>


              </div>
            </div> 
           
         </div>
        
      
    );
  }
}

export default AboutAll;
