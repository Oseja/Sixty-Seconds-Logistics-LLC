import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import freight from '../assets/Freight.webp'
import '../All-CSS/Trucks.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Freight() {
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
    <title>Sixty Seconds Logistics LLC - Freight-Rates</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/Freight-Rates'/>
    </Helmet>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
        <section>
    <div className="dryBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Freight-Rates</h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Freight-Rates</h5></span>
        </div>
    </section>
    <section>
        <div className="Maindry" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <div className="dryContent">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">Freight Rates – <span>A Vital Component of Your Trucking Enterprise</span></h1>
            <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">Freight rates are the fees paid by a shipper or broker for transporting a load, typically calculated on a per-mile basis and subject to frequent fluctuations. It's crucial to maintain up-to-date knowledge of these rates to ensure profitability for each load. Additionally, market rates vary across different regions, necessitating thorough research and documentation. Understanding the rates for each lane of transportation enables adjustments to your per-mile rate, maximizing your business's profitability. Given the significance of freight rates and their dynamic nature, partnering with a professional team is essential for success in the industry.</p>
            <div className="buttonContact" data-aos="fade-up" data-aos-delay="700" data-aos-duration="700">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
        </div>
        <div className="dryImage">
          <img src={freight} data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" alt="Dryvan" loading='lazy'/>
        </div>
           
        </div>
    </section>
    </>
  )
}
