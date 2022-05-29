import React from 'react'
import classes from './Navbar.module.css'
import Logo from '../images/logo.png'
import Hamburger from '../images/hamburger.png'
import Image from '../images/image1.png'
import Image2  from '../images/image2.jpeg'
import Image3  from '../images/image3.jpeg'
import ArrowLeft from '../images/arrow-left.svg'
import ArrowRight from '../images/arrow-right.svg'
const Navbar = () => {
   const imageArray = [Image, Image2, Image3, Image, Image2]
   let displayedImage = imageArray[0]
   const handleImgLoop = () => {
      
   }
   return (
      <section className={classes.section}>
         <header className={classes.header}>
            <div className={classes.start}>
               <p>JOIN US THIS SUNDAY AT 9:00AM IN PERSON OR VIA
               </p>
                  <a href="#"  className={classes.anchor}>LIVESTREAM AT 9:00AM</a>
            </div>
            <nav className={classes.smallScreen}>
               <a href="#">
                  <img src={Logo} alt="logo" />
               </a>
               <button>
                  <img src={Hamburger} alt="hamburger" />
               </button>
            </nav>
            <nav className={classes.bigScreen}></nav>
         </header>
         <div className={classes.welcome}>
            <div className={classes.carousel}>
               <img src={displayedImage} />
               <div className={classes.controls}>
                  <button className={classes.left} >
                     <img src={ArrowLeft} alt="arrow-left" />
                  </button>
                  <button className={classes.right} onClick={handleImgLoop} >
                     <img src={ArrowRight} alt="arrow-right" />
                  </button>
               </div>
         </div>
            <h2>
               Welcome to CGMI
               <span>House of Praise</span>
            </h2>
            <div className={classes.actions}>
               <button>Upcoming Events </button>
               <button>Service Days </button>
            </div>
         </div>
      </section>

   )
}

export default Navbar