import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Poweronly from '../assets/ps-power.webp'
import '../All-CSS/Trucks.css'
import { Helmet } from 'react-helmet';

export default function PowerOnly(props) {
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
  return (
    <>
    <Helmet>
    <title>Sixty Seconds Logistics LLC - Power Only</title>
        <meta name="description" content="Truck Logistic Company" />
    </Helmet>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1>Sixty Seconds Logistics LLC | Power Only  </h1>
          <span><h5><Link to="/">Home</Link>&gt; Power Only</h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1>Truck types – <span>Power Only</span></h1>
            <p>Power-only trucks are vehicles specifically designed to haul trailers without carrying any cargo themselves. They provide the necessary towing capacity to transport trailers loaded with freight, but unlike traditional trucks, they do not carry their own cargo. This setup allows for efficient transportation of goods while maximizing flexibility in trailer usage and minimizing operational costs. Power-only trucks are commonly used in logistics and transportation to move trailers between locations or to assist with overflow freight.</p>
            <div className="buttonContact">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={Poweronly} alt="Poweronly" loading='lazy' />
        </div>
           
        </div>
    </section>
    </>
  )
}
