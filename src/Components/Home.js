import React, { useEffect, useState, useRef} from 'react'
import { motion } from 'framer-motion';
import '../All-CSS/Home.css'
import { Link } from 'react-router-dom';



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
  return (
    <>
      <section>
        <div className="bannerSection">
          <div className="BannerConent" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1>Start Your Work With Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem quasi distinctio, doloribus dicta illo sapiente harum dolor odit adipisci.</p>
            <Link to="#"><button>Get Started &gt;</button></Link>
          </div>
        </div>
      </section>
      <section>
        <div className="greetings">
          <div className="greetingHeading" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <h1>Welcome To <span>Sixty Seconds Logistitcs LLC</span></h1>
          </div>
          <div className="greetingPara" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <p>We are a professional truck dispatch company that provides quality services for owner-operators and small trucking companies.We help find the best freight load possible with the highest prices and focus on keeping you loaded on a weekly basis and much more.</p>
          </div>
        </div>
      </section>
      <div class="seperation"></div>
      <section id='truckSection'>
        <div className="TruckMain" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <h1>Truck Dispatch Service Company for Owner Operators and <span>Trucking Companies:</span></h1>
        </div>
        <div className="truckGalery">
         <div className="dryVan" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src="https://glitruckdispatchservices.com/wp-content/uploads/2023/07/Dry-Van-Truck-Dispatch.jpg" alt="Dry Van" />
            <h6>Dry Van</h6>
            <p>"Dry van truck: an enclosed commercial <br /> vehicle for transporting general cargo, <br /> protecting it from weather and theft."</p>
          </div>
           <div className="Reefer" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src="https://glitruckdispatchservices.com/wp-content/uploads/2023/07/Reefer-Truck-Dispatch.png" alt="Reefer" />
            <h6>Reefer</h6>
            <p>"Reefer truck: a refrigerated commercial <br /> vehicle for transporting <br /> temperature-sensitive cargo."</p>
          </div> <div className="flatBed" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src="https://glitruckdispatchservices.com/wp-content/uploads/2023/07/Flatbed-Truck-Dispatch.jpg" alt="FlatBed" />
            <h6>FlatBed</h6>
            <p>"Flatbed truck: open-bed commercial <br /> vehicle for transporting large <br /> or unconventional loads."</p>
          </div>
          <div className="PoweOnly" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src="https://glitruckdispatchservices.com/wp-content/uploads/2023/07/Power-Only-Truck-Dispatch.jpg" alt="Power Only" />
            <h6>Power Only</h6>
            <p>"Power Only truck: a trucking service <br /> providing only the tractor to haul <br /> trailers owned by another company."</p>
          </div>
          
         
          
          <div className="boxTruck" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src="https://i.pinimg.com/564x/fe/cb/8d/fecb8d58cc54bb764ec6d5ad662fdbf5.jpg" alt="Box Truck" />
            <h6>Box Truck</h6>
            <p>"Box truck: a commercial vehicle <br /> with an enclosed cargo space, suitable <br /> for transporting various goods securely."</p>
          </div>
          <div className="hotShort" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img src="https://easydispatch247.com/wp-content/uploads/2022/06/hotshot-dispatch-company.jpg" alt="Hot Short" />
            <h6>Hot Short</h6>
            <p>"Hot shot truck: a smaller, agile <br /> commercial vehicle offering expedited <br /> shipping for urgent or smaller loads."</p>
          </div>
        </div>
      </section>
      <div class="seperation"></div>
      <section className='driverSection'>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
        <div className="driveeMain">
          <h1 className='driveeMainHeading'>Few Steps for a <span>Success</span> Driver</h1>
          <p className='driveMainPara'>Follow a few easy steps to get truck dispatch services that can help you with finding freight, driver management, billing, and more.</p>
          <div className="driveCards">
            <div className="driveCardone" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 1</h1>
              <h5>Get in touch with us</h5>
              <p>Apply using this form or by phone call: <Link to="tel:+1(832) 422-7704">+1(832) 422-7704</Link></p>
            </div>
            <div className="driveCardtwo" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 2</h1>
              <h5>Send us your documentation</h5>
              <p>Make sure you have all the necessary documents ( MC certificate, W9 form, insurance )</p>
            </div>
            <div className="driveCardthree" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 3</h1>
              <h5>Sign the documentation</h5>
              <p>Sign the dispatch agreement that gives us a right to represent the customer's company on its behalf among different people.</p>
            </div>
            <div className="driveCardfour" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <h1>Step 4</h1>
              <h5>That's all. Let's drive and make money!</h5>
              <p>We are all set and we now start to get you the best high paying loads.</p>
            </div>
          </div>
        </div>
      </section>
      <div class="seperation"></div>
      <section>
        <div className="MainSection" >
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Our <span>Advantage</span></h1>
          <div className="MainContent">
            <div className="MainRoket" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span className='fas fa-rocket'></span>
              <h4>Fast Delivery</h4>
              <p>Cooperating with TransLogic you are <br />guaranteed to have your cargo <br /> delivered fast and secure.</p>
            </div>
            <div className="MainPhone" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span className='fas fa-phone'></span>
              <h4>24/ Support</h4>
              <p>We provide you with 27/7 support, <br /> which gives you an opportunity to track <br /> your cargo on its way.</p>
            </div>
            <div className="MainLock" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span className='fas fa-lock'></span>
              <h4>Secured Services</h4>
              <p>We provide all our clients with <br /> professional transportation services on <br /> the highest security level.</p>
            </div>
            <div className="MainWallet" onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span className='fas fa-wallet'></span>
              <h4>Affordable Prices</h4>
              <p>We have the lowest prices on the <br /> market and offer affordable solutions <br /> tailored to your business.</p>
            </div>
          </div>
        </div>
      </section>
      <div class="seperation"></div>
      <section className='priceSection'>
        <div className="priceMain">
          <h1 className='priceMainHeading'>What Are The <span>Advantages</span></h1>
          <p className='priceMainPara'>Professional truck dispatch service can bring you lots of advantages. The main opponent of this kind of services are the freight brokers. In contrast to them, our services focus on you and we technically work for you. So, our interest is to increase the quality and profitability of your services. On the other hand, a freight broker focuses on charging the suppliers as much as possible and paying you as little as possible.</p>
          <div className="priceCards">
            <div className="priceCardone" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span><i className='fas fa-user-clock'></i></span>
              <h2>Save your time</h2>
              <p>We can handle all the services that a trucking company or an owner-operator may need. From paperwork to billing, we can count on us. This way, you will just pick and deliver the loads that we chose together.</p>
            </div>
            <div className="priceCardtwo" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span><i className='fas fa-truck'></i></span>
              <h2>Benefit from personalized plans</h2>
              <p>We have a wide range of plan options. The wishes and needs of companies are different, so we can’t just apply a general method. Communication is the key to amazing results in the shortest period of time possible.</p>
            </div>
            <div className="priceCardthree" style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'light' ? 'white' : 'black' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <span><i className='fas fa-credit-card'></i></span>
              <h2>Increase your profit</h2>
              <p>A freight dispatcher finds you high paid loads and negotiates in your favor. So, you’ll work less and earn more. They work on your behalf and make sure that you increase your profit as much as possible. Also, our profesionist track the daily rates and make sure that the price of the load is well defined. We try to offer you the best freight rates!</p>
            </div>
          </div>
        </div>
      </section>
      <div class="seperation m-10"></div>
      <section id='testimain'>
       <div className="testimonials">
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
          <img src='https://randomuser.me/api/portraits/men/88.jpg' alt="man" />
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
          <img src='https://randomuser.me/api/portraits/men/9.jpg' alt="man" />
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
          <img src='https://randomuser.me/api/portraits/men/30.jpg' alt="man" />
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
          <img src='https://randomuser.me/api/portraits/men/11.jpg' alt="man" />
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
