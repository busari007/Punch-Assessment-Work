import React from "react";
import account_gif from '../assets/images/account_icon.png';
import logo from '../assets/images/logo.png';
import '../HomePage.css';
import '../css/section1.css';

function Section1({ section1_list }) {
  return (
    <div id='section1'>
      <h1>Finding the right fit <img src={account_gif} alt="account gif" /> has <br /> never been easier</h1>
      <p>With our rigorous pre-vetting process, you'll never have to<br /> worry about finding the ideal candidate ever again.</p>
      <div className='textarea'>
        <input type='text' placeholder='Looking for designs' />
        <button><img src={logo} alt="logo" /></button>
      </div>
      <section>
        <div id="headers">
          <p id="IT">IT & Development</p>
          <p>Design and Creative</p>
        </div>
        <ul>
          {section1_list.map((list, index) => (
            <li key={index}>
              {list === 'Explore More' ? <b>{list}</b> : list}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Section1;
