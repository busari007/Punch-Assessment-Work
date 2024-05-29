import React from "react";
import timer from '../assets/images/timer.png';
import grid_logo from '../assets/images/grid.png';
import account_logo from '../assets/images/account_logo.png';
import logo from '../assets/images/logo.png';
import shopify from '../assets/images/Shopify.png';
import magento from '../assets/images/Magento.png';
import DS_logo from '../assets/images/DS_logo.png';
import WF_logo from '../assets/images/WF_logo.png';
import DN_logo from '../assets/images/DN_logo.png';
import logo_reversed from '../assets/images/logo(reversed).png';
import PS_logo from '../assets/images/PS_logo.png';
import Ai_logo from '../assets/images/Ai_logo.png';
import UE_logo from '../assets/images/UE.png';
import Cinema4D from '../assets/images/Cinema4D.png';
import figma from '../assets/images/Figma.png';
import logo_white from '../assets/images/logo(white).png';
import '../css/section2.css';

function Section2(){
    return(
        <div id='section2'>
     <h1>Your one-stop marketplace for finding the talent your business needs.</h1>
     <div id='section2_firstHalf'>
       <div id='firstHalf1'>
        <h4>Find Dev and IT professionals to scale your business.</h4>
        <span><img src={timer} alt='timer-logo'/><p>989 Skills</p></span>
        <span><img src={grid_logo} alt='grid-logo'/><p>45 Sub-Categories</p></span>
        <span><img src={account_logo} alt='account-logo'/><p>1011 Profiles</p></span>
       </div>
       <div id='firstHalf2'>
       <h4>IT & Development</h4>
       <div id='firstHalf2_content'>
        <span><img src={shopify} alt='shopify-logo'/><p>Shopify Developer</p></span>
        <span><img src={magento} alt='magento-logo'/><p>Magento Developer</p></span>
        <span><img src={DS_logo} alt='DS-logo'/><p>Data Scientist</p></span>
        <span><img src={WF_logo} alt='WF-logo'/><p>Webflow Developer</p></span>
        <span><img src={DN_logo} alt='DN-logo'/><p>Dot Net Developer</p></span>
        <img id="logo" src={logo} alt='logo'/>
        </div>
       </div>
       <div id='secondHalf1'>
        <h4>Explore Creative individually with a keen eye for detail</h4>
        <span><img src={timer} alt='timer-logo'/><p>989 Skills</p></span>
        <span><img src={grid_logo} alt='grid-logo'/><p>45 Sub-Categories</p></span>
        <span><img src={account_logo} alt='account-logo'/><p>1011 Profiles</p></span>
       </div>
       <div id='secondHalf2'>
       <h4>Design & Creative</h4>
       <div id='secondHalf2_content'>
       <img id="logo" src={logo_reversed} alt='logo'/>
        <span><img src={figma} alt='figma-logo'/><p>UX Designer</p></span>
        <span><img src={PS_logo} alt='Ps-logo'/><p>Graphics Designer</p></span>
        <span><img src={Ai_logo} alt='Ai-logo'/><p>Illustration Artist</p></span>
        <span><img src={UE_logo} alt='UE-logo'/><p>Unreal Engine</p></span>
        <span><img src={Cinema4D} alt='Cinema4D-logo'/><p>Cinema 4D</p></span>
        </div>
       </div>
     </div>
     <div id='section2_conclusion'>
        <div><img src={logo_white} alt="logo"/><p>Explore More</p></div>
        <p><b>30 more</b> to explore</p>
     </div>
      </div>
    );
} export default Section2;