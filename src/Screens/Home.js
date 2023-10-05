import React from 'react'
import '../App.css'
import {portfolio} from '../infotext/portfolio.js'
import logo from '../image/doctors.png'

const Home = () => {
  return (
    <div>
    <div className='home'>
      <div className='main'>
        <span className='headline'>Health Assistance Program</span>
        <p className='paragraph'>A digital health program to increase the health awareness</p>
        <ul>
          {portfolio.map((item)=>(
            <li className='bullets'>{item.info}</li>
          ))}
        </ul>
        <div className='butt'>
        <button className='button'>CONTACT US NOW</button>
        </div>
      </div>
      <div>
        <img src={logo} alt="health image" className='custom-image'/>
      </div>
    </div>
    <div className='home'>
      <div>
      <img src={logo} alt='Team Image' className='custom-image'/>
      </div>
      <div className='main'>
      <span className='headline'>Digital EAP</span>
      <p className='paragraph'>Watch your team's emotional health improve in real time</p>
      <ul>
        {portfolio.map((item)=>(
         <li className='bullets'>{item.info}</li>
        ))}
      </ul>
      <div className='butt'>
        <button className='button'>GET STARTED</button>
      </div>
      </div>
      
    </div>
    </div>
    
  )
}

export default Home