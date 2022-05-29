import {useState} from 'react'
import classes from './Navbar.module.css'
import Logo from '../images/logo.png'
import Hamburger from '../images/hamburger.png'
import Image from '../images/image1.png'
import Image2  from '../images/image2.jpeg'
import Image3  from '../images/image3.jpeg'
import ArrowLeft from '../images/arrow-left.svg'
import ArrowRight from '../images/arrow-right.svg'
const Navbar = () => {
   const [count, setCount] = useState(0)
   const [buttonLeft, setButtonLeft] = useState('')
   const [buttonRight, setButtonRight] = useState('')
   const imageArray = [Image, Image2, Image3, Image, Image2]

   let displayedImage = imageArray[count]
   const handleImgLoop = () => {
      setButtonLeft(classes.red)
      setButtonRight('')
      setCount(prev=>prev+1)
      if(count >= imageArray.length-1){
         setCount(imageArray.length - 1)
         return
      }
   }
   const handleLoopBack = () => {
      setButtonRight(classes.red)
      setButtonLeft('')
      setCount(prev=>prev-1)
      if(count <=0){
         setCount(0)
         return
      }
   }


   return (
      <section className={classes.section} id='welcome'>
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
                  <button className={buttonRight} onClick={handleLoopBack} >
                     <img src={ArrowLeft} alt="arrow-left" />
                  </button>
                  <button className={ buttonLeft} onClick={handleImgLoop} >
                     <img src={ArrowRight} alt="arrow-right" />
                  </button>
               </div>
         </div>
            <h2 className={classes.title}>
               Welcome to CGMI
               <span> House of Praise</span>
            </h2>
            <div className={classes.actions}>
               <a href='#about'>Upcoming Events </a>
               <a href='#about' className={classes.transparent}>Service Days </a>
            </div>
         </div>
      </section>

   )
}

export default Navbar