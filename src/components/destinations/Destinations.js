import React from 'react'
import './Destinations.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <div data-aos="zoom-in">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbean's Best Beaches</p>
                </div>
                <div className="img-container">
                    <img data-aos="fade-right" className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img data-aos="fade-down" src={BoraBora2} alt="/"/>
                    <img data-aos="fade-left" src={Maldives} alt="/"/>
                    <img data-aos="fade-up" src={Maldives2} alt="/"/>
                    <img data-aos="fade-left" src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations