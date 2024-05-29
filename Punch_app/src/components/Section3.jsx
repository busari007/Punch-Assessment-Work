import React from "react";
import jasonDp from '../assets/images/JasonDp.png'
import groove_purple from '../assets/images/groovehq(purple).png'
import logo_purple_left from '../assets/images/logo(purple,left).png'
import logo_purple_right from '../assets/images/logo(purple,right).png'
import groove_white from '../assets/images/groovehq(white).png'
import '../css/section3.css'


export default function Section3(){
  return(
    <div id='section3'>
          <div id="section3_firsthalf">
            <h1>How it worked for Jason <img id="jasonDp" src={jasonDp} alt='dp'/> at <img id="groove_purple" src={groove_purple} alt='groove'/></h1>
            <p>Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.</p>
            <div>
              <img id='section3_logo1'src={logo_purple_left}/> 
              <img id='section3_logo2' src={logo_purple_right}/>
            </div>
          </div>
          <div id="section3_secondhalf">
            <div>
              <img src={groove_white} alt='groove'/>
              <div>
              <h3>Jason Makki</h3>
              <p>Engineer at GROOVE</p>
              <p>San Francisco</p>
              </div>
           </div>
           <p>Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters.</p>
          </div>
      </div>
  );
}