import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import reefer from '../assets/Reeferr.webp'
import '../All-CSS/Trucks.css'
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Reefer(props) {
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
    <title>Sixty Seconds Logistics LLC - Reefer</title>
        <meta name="description" content="Truck Logistic Company" />
    </Helmet>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Reefer </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Reefer</h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Truck types – <span>Reefer</span></h1>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">Reefer trucks are specialized vehicles equipped with refrigeration units, designed to maintain specific temperature conditions inside the trailer. This ensures the safe transportation of temperature-sensitive cargo such as perishable goods, pharmaceuticals, or certain chemicals. Reefer trucks offer precise temperature control, allowing for the transportation of goods that require refrigeration or freezing temperatures. They play a crucial role in the cold chain logistics industry, ensuring that perishable items reach their destination in optimal condition.</p>
            <div className="buttonContact" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={reefer} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" alt="Reefer" loading='lazy' />
        </div>
           
        </div>
    </section>
    </>
  )
}
