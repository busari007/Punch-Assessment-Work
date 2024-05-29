import React from "react";
import logo_yellow from '../assets/images/logo(yellow).png';
import logo_white from '../assets/images/logo(white,downwards).png';
import '../css/section8.css';

export default function Section8({platform, categories, help, GIT}){
  return(
    <div id='section8_background'>
    <div id='section8' className="slanted-div">
        <div id='first_half'>
            <h1>Need a job done, and done<br/>well? Get started</h1>
            <img src={logo_white} alt='logo'/>
        </div>
        <div id='second_half'>
            <div id='second_half1'>
            <span>
        <p>zwilt</p>
        <img src={logo_yellow} alt="Logo" />
        </span>
        <p>We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.</p>
        <p>LINKS AND REDIRECTS</p>
        <div id='links'>
        <button>Hire now</button>
        <button>Apply now</button>
        </div>
            </div>
            <div id='second_half2'>
            <h1>Connecting the right people to the right businesses.</h1>
            <section id='second_half2_lists'>
            <ul>
          {platform.map((list, index) => (
            <li key={index}>
              {list === 'PLATFORM' ? <b className="sub_headers">{list}</b> : list}
            </li>
          ))}
        </ul><ul>
          {categories.map((list, index) => (
            <li key={index}>
              {list === 'CATEGORIES' ? <b className="sub_headers">{list}</b> : list}
            </li>
          ))}
        </ul><ul>
          {help.map((list, index) => (
            <li key={index}>
              {list === 'HELP' ? <b className="sub_headers">{list}</b> : list}
            </li>
          ))}
        </ul><ul>
          {GIT.map((list, index) => (
            <li key={index}>
              {list === 'GET IN TOUCH@' ? <b className="sub_headers">{list}</b> : list}  {/*GIT For get in touch*/}
            </li>
          ))}
        </ul>
            </section>
            </div>
        </div>
    </div>
    </div>
  );
}