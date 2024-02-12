import React, { useEffect, useState, useRef} from 'react'
import { motion } from 'framer-motion';
import '../All-CSS/Home.css'
import  Dryvan from '../assets/Dryvan.webp'
import  Poweronly from '../assets/Poweronly.webp'
import  Reefer from '../assets/Reefer.webp'
import  Flatbed from '../assets/Flatbed.webp'
import  Boxtruck2 from '../assets/Boxtruck2.jpg'
import  hotshorttt1 from '../assets/hotshorttt1.webp'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Home(props) {
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

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

useEffect(()=>{
  AOS.init({duration: 2000});
},[]);

  return (
    <>
    <Helmet>
    <title>Sixty Seconds Logistics LLC - Home</title>
        <meta name="description" content="Truck Logistic Company" />
    </Helmet>
      <section>
        <div className="bannerSection">
          <div className="BannerConent" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Start Your Work With Us</h1>
            <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">We are a professional truck dispatch company that provides quality services for owner-operators and small trucking companies.</p>
            <Link to="/Services"><button data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">Get Started &gt;</button></Link>
          </div>
        </div>
      </section>
      <section id='greetingss'> 
        <div className="greetings">
          <div className="greetingHeading" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1 ata-aos="fade-up">Welcome To <span>Sixty Seconds Logistitcs LLC</span></h1>
          </div>
          <div className="greetingPara" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p data-aos="fade-up" data-aos-duration="1000">We are a professional truck dispatch company that provides quality services for owner-operators and small trucking companies.We help find the best freight load possible with the highest prices and focus on keeping you loaded on a weekly basis and much more.</p>
          </div>
        </div>
      </section>
      <div className="seperation"></div>
      <section id='truckSection' >
        <div className="TruckMain" onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
          <h1>Truck Dispatch Service Company for Owner Operators and <span>Trucking Companies:</span></h1>
        </div>
         <Swiper
         data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"
         style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }} 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Dryvan} alt="Dry Van" loading='lazy'/>
            <div className="dryContent">
            <h6>Dry Van</h6>
            <p className='dryContentPara'>"Dry van truck: an enclosed commercia vehicle for transporting general cargo, protecting it from weather and theft."</p>
            <Link to="/Dryvan"><button>Read More &gt;</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Reefer} alt="Reefer" loading='lazy'/>
            <div className="dryContent">
            <h6>Reefer</h6>
            <p className='dryContentPara'>"Reefer truck: a refrigerated commercial vehicle for transporting temperature-sensitive cargo"</p>
            <Link to="/Reefer"><button>Read More &gt;</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Flatbed} alt="Flatbed" loading='lazy'/>
            <div className="dryContent">
            <h6>Flatbed</h6>
            <p className='dryContentPara'>"Flatbed truck: open-bed commercial vehicle for transporting large or unconventional loads."</p>
            <Link to="/Flatbed"><button>Read More &gt;</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Poweronly} alt="Power Only" loading='lazy'/>
            <div className="dryContent">
            <h6>Power Only</h6>
            <p className='dryContentPara'>"Power Only truck: a trucking service providing only the tractor to haul trailers owned by another company."</p>
            <Link to="/Poweronly"><button>Read More &gt;</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={Boxtruck2} alt="Box Truck" loading='lazy'/>
            <div className="dryContent">
            <h6>Box Truck</h6>
            <p className='dryContentPara'>"Box truck: a commercial vehicle with an enclosed cargo space, suitable for transporting various goods securely."</p>
            <Link to="/Boxtruck"><button>Read More &gt;</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src={hotshorttt1} alt="Hot Short" loading='lazy'/>
            <div className="dryContent">
            <h6>Hot Short</h6>
            <p className='dryContentPara'>"Hot shot truck: a smaller, agile commercial vehicle offering expedited shipping for urgent or smaller loads."</p>
            <Link to="/Hotshort"><button>Read More &gt;</button></Link>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </section>

      <div className="seperation"></div>
      <section className='driverSection'>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
        <div className="driveeMain">
          <h1 className='driveeMainHeading' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Few Steps for a <span>Success</span> Driver</h1>
          <p className='driveMainPara' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">Follow a few easy steps to get truck dispatch services that can help you with finding freight, driver management, billing, and more.</p>
          <div className="driveCards">
            <div className="driveCardone" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 1</h1>
              <h5>Get in touch with us</h5>
              <p>Apply using this form or by phone call: <Link to="tel:+1(832) 422-7704">+1(832) 422-7704</Link></p>
            </div>
            <div className="driveCardtwo" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}   onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 2</h1>
              <h5>Send us your documentation</h5>
              <p>Make sure you have all the necessary documents ( MC certificate, W9 form, insurance )</p>
            </div>
            <div className="driveCardthree" data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}  onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 3</h1>
              <h5>Sign the documentation</h5>
              <p>Sign the dispatch agreement that gives us a right to represent the customer's company on its behalf among different people.</p>
            </div>
            <div className="driveCardfour" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}  onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 4</h1>
              <h5>That's all. Let's drive and make money!</h5>
              <p>We are all set and we now start to get you the best high paying loads.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="seperation"></div>
      <section>
        <div className="MainSection" >
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our <span>Services</span></h1>
          <div className="MainContent">
            <div className="MainRoket" onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <span className='fas fa-rocket'></span>
              <h4 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Fast Delivery</h4>
              <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Cooperating with TransLogic you are guaranteed to have your cargo delivered fast and secure.</p>
            </div>
            <div className="MainPhone" onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <span className='fas fa-phone'></span>
              <h4 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">24/ Support</h4>
              <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">We provide you with 27/7 support, which gives you an opportunity to track your cargo on its way.</p>
            </div>
            <div className="MainLock" onMouseEnter={textEnter} onMouseLeave={textLeave} data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
              <span className='fas fa-lock'></span>
              <h4 data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Secured Services</h4>
              <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">We provide all our clients with professional transportation services on the highest security level.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" className="MainWallet" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span className='fas fa-wallet'></span>
              <h4 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">Affordable Prices</h4>
              <p data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000">We have the lowest prices on the market and offer affordable solutions tailored to your business.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="seperation"></div>
      <section className='priceSection'>
        <div className="priceMain">
          <h1 className='priceMainHeading' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What Are The <span>Advantages</span></h1>
          <p className='priceMainPara' data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">Professional truck dispatch service can bring you lots of advantages. The main opponent of this kind of services are the freight brokers. In contrast to them, our services focus on you and we technically work for you. So, our interest is to increase the quality and profitability of your services. On the other hand, a freight broker focuses on charging the suppliers as much as possible and paying you as little as possible.</p>
          <div className="priceCards">
            <div className="priceCardone" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span><i className='fas fa-user-clock'></i></span>
              <h2 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Save your time</h2>
              <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">We can handle all the services that a trucking company or an owner-operator may need. From paperwork to billing, we can count on us. This way, you will just pick and deliver the loads that we chose together.</p>
            </div>
            <div className="priceCardtwo" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}  onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span><i className='fas fa-truck'></i></span>
              <h2 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Benefit from personalized plans</h2>
              <p data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">We have a wide range of plan options. The wishes and needs of companies are different, so we can’t just apply a general method. Communication is the key to amazing results in the shortest period of time possible.</p>
            </div>
            <div className="priceCardthree" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}  onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span><i className='fas fa-credit-card'></i></span>
              <h2 data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Increase your profit</h2>
              <p data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">A freight dispatcher finds you high paid loads and negotiates in your favor. So, you’ll work less and earn more. They work on your behalf and make sure that you increase your profit as much as possible. Also, our profesionist track the daily rates and make sure that the price of the load is well defined. We try to offer you the best freight rates!</p>
            </div>
          </div>
        </div>
      </section>
      <div className="seperation m-10"></div>
      <section id='testimain'>
       <div className="testimonials" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
        <h1>Testimonials</h1>
      
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="userOne">
          <img src='https://randomuser.me/api/portraits/men/88.jpg' alt="man" loading='lazy' />
          <h5>Robert</h5>
          <p>"Sixty Seconds Logistics secures top-notch loads at unbeatable prices, keeping our trucks moving and profits soaring. A game-changer for our business!"</p>
          <span>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="userOne">
          <img src='https://randomuser.me/api/portraits/men/9.jpg' alt="man" loading='lazy'/>
          <h5>John</h5>
          <p>"At Sixty Seconds Logistics, top prices for truck loads are a given. Quick, efficient, and cost-effective – they're our go-to for seamless logistics!"</p>
          <span>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="userOne">
          <img src='https://randomuser.me/api/portraits/men/30.jpg' alt="man" loading='lazy'/>
          <h5>Harry</h5>
          <p>"At Sixty Seconds Logistics, top prices, fast. They've got the winning formula for our truck loads – quick, efficient, and cost-friendly!"</p>
          <span>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="userOne">
          <img src='https://randomuser.me/api/portraits/men/11.jpg' alt="man" loading='lazy'/>
          <h5>Tom</h5>
          <p>"Sixty Seconds Logistics: Fast prices, faster service. They nail the best deals for our truck loads, keeping our business moving at full speed!"</p>
          <span>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
          </span>
        </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      
       </div>
      </section>
    </>
  )
}
