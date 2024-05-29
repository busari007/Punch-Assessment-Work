import React from "react";
import section6Pic from '../assets/images/section6Pic.png';
import '../css/section6.css'

export default function Section6(){
    return(
    <div id='section6' className="slanted-div">
    <div id='section6_firstHalf'>
      <h1>Why Choose Zwilt</h1>
      <p>We take complex hiring processes - and simplify them. Connecting you to the worlds highly qualified talent pool.</p>
    </div>
    <img src={section6Pic}/>
      </div>
      );
}