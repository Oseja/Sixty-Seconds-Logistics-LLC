import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import boxtruck from '../assets/box-truck.webp'
import '../All-CSS/Trucks.css'
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Boxtruck(props) {
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
      useEffect(()=>{
        AOS.init({duration: 2000});
      },[]);
      const textEnter = () => setcursorVariants("text");
      const textLeave = () => setcursorVariants("default");
  return (
    <>
    <Helmet>
    <title>Sixty Seconds Logistics LLC - BoxTruck</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/Boxtruck'/>
    </Helmet>
     <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
    <section>
    <div className="dryBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"> Sixty Seconds Logistics LLC | Box Truck  </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Box Truck </h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Truck types – <span>Box Truck</span></h1>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">Box trucks are specialized vehicles designed with an enclosed cargo area, resembling a large, square-shaped box. They are commonly used for transporting a variety of goods, equipment, or materials over short to medium distances. Box trucks offer versatility in cargo handling, providing protection from weather elements and theft. With their accessible rear cargo doors and spacious interior, they facilitate easy loading and unloading of freight. Box trucks are essential in urban environments, where larger trucks may have difficulty maneuvering, and they serve various industries including retail, delivery services, moving companies, and logistics.</p>
            <div className="buttonContact" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={boxtruck} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" alt="Boxtruck" loading='lazy'/>
        </div>
           
        </div>
    </section>
    </>
  )
}
