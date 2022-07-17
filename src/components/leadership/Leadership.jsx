import React, {useState} from 'react'
import classes from './Leadership.module.css'
import Mavi from '../../images/mavi.png'
import Rotimi from '../../images/rotimi.png'
import Patrick from '../../images/patrick.png'
import Saraphina from '../../images/saraphina.png'
import Ehis from '../../images/saraphina.png'
import Ik from '../../images/ik.png'
import ChevronPrev from '../../images/chevron_prev.png'
import ChevronNext from '../../images/chevron_next.png'

const Leadership = () => {
   const [count, setCount] = useState(0)
   const handlePrev = () => {
      setCount(prev => prev - 1)
      if (count === 0) {
         setCount(0)
      }
   }
   const handleNext = () => {
      setCount(prev => prev + 1)
      if (count >= count.length - 1) {
         const length = count.length-1
         setCount(length)
      }
   }
   const pastors = [
      {
         name: 'Pastor Rotimi',
         title: 'Assistant Pastor',
         img:Rotimi
      },
      {
         name: 'Pastor Seraphina',
         title: 'Assistant Pastor',
         img: Saraphina,
      },
      {
         name: 'Pastor Patrick',
         title: 'Assistant Pastor',
         img: Patrick
      },
      {
         name: 'Pastor Ik',
         title: 'Assistant Pastor',
         img: Ik
      },
      {
         name: 'Pastor Ehis',
         title: 'Assistant Pastor',
         img: Ehis
      },
   ]
   const mappedPastors = pastors.map((pastor, id) => {
      return <article className={classes.pastor} key={id}>
         <img src={pastor.img} alt="identity" />
         <div className={classes.details}>
            <h1>Pastor {pastor.name}</h1>
            <p>Pastor {pastors.title}</p>
         </div>
         
      </article>
   })
   return (
      <div className={classes.leadership} id='leadership'>
         <header>
            <h1>Leadership</h1>
         </header>
         <section className={classes.content}>
            <article>
               <img src={Mavi} alt="mavi" />
               <div className={classes.maviBio}>
                  <h3>Raise up an army for me, to go with the gospel to all Nations. Gather together those whom I
                     have called
                     and I will send them with the fire of my spirit. Give my word and your example to many who will
                     go to teach, preach and heal.</h3>
                  <p>House of Praise is set up by God to raise, restore and equip a people to the complete and full
                     standard of Christ and is
                     led by Reverend Mavi Sokia Isibor and a team of ministers who are committed to the God-given mandate.</p>
                  <div className={classes.detail}>
                     <h2>Pastor Jane Doe</h2>
                     <p>Head Pastor</p>
                  </div>
               </div>
            </article>
            <div className={`${classes.pastors}${classes.small}`}>
               <article className={classes.pastor}>
                  <img src={pastors[count].img} alt="identity" />
                  <div className={classes.details}>
                     <h1>Pastor {pastors[count].name}</h1>
                     <p>Pastor {pastors[count].title}</p>
                  </div>
               </article>
               <div className={classes.navigation} >
                  <button>
                     <img src={ChevronPrev} alt="prev" />
                  </button>
                  <button>
                     <img src={ChevronNext} alt="next" />
                  </button>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Leadership