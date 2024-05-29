import React from "react";
import video_logo from '../assets/images/video_logo.png';
import video_logo_white from '../assets/images/video_logo(white).png';
import '../css/section4.css'

export default function Section4(){
    return(
        <div id='section4'>
        <h1>How we ensure you're in good hands.</h1>
        <p>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>
        <div className='section4_divs'>
          <img src={video_logo} alt='video_logo'/>
          <p>
          <b>Step 1:</b>
          {'\t'}Resume Screening
          </p>
          </div>
        <div id='white_div'  className='section4_divs'>
          <img id='white_logo' src={video_logo_white} alt='video logo'/>
          <div>
          <p>
          <b>Step 2:</b>
          {'\t'}Video Interview 
          </p>
          <p>
          Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit
          </p>
          </div>
          </div>
        <div className='section4_divs'>
          <img src={video_logo} alt='video_logo'/>
          <p>
          <b>Step 3:</b>
          {'\t'}Technical Evaluation
          </p>
          </div>
        <div className='section4_divs'>
          <img src={video_logo} alt='video_logo'/>
          <p>
          <b>Step 4:</b>
         {'\t'}Application Review
          </p>
          </div>
        <div id='last_div' className='section4_divs'>
          <img src={video_logo} alt='video_logo'/>
          <p>
          <b>Step 5:</b>
          {'\t'}Let's get to work
          </p>
          </div>
      </div>
    );
}