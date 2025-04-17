import React from 'react'
import './main.css'

import img from '../../ressources/img/img (1).jpg';
import img2 from '../../ressources/img/img (2).jpg';
import img3 from '../../ressources/img/img (3).jpg';
import img4 from '../../ressources/img/img (4).jpg';
import img5 from '../../ressources/img/img (5).jpg';
import img6 from '../../ressources/img/img (6).jpg';
import img7 from '../../ressources/img/img (7).jpg';
import img8 from '../../ressources/img/img (8).jpg';

import { GrLocation } from "react-icons/gr";
import { FaClipboardCheck } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// let me paste the array named data

const Data = [
	{
		id: 1,
		imgSrc: img,
		destTitle: 'Bora Bora',
		location: 'New Zealand',
		grade: 'CULTURAL RELAX',
		fees: '$700',
		description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
	},
	{
		id: 2,
		imgSrc: img2,
		destTitle: 'Santorini',
		location: 'Greece',
		grade: 'ROMANTIC GETAWAY',
		fees: '$850',
		description: 'Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters, Santorini is a dream destination for couples and honeymooners.'
	},
	{
		id: 3,
		imgSrc: img3,
		destTitle: 'Kyoto',
		location: 'Japan',
		grade: 'HISTORICAL EXPLORATION',
		fees: '$600',
		description: 'Kyoto is a city steeped in history, offering beautiful temples, traditional tea houses, and serene gardens. Perfect for those seeking cultural enrichment.'
	},
	{
		id: 4,
		imgSrc: img4,
		destTitle: 'Banff National Park',
		location: 'Canada',
		grade: 'NATURE ADVENTURE',
		fees: '$500',
		description: 'Banff National Park is a haven for nature lovers, with its majestic mountains, turquoise lakes, and abundant wildlife. Ideal for hiking and outdoor activities.'
	},
	{
		id: 5,
		imgSrc: img5,
		destTitle: 'Marrakech',
		location: 'Morocco',
		grade: 'CULTURAL IMMERSION',
		fees: '$450',
		description: 'Marrakech is a vibrant city known for its bustling souks, stunning palaces, and rich cultural heritage. A must-visit for those looking to experience the exotic.'
	},
	{
		id: 6,
		imgSrc: img6,
		destTitle: 'Maldives',
		location: 'Maldives',
		grade: 'LUXURY RELAXATION',
		fees: '$1200',
		description: 'The Maldives is synonymous with luxury, offering overwater bungalows, pristine beaches, and world-class diving spots. Perfect for a tropical escape.'
	},
	{
		id: 7,
		imgSrc: img7,
		destTitle: 'Patagonia',
		location: 'Argentina/Chile',
		grade: 'WILDERNESS EXPLORATION',
		fees: '$900',
		description: 'Patagonia is a rugged and remote region, known for its dramatic landscapes, glaciers, and diverse wildlife. A paradise for adventurers and nature enthusiasts.'
	},
	{
		id: 8,
		imgSrc: img8,
		destTitle: 'Paris',
		location: 'France',
		grade: 'CULTURAL DELIGHT',
		fees: '$750',
		description: 'Paris, the City of Light, is renowned for its iconic landmarks, world-class museums, and exquisite cuisine. A timeless destination for art and culture lovers.'
	}
];

const Main = () => {
	  //lets create a react hook to add a scroll animation....
	  useEffect(()=> {
		AOS.init({duration:2000})
	  }, [])

  return (
    <section className='main container selection'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
          return(
            <div key={id} 
			data-aos="fade-up" 
			className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}
                </h4>
                <span className="containent flex">
                  <GrLocation classNam='icon'/>
				  <span className='name'>{location}</span>
                </span>

				<div className="fees flex">
					<div className="grade">
						<span>
							{grade}
							<small>
								+1
							</small>
						</span>
					</div>

					<div className="price">
						<h5>
						{fees}
						</h5>
					</div>
				</div>

				<div className="desc">
					<p>{description}</p>
				</div>

				<button className='btn flex'>
					DETAILS <FaClipboardCheck className='icon'/>
				</button>
              </div>
            </div>
          )
        })
        }
      </div>



    </section>
  )
}

export default Main
