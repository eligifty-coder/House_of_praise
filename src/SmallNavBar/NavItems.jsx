import React from 'react'
import Cancel from '../images/cancel.png'
import classes from './Navbar.module.css'
import Facebook from '../images/facebook.png'
import Youtube from '../images/youtube.png'
import Whatsapp from '../images/whatsapp.png'
import Instagram from '../images/instagram.png'

const NavItems = () => {
   return (
      <nav className={classes.nav}>
         <div className={classes.top} >
            <ul className={classes.lists}>
               <li>
                  <a href="#about">About Us</a>
               </li>
               <li>
                  <a href="#connect">Connect Groups</a>
               </li>
               <li>
                  <a href="#ministry">Ministries</a>
               </li>
               <li>
                  <a href="#program">Programs</a>
               </li>
               <li>
                  <a href="#events">Events</a>
               </li>
               <li>
                  <a href="#giving">Giving</a>
               </li>
            </ul>
            <img src={Cancel} alt="cancel" />
         </div>
         <div className={classes.bottom}>
            <button>Send us a message</button>
            <ul className={classes.icons} >
               <li>
                  <a href="#">
                     <img src={Facebook} alt="facebook" />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={Instagram} alt="instagram" />
                  </a>
               </li>
               <li>
                  <a href="#">
                     <img src={Whatsapp} alt="Whatsapp" />
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   )
}

export default NavItems