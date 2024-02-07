import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../All-CSS/Trucks.css'

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
  return (
    <>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1>Sixty Seconds Logistics LLC | Hot Short </h1>
          <span><h5><Link to="/">Home</Link>&gt; Hot Short </h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry">
            <div className="dryContent">
            <h1>Truck types – <span>Hot Short</span></h1>
            <p>Hot shot trucks are specialized vehicles primarily utilized for transporting smaller, time-sensitive loads with expedited delivery requirements. These trucks provide a nimble and efficient solution for hauling urgent shipments that may not require the full capacity of a standard freight truck. Unlike traditional freight trucks, hot shot trucks are typically smaller in size and can maneuver more easily, making them ideal for navigating tight spaces or reaching remote locations. They play a vital role in industries such as construction, oil and gas, and agriculture, where quick delivery of equipment, parts, or materials is essential to maintaining operations.</p>
            <div className="buttonContact">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src="https://www.veritread.com/wp-content/uploads/hot-shot-with-dozer.jpg" alt="Hotshort" />
        </div>
           
        </div>
    </section>
    </>
  )
}
