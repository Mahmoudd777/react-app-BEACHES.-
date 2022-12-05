import React from 'react'
import './Selects.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'



function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
            <div  data-aos="fade-right" className='selects-location'>
            <img src={BoraBora} alt='/' />
            <div className="overlay">
                <p>Bora Bora</p>
            </div>
            </div>
            <div  data-aos="fade-down" className='selects-location'>
            <img src={BoraBora2} alt='/' />
            <div className="overlay">
                <p>Emerald Bay</p>
            </div>
            </div>
            <div  data-aos="fade-left" className='selects-location'>
            <img src={Maldives} alt='/' />
            <div className="overlay">
                <p>Maldives</p>
            </div>
            </div>
            <div  data-aos="fade-right" className='selects-location'>
            <img src={Maldives2} alt='/' />
            <div className="overlay">
                <p>Grenada</p>
            </div>
            </div>
            <div  data-aos="fade-up" className='selects-location'>
            <img src={Maldives3} alt='/' />
            <div className="overlay">
                <p>Barbados</p>
            </div>
            </div>
            <div  data-aos="fade-left" className='selects-location'>
            <img src={KeyWest} alt='/' />
            <div className="overlay">
                <p>Key West</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Selects