import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion';
import '../All-CSS/Services.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Services(props) {
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
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
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
    <title>Sixty Seconds Logistics LLC - Services</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/Services'/>
    </Helmet>
    <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
      <motion.div className="cursor"
            variants={variants}
            animate={cursorVariants} />
    </div>
    <section>
      <div className="serviceBanner">
      <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Services  </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Services</h5></span>
      </div>
    </section>
    <div className="seperation"></div>
    <section >
        <div className="serviceMainContent"  onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Why Choose <span> Sixty Seconds Logistics LLC </span></h1>
        </div>
        <div className="main">
         <div className="serviceOne">
           <div className="iconn" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <i className='fas fa-user'></i>
          </div>
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">Good ratio of office support to drivers(Available 24/7 to help on dispatch and billing matters)</h1>
            <p data-aos="fade-up" data-aos-delay="800" data-aos-duration="700">We offer 24/7 support with a minimum of 2 staff assigned for each truck. We offer consistent support seven days a week even on weekends and holidays, day and night.</p>
          </div>
         </div>
         <div className="serviceOne">
           <div className="iconn" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <i className='fas fa-check'></i>
          </div>
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">Premium firm of choice for many carriers and truckers</h1>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">We go above and beyond for our clients, we dispatch trucks for clients like our very own. We take pride in helping our clients grow their business and fleet. Your success is our success.</p>
          </div>
         </div>
         <div className="serviceOne">
           <div className="iconn" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <i className='fas fa-thumbs-up'></i>
          </div>
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 data-aos="fade-up" data-aos-delay="1200" data-aos-duration="1000">Efficient Invoice Management System</h1>
            <p data-aos="fade-up" data-aos-delay="1300" data-aos-duration="700">Efficient Invoice Management System We work with multiple factoring firms and have established processes in place to ensure our clients loads are billed and paid timely. We keep you copied in all our emails with daily progress updates.</p>
          </div>
         </div>
         <div className="serviceOne">
           <div className="iconn" data-aos="fade-up" data-aos-delay="1400" data-aos-duration="1000" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <i className='fas fa-phone'></i>
          </div>
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">Service Oriented with focus on developing good long term relationships with brokers</h1>
            <p data-aos="fade-up" data-aos-delay="1600" data-aos-duration="700">Service Oriented with focus on developing good long term relationships with brokers We focus on developing good long term relationships with brokers and shippers. Providing good service is essential to building trust and securing dedicated freight. Our goal is to ensure we make our clients the preferred carrier of choice for all brokers and shippers we work with.</p>
          </div>
         </div>
         <div className="serviceOne">
           <div className="iconn" data-aos="fade-up" data-aos-delay="1700" data-aos-duration="1000" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <i className='fas fa-comment-alt'></i>
          </div>
          <div className="content" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 data-aos="fade-up" data-aos-delay="1800" data-aos-duration="1000">We always maintain close communication with all our clients</h1>
            <p data-aos="fade-up" data-aos-delay="1900" data-aos-duration="700">Maintaining close communication with all parties, from shippers, brokers and the drivers makes all differences in the level of service we offer to our end client. We recognize this and have established systems and processes in place to ensure status of loads or issues on loading or unloading is managed and resolved timely in the best interest of all parties.</p>
          </div>
         </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="2000" data-aos-duration="1000" className="buttonService">
          <Link to="/Contact"><button>Contact US &gt;</button></Link>
        </div>
    </section>
    <div className="seperation"></div>
  </>
  )
}
