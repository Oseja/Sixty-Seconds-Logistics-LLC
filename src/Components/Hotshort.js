import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import  hotshorttt1 from '../assets/hotshorttt1.webp'
import '../All-CSS/Trucks.css'
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Hotshort(props) {
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
    <title>Sixty Seconds Logistics LLC - HotShort</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/Hotshort'/>
    </Helmet>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Hot Short </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Hot Short </h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Truck types – <span>Hot Short</span></h1>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">Hot shot trucks are specialized vehicles primarily utilized for transporting smaller, time-sensitive loads with expedited delivery requirements. These trucks provide a nimble and efficient solution for hauling urgent shipments that may not require the full capacity of a standard freight truck. Unlike traditional freight trucks, hot shot trucks are typically smaller in size and can maneuver more easily, making them ideal for navigating tight spaces or reaching remote locations. They play a vital role in industries such as construction, oil and gas, and agriculture, where quick delivery of equipment, parts, or materials is essential to maintaining operations.</p>
            <div className="buttonContact" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={hotshorttt1} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" alt="Hotshort" loading='lazy'/>
        </div>
           
        </div>
    </section>
    </>
  )
}
