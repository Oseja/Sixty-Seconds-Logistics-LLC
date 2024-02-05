import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate} from 'react-router-dom';
import FormImg from '../FormImg.svg';
import PhoneInput from 'react-phone-input-2'
import axios from 'axios';
import Swal from 'sweetalert2';
import 'react-phone-input-2/lib/style.css'
import '../All-CSS/Contact.css';
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
    axios.post('http://localhost/SixtySecondsForm/sixtySeconds.php', sendData)
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
  return (
    <>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <motion.div className="cursor"
          variants={variants}
          animate={cursorVariants} />
      </div>
      <section>
        <div className="contactBanner">
          <h1>Sixty Seconds Logistics LLC | Contact US  </h1>
          <span><h5><Link to="/">Home</Link>&gt; Contact</h5></span>
        </div>
      </section>
      <section>
        <div className="addressMain">
          <div className="IconsMain">
            <div className="phone" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <i className='fas fa-phone'></i><span>Phone Number:</span><br />
              <Link to="tel:+1(832) 422-7704" style={{color: props.mode === 'light' ? 'white' : 'black'}}>+1(832) 422-7704</Link>
            </div>
            <div className="address" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <i className='fas fa-map-marker-alt'></i><span>Address:</span> <br />
              <h1 style={{color: props.mode === 'light' ? 'white' : 'black'}}>2525 S Voss Rd, Houston TX 77057.</h1>
            </div>
            <div className="email" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <i className='fas fa-envelope'></i><span>Email:</span> <br />
              <Link to="mailto:dispatch@sixtysecondslogistics.com" style={{color: props.mode === 'light' ? 'white' : 'black'}}>dispatch@sixtysecondslogistics.com</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="formMain">
          <div className="form" style={{backgroundColor: props.mode === 'light' ? 'black' : 'white'}}>
            <form method='post' onSubmit={submitForm} style={{color: props.mode === 'light' ? 'white' : 'black'}}>
            <h1 className="form-heading" onMouseEnter={textEnter} onMouseLeave={textLeave}>Get Free Quote Now</h1>
            <input
            onMouseEnter={textEnter} onMouseLeave={textLeave}
            style={{color: props.mode === 'light' ? 'white' : 'black', border: props.mode === 'light' ? '1px solid white' : '1px solid black'}}
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
            onMouseEnter={textEnter} onMouseLeave={textLeave}
            style={{color: props.mode === 'light' ? 'white' : 'black', border: props.mode === 'light' ? '1px solid white' : '1px solid black'}}
              type="email"
              placeholder="Enter Your Email"
              className="form-email"
              name="cemail"
              required
              onChange={handleChange}
              value={data.cemail}
            />
            <div className="phone-country">
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
                  backgroundColor: props.mode === 'light' ? 'black' : 'white',
                  color: props.mode === 'light' ? 'white' : 'black',
                  height: '5rem',border: props.mode === 'light' ? '1px solid white' : '1px solid black',
                  borderRadius: '.7rem',
                  width: props.screenWidth <= 850 ? '30vw' : '100%',
                }}
                dropdownStyle={{
                  backgroundColor: props.mode === 'light' ? 'black' : 'white',
                  color: props.mode === 'light' ? 'white' : 'black',
                  border: props.mode === 'light' ? '1px solid white' : '1px solid black'}}                
                inputProps={{
                  name: 'cphone',
                  required: true,
                }}
                buttonStyle={{
                  backgroundColor: props.mode === 'light' ? 'black' : 'white',
                  color: props.mode === 'light' ? 'white' : 'black',
                  borderRadius: '.4rem'
                }}
              />
              <input
              onMouseEnter={textEnter} onMouseLeave={textLeave}
              style={{color: props.mode === 'light' ? 'white' : 'black', border: props.mode === 'light' ? '1px solid white' : '1px solid black'}}
                type="date"
                className="form-date"
                name="cdate"
                required
                onChange={handleChange}
                value={data.cdate}
              />
               <textarea
               onMouseEnter={textEnter} onMouseLeave={textLeave}
               style={{color: props.mode === 'light' ? 'white' : 'black', border: props.mode === 'light' ? '1px solid white' : '1px solid black'}}
              placeholder="Message"
              name="cmessage"
              className="form-message"
              required
              onChange={handleChange}
              value={data.cmessage}
            ></textarea>
            <div className="buttonForm">
            <button type="submit" className="form-btn" name="savebtn" onMouseEnter={textEnter} onMouseLeave={textLeave}>Submit</button>
            </div>
            </div>
            </form>
          </div>
          <div className="formImage">
            <img src={FormImg} alt="iamge form" onMouseEnter={textEnter} onMouseLeave={textLeave}/>
          </div>
        </div>
      </section>
    </>
  )
}
