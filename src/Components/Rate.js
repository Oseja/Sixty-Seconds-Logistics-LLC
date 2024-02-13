import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import rates from '../assets/Rate.webp'
import '../All-CSS/Trucks.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Rate() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariants, setcursorVariants] = useState("default");
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        },
        text: {
          height: 150,
          width: 150,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75
        }
      }
    
      const textEnter = () => setcursorVariants("text");
      const textLeave = () => setcursorVariants("default");
      useEffect(()=>{
        AOS.init({duration: 2000});
      },[]);
  return (
    <>
    <Helmet>
   <title>Sixty Seconds Logistics LLC - Rate-Negociation</title>
       <meta name="description" content="Truck Logistic Company" />
       <link rel='canonical' href='/Rate-Negociation'/>
   </Helmet>
       <motion.div className="cursor"
         variants={variants}
         animate={cursorVariants} />
       <section>
   <div className="dryBanner">
         <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Rate-Negiciation</h1>
         <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Rate-Negociation</h5></span>
       </div>
   </section>
   <section>
       <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
           <div className="dryContent">
           <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Rate Negociation – <span>Discover Your Ideal Rate</span></h1>
           <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">Rate negotiations help you find your best rates and make a profit from your trucking business. It may seem hard for you to deal with all the work, so a professional truck dispatch company can offer you significant help. You don’t need to possess negotiation skills if you collaborate with a good and dedicated team.With us, you can get more per mile and improve your profit. You can reinvest the extra cash and develop your business. Like that, you can become an important company in the trucking business.</p>
           <div className="buttonContact" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
         <Link to="/Contact"><button>Contact US &gt;</button></Link>
       </div>
       </div>
       <div className="dryImage">
         <img src={rates} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" alt="Dryvan" loading='lazy'/>
       </div>
          
       </div>
   </section>
   </>
  )
}
