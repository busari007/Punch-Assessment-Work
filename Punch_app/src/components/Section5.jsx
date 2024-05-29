import React from "react";
import section5Div1 from '../assets/images/section5Div1.png';
import section5Div2 from '../assets/images/section5Div2.png';
import section5Div3 from '../assets/images/section5Div3.png';
import '../css/section5.css'

export default function Section5(){
  return(
    <div id='section5'>
    <div id='section5_div1' className='slanted-div'>
    <h1>Start your journey today</h1>
        <img className='section5Divs' src={section5Div1} alt='div1'/>
    </div>
    <div className='slanted-div'>
      <div id='section5Div2'>    
      <img className='section5Divs' src={section5Div2} alt='div1'/>
      </div>
    </div>
    <div className='slanted-div'>
      <div id='section5Div3'>
      <img className='section5Divs' src={section5Div3} alt='div1'/>
      </div>
    </div>
</div>
  );
}