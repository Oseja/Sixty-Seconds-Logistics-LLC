import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import flatbed from '../assets/Flatbed.webp'
import '../All-CSS/Trucks.css'
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Flatbed(props) {
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
    <title>Sixty Seconds Logistics LLC - FlatBed</title>
        <meta name="description" content="Truck Logistic Company" />
    </Helmet>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Flat Bed  </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Flat Bed</h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Truck types – <span>Flat Bed</span></h1>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">Flatbed trucks are specialized vehicles equipped with an open, flat cargo area, devoid of sides or a roof. They are purpose-built to transport oversized, heavy, or oddly-shaped cargo that cannot be accommodated by enclosed trucks. Flatbed trucks offer versatility in loading and securing various types of freight, including construction materials, machinery, equipment, and large structures. Their open design allows for easy loading and unloading using cranes, forklifts, or other heavy equipment. Flatbed trucks play a crucial role in industries such as construction, manufacturing, and transportation of oversized goods, providing a flexible and efficient solution for moving challenging loads.</p>
            <div className="buttonContact" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={flatbed} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" alt="Flatbed" loading='lazy'/>
        </div>
           
        </div>
    </section>
    </>
  )
}
