import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate} from 'react-router-dom';
import FormImg from '../FormImg.svg';
import PhoneInput from 'react-phone-input-2'
import axios from 'axios';
import Swal from 'sweetalert2';
import 'react-phone-input-2/lib/style.css'
import '../All-CSS/Contact.css';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Contact(props) {
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

  let history = useNavigate();
  const [data, setData] = useState({
    cname: "",
    cemail: "",
    cnumber: "",
    cdate: "",
    cmessage: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      cname: data.cname,
      cemail: data.cemail,
      cphone: data.cphone,
      cdate: data.cdate,
      cmessage: data.cmessage,
    }
    Swal.fire({
      title: 'Please Wait', 
      text: 'Your data is being processed',
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false, 
    });
    axios.post('/sixtySeconds.php', sendData)
      .then((result) => {
        console.log(result.data); 
        if (result.data.status === 'valid') {
          Swal.fire({
            title: 'Success',
            text: 'Data and email have been sent successfully',
            icon: 'success',
          });
          history('/');
        }
        else {
          Swal.fire({
            title: 'Error',
            text: 'Invalid User',
            icon: 'error',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    useEffect(()=>{
      AOS.init({duration: 2000});
    },[]);
  return (
    <>
    <Helmet>
    <title>Sixty Seconds Logistics LLC - Contact</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/Contact'/>
    </Helmet>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
      <section>
        <div className="contactBanner">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Sixty Seconds Logistics LLC | Contact US  </h1>
          <span><h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"><Link to="/">Home</Link>&gt; Contact</h5></span>
        </div>
      </section>
      <section>
        <div className="addressMain">
          <div className="IconsMain">
            <div className="phone" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <i data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className='fas fa-phone'></i><span>Phone Number:</span><br />
              <Link to="tel:+1(832) 422-7704" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>+1(832) 422-7704</Link>
            </div>
            <div className="address" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <i className='fas fa-map-marker-alt' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"></i><span>Address:</span> <br />
              <h1 style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>2525 S Voss Rd, Houston TX 77057.</h1>
            </div>
            <div className="email" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <i className='fas fa-envelope' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"></i><span>Email:</span> <br />
              <Link to="mailto:support@sixtysecondslogistics.com" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>support@sixtysecondslogistics.com</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="formMain">
          <div className="form" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>
            <form method='post' onSubmit={submitForm} style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white' }}>
            <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="900" className="form-heading" onMouseEnter={textEnter} onMouseLeave={textLeave}>Get Free Quote Now</h1>
            <input
            data-aos="fade-up" data-aos-delay="400" data-aos-duration="900"
            onMouseEnter={textEnter} onMouseLeave={textLeave}
            style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '1px solid #222' : '1px solid #ebebeb'}}
              type="text"
              placeholder="Enter Your Name"
              className="form-name"
              name="cname"
              pattern="^[A-Za-z ]{3,50}$"
              required
              onChange={handleChange}
              value={data.cname}
            />
            <input
            data-aos="fade-up" data-aos-delay="500" data-aos-duration="900"
            onMouseEnter={textEnter} onMouseLeave={textLeave}
            style={{ backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '1px solid #222' : '1px solid #ebebeb'}}
              type="email"
              placeholder="Enter Your Email"
              className="form-email"
              name="cemail"
              required
              onChange={handleChange}
              value={data.cemail}
            />
            <div className="phone-country" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
              <PhoneInput
              
              onMouseEnter={textEnter} onMouseLeave={textLeave}
                country={'us'} 
                value={data.cphone}
                className="Countrycode-input PhoneInput"
                onChange={(value, country, e, formattedValue) => {
                  const countryCode = country.dialCode;
                  const phoneNumber = formattedValue;
                  setData({ ...data, code: countryCode, cphone: phoneNumber });
                }}
                inputStyle={{
                  backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white',
                  height: '5rem',border: props.mode === 'light' ? '1px solid #222' : '1px solid #ebebeb',
                  borderRadius: '.7rem',
                  width: props.screenWidth <= 850 ? '30vw' : '100%',
                }}
                dropdownStyle={{
                  backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white',
                  border: props.mode === 'light' ? '1px solid #222' : '1px solid #ebebeb'}}                
                inputProps={{
                  name: 'cphone',
                  required: true,
                }}
                buttonStyle={{
                  backgroundColor: props.mode === 'light' ? '#ebebeb' : '#222', color: props.mode === 'light' ? 'black' : 'white',
                  borderRadius: '.4rem'
                }}
              />
              <input
              data-aos="fade-up" data-aos-delay="700" data-aos-duration="900"
              onMouseEnter={textEnter} onMouseLeave={textLeave}
              style={{color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '1px solid #222' : '1px solid #ebebeb'}}
                type="date"
                placeholder='Enter Date Here'
                className="form-date"
                name="cdate"
                required
                onChange={handleChange}
                value={data.cdate}
              />
               <textarea
               data-aos="fade-up" data-aos-delay="600" data-aos-duration="800"
               onMouseEnter={textEnter} onMouseLeave={textLeave}
               style={{color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '1px solid #222' : '1px solid #ebebeb'}}
              placeholder="Message"
              name="cmessage"
              className="form-message"
              required
              onChange={handleChange}
              value={data.cmessage}
            ></textarea>
            <div className="buttonForm" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
            <button type="submit" className="form-btn" name="savebtn" onMouseEnter={textEnter} onMouseLeave={textLeave}>Submit</button>
            </div>
            </div>
            </form>
          </div>
          <div className="formImage" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <img src={FormImg} alt="iamge form" onMouseEnter={textEnter} onMouseLeave={textLeave} loading='lazy'/>
          </div>
        </div>
      </section>
    </>
  )
}
