import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../All-CSS/PowerOnly.css'

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
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="powerBanner">
          <h1>Sixty Seconds Logistics LLC | Power Only  </h1>
          <span><h5><Link to="/">Home</Link>&gt; PowerOnly</h5></span>
        </div>
    </section>
    <section>
        <div className="Mainpower">
            <div className="powerContent">
            <h1>Truck types – <span>Dry Van</span></h1>
            <p>Dry vans are trucks that feature fully enclosed semi-trailers, providing complete protection for shipments against external elements like rain or snow. They are specifically designed to transport palletized, boxed, or loose freight without temperature control, unlike reefers. Dry vans accommodate a diverse range of loads, provided they fit within the dimensions of the trailer.</p>
            </div>
            <div className="buttonContact">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
    </section>
    </>
  )
}
