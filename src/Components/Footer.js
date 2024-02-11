import React, {useEffect} from 'react'
import '../All-CSS/Footer.css'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { MenuFooter } from './MenuFooter'
import { MenuFooterTwo } from './MenuFooterTwo'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Footer(props) {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[]);
    return (
        <>
            <footer > 
                <div className='FooterItems' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div className="logoContent">
                        <Link exact to="/"><img src={logo} className="FooterApp-logo" alt="logo" /></Link>
                        <p>We are a professional truck dispatch company that provides quality services for owner-operators and small trucking companies.We help find the best freight load possible with the highest prices and focus on keeping you loaded on a weekly basis and much more.</p>
                    </div>

                    <div className="footer-option">
                        <ul>
                            <h1>Our Services</h1>
                            {MenuFooter.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link exact to={item.url}
                                            className={`${item.cName}`}>
                                            <i className={item.icon}></i>{item.title}</Link>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>
                    <div className="footer-work">
                        <ul>
                            <h1>Who Can Work With US</h1>
                            {MenuFooterTwo.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link exact to={item.url}
                                            className={`${item.cName}`}>
                                            <i className={item.icon}></i>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <ul>
                            <h1>Contact US</h1>
                            <h5>Sixty Seconds Logistics LLC</h5>
                            <li
                                className='footer-links-contact'><i className='fas fa-map-marker-alt'></i><span>SIXTY SECONDS LOGISTICS LLC. <br />
                                    2525 S Voss Rd, Houston TX 77057. </span></li>
                            <li className='footer-links-contact'><i className='fas fa-envelope'></i>
                                <span className='maillink'><Link to="mailto:dispatch@sixtysecondslogistics.com">dispatch@sixtysecondslogistics.com</Link></span></li>
                            <li className='footer-links-contact'><i className='fas fa-globe'></i>
                                <span className='weblink'><Link to="www.sixtysecondslogistics.com">www.sixtysecondslogistics.com
                                </Link></span></li>
                            <li className='footer-links-contact'><i className='fas fa-phone'></i>
                                <span className='phonelink'><Link to="tel:+1(832) 422-7704">+1(832) 422-7704</Link></span></li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <h1>Follow US</h1>
                        <ul>
                            <Link to="https://www.facebook.com/SixtySecondsLogistics">
                                <li><i className='fab fa-facebook'></i></li>
                            </Link>
                            <Link to="https://www.instagram.com/sixtysecondslogistics/">
                                <li><i className='fab fa-instagram'></i></li>
                            </Link>
                            <Link to="https://twitter.com/SixtySecondsLLC">
                                <li><i className='fab fa-twitter'></i></li>
                            </Link>
                            {/* <Link to="">
                                <li><i className='fab fa-youtube'></i></li>
                            </Link> */}
                            {/* <Link to="">
                                <li><i className='fab fa-linkedin'></i></li>
                            </Link> */}
                            <Link to="https://www.reddit.com/user/SixtySecondsLogistic">
                                <li><i className='fab fa-reddit'></i></li>
                            </Link>
                            <Link to="https://www.tiktok.com/@sixtysecondslogisticsllc">
                                <li><i className='fab fa-tiktok'></i></li>
                            </Link><Link to="https://www.pinterest.com/sixtysecondslogistics/">
                                <li><i className='fab fa-pinterest'></i></li>
                            </Link>
                            <Link to="https://api.whatsapp.com/send?phone=18324227704">
                                <li><i className='fab fa-whatsapp'></i></li>
                            </Link>
                            <Link to="https://www.threads.net/@sixtysecondslogistics">
                                <li><i className='fab fa-threads'></i></li>
                            </Link>
                            <Link to="https://www.tumblr.com/sixtysecondslogistics">
                                <li><i className='fab fa-tumblr'></i></li>
                            </Link>
                            {/* <Link to="">
                                <li><i className='fab fa-yelp'></i></li>
                            </Link> */}
                        </ul>
                    </div>
                </div>
                <p className='lastend'>
                    <i className='fas fa-copyright'></i>
                    All Rights Reserved
                </p>
            </footer>
        </>
    )
}
