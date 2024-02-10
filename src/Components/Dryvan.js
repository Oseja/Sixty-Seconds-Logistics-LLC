import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dryvan from '../assets/Dryvann.webp'
import '../All-CSS/Trucks.css'
import { Helmet } from 'react-helmet';
export default function Dryvan(props) {
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
    <title>Sixty Seconds Logistics LLC - Dryvan</title>
        <meta name="description" content="Truck Logistic Company" />
    </Helmet>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1>Sixty Seconds Logistics LLC | Dry Van </h1>
          <span><h5><Link to="/">Home</Link>&gt; Dry Van</h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1>Truck types – <span>Dry Van</span></h1>
            <p>Dry vans are trucks that feature fully enclosed semi-trailers, providing complete protection for shipments against external elements like rain or snow. They are specifically designed to transport palletized, boxed, or loose freight without temperature control, unlike reefers. Dry vans accommodate a diverse range of loads, provided they fit within the dimensions of the trailer.</p>
            <div className="buttonContact">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={dryvan} alt="Dryvan" loading='lazy'/>
        </div>
           
        </div>
    </section>
    </>
  )
}
