import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../All-CSS/About.css'
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function About(props) {
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
    <title>Sixty Seconds Logistics LLC - About</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/About'/>
    </Helmet>
      <motion.div className="cursor"
        variants={variants}
        animate={cursorVariants} />
      <section>
        <div className="aboutBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | About  </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; About</h5></span>
        </div>
      </section>
      <div className="seperation"></div>
      <section>
        <div className="mainabout">
          <div className="who" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div className="headingWho">
              <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" onMouseEnter={textEnter} onMouseLeave={textLeave}>Who We Are?</h1>
            </div>
            <div className="contentWho" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>
              <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="700" onMouseEnter={textEnter} onMouseLeave={textLeave}>At Sixty Seconds Logistics, we go beyond the traditional perception of a truck logistics company; we are your trusted partners in the journey of logistical optimization. As one of the earliest innovators in the field of truck logistics in the United States, Sixty Seconds Logistics has been instrumental in reshaping the industry landscape since our establishment.</p>
            </div>
          </div>
          <div className="mission" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">
            <div className="contentMission" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>
              <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="700" onMouseEnter={textEnter} onMouseLeave={textLeave}>Our mission at Sixty Seconds Logistics is straightforward yet impactful: to empower businesses and individuals with seamless logistical solutions. We believe that every logistical operation should be streamlined, reliable, and efficient. Through our comprehensive range of services and relentless dedication to innovation, we are committed to turning this belief into a tangible reality, transforming the logistics landscape one delivery at a time.</p>
            </div>
            <div className="headingMission">
              <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" onMouseEnter={textEnter} onMouseLeave={textLeave}>Our Mission</h1>
            </div>
          </div>
        </div>
        <div className="Contact-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
          <Link to="/Contact"><button >Contact US &gt;</button></Link>
        </div>
      </section>
      <div className="seperation"></div>
    </>
  )
}
