import React from 'react';
import './footer.css';
import videoFooter from '../../ressources/videos/29.mp4';
import { IoIosSend } from "react-icons/io";
import { BiSolidPlaneAlt } from 'react-icons/bi';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  //lets create a react hook to add a scroll animation....
  useEffect(()=> {
    AOS.init({duration:1000})
  }, [])


  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={videoFooter} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>
              KEEP IN TOUCH
            </small>
            <h2>
              Travel with us
            </h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <IoIosSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <BiSolidPlaneAlt className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo aut sed illo optio eveniet accusamus sequi nobis, dolorem reprehenderit saepe hic iusto autem, commodi error facere repellendus nulla. Nostrum.
            </div>

            <div data-aos="fade-up" className="footerSocial">
              <FaXTwitter className='icon' />
              <FaFacebook className='icon' />
              <FaInstagram className='icon' />
              <FaWhatsappSquare className='icon' />
              <FaYoutube className='icon' />
            </div>

          </div>

          <div className="footerLinks grid">

            {/* Group ONE */}
            <div data-aos="fade-up" data-aos-duration="1500" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trourism
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Payment
              </li>

            </div>

            {/* Group TWO */}
            <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                rentcars
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                HostelWord
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                TripAdvisor
              </li>

            </div>

            {/* Group THREE */}
            <div data-aos="fade-up" data-aos-duration="1500" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Lomdon
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                California
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList flex">
                <FaChevronRight className="icon" />
                OCeania
              </li>

            </div>

          </div>

          <div className="footerDiv">
            <small>
              BEST TRAVEL WEBSITE THEME
            </small>

            <small>
              COPYRIGHTS RESERVED - ISRATECH 2025
            </small>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
