import { useState, useEffect, useRef } from 'react';
import { PiListBold } from "react-icons/pi";
import './HomePage.css';
import logo_yellow from './assets/images/logo(yellow).png';
import commas from './assets/images/comma.png';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const section1_list = [
    'Python Developer', 'Data Scientist', 'Shopify Developer',
    'Shopify Developer', 'Front End Developer', 'Python Developer',
    'MERN Stack Developer', 'Shopify Developer', 'Full Stack Developer',
    'Full Stack Developer', 'Python Developer', 'Explore More'
  ];

const platform =['PLATFORM','Find Work','Find Talent','Categories','About Us'];

const categories = ['CATEGORIES', 'Data Science', 'IT & Networking', 'Web & Mobile'];

const help = ['HELP', 'FAQ\'s', 'Contact Us'];

const GIT = ['GET IN TOUCH@', 'Instagram', 'LinkeIn', 'Twitter'];

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        <span>
        <p>zwilt</p>
        <img src={logo_yellow} alt="Logo" />
        </span>
        <PiListBold  className='PiList' onClick={toggleMenu} />
        <div className={`navbar_menu ${menuOpen ? 'opened' : 'closed'}`}>
          <a href=''>Find Work</a>
          <a href=''>Find Talent</a>
          <a href=''>Articles</a>
          <a href=''>About Us</a>
          <a href=''>Contact Us</a>
          <span>
          <a href=''>Log In</a>
          <a href=''><button>Join Now</button></a>
          </span>
        </div>
      </nav>
       <Section1 section1_list={section1_list}/> 
      <div id="section1_divider1" className='slanted-div'>     
     </div>
      <div id="section1_divider2" className='slanted-div'>     
      </div>
      <div id="section1_divider3" className='slanted-div'>     
      </div>
      <div id="section1_divider4" className='slanted-div'>     
      </div>
      <div id="section1_divider5" className='slanted-div'>     
      </div>
     <div className='slanted-div'>
      <Section2 />
      </div>
      <div className='slanted-div'>
        <div id="section3_container">
        <img id='section3_containerImage' src={commas} alt='commas'/>
        <Section3 />
          </div>
      </div>
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 platform={platform} help={help} categories={categories} GIT={GIT}/>
    </>
  );
}

export default HomePage;
