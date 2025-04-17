import React from 'react';
import './home.css';
import video from "../../ressources/videos/14.mp4";
import { GrLocation } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { CiCircleList } from "react-icons/ci";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
  //lets create a react hook to add a scroll animation....
  useEffect(()=> {
    AOS.init({duration:2000})
  }, [])

  return (
    <div>
      <section className="home">
        <div className="overPlay">
          <video src={video} muted autoPlay loop type="video/mp4"> </video>
        </div>

        <div className="homeContent container">

          <div className="textDiv">

            <span data-aos="fade-up" className="smallText">
              Our Package
            </span>

            <h1 data-aos="fade-up" className='homeTitle'>
              Search your Holiday
            </h1>

          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            <div className="distinationInput">
              <label htmlFor="city">
                Search your destination :
              </label>

              <div className="input flex">
                <input type="text" placeholder='Enter name here....' />
                <GrLocation className="icon"  style={{color:"black"}}/>
              </div>

            </div>


            <div className="dateInput">
              <label htmlFor="date">
                Select your date :
              </label>

              <div className="input flex">
                <input type="date" />
              </div>
            </div>


            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">
                  Max price :
                </label>

                <h3 className="total">
                  $5000
                </h3>
              </div>

              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>

            <div className="searchOption flex">
              <FaFilter className='icon'/>
              <span>MORE FILTERS</span>
            </div>

          </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaWhatsappSquare className='icon'/>
          </div>

          <div className="leftIcons">
            <CiCircleList className='icon'/>
            <AiOutlineAppstoreAdd className='icon'/>
          </div>
        </div>
        </div>

      </section>
    </div>
  )
}

export default Home
