import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from"@fortawesome/free-solid-svg-icons";
import {faHome} from"@fortawesome/free-solid-svg-icons";
import {faBars} from"@fortawesome/free-solid-svg-icons";




function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  

  return (
    
      <nav className='navbar2'>
       
          

        <div className="menu-icon" onClick={handleClick}>
         { click
         ?  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
         : (<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
         )
         }
         </div>
  

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item '>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            <i className='fas fa-home' />الرئيسية  
            </Link>
          </li>

          <li className='nav-item'   >
            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
               مقالات <i className='fas fa-caret-down'/>
            </Link>
           
          </li>

          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             أسواق
            </Link>
          </li>

                    
         <li className='nav-item'>
         <Link
              to="/services"
              className='nav-links'
              onClick={closeMobileMenu}
            >
             برامجنا
            </Link>
            
          </li>    
          <li className='nav-item'>
         <Link
              to="/services"
              className='nav-links'
              onClick={closeMobileMenu}
            >
             اقتصاد
            </Link>
            
          </li>   
          <li className='nav-item'>
         <Link
              to="/services"
              className='nav-links'
              onClick={closeMobileMenu}
            >
             ثقافة
            </Link>
            
          </li> 
          <li className='nav-item'>
         <Link
              to="/services"
              className='nav-links'
              onClick={closeMobileMenu}
            >
             رياضة
            </Link>
            
          </li>  
          <li className='nav-item'>
         <Link
              to="/services"
              className='nav-links'
              onClick={closeMobileMenu}
            >
             مباشر
            </Link>
            
          </li>   
          
          
          <li className='nav-item'>
              <div 
              onClick={closeMobileMenu}>
              <a href="https://www.facebook.com/profile.php?id=100009235375196" target="_blank" class=" social-icon fab fa-facebook"></a>
              
              </div>   
          </li>
      
          
        
          <li className='nav-item'>
              <div     
              onClick={closeMobileMenu}>
              <a href="https://www.twitter.com" target="_blank"  class=" social-icon fab fa-twitter"></a>
              
              </div>   
          </li>


          <li className='nav-item'>
              <div     
              onClick={closeMobileMenu}>
              <a href="https://www.instagram.com" target="_blank"  class=" social-icon fab fa-instagram"></a>
              
              </div>   
          </li>
          
          
          <li>
          </li>
        </ul>

       
        
      </nav>
    
  );
}

export default Navbar;