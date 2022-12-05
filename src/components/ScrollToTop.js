import React from 'react';
import { useEffect, useState } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai'

function ScrollToTop(){
const [scrollToTop, setScrollToTop] =useState(false);

useEffect(() => {
    window.addEventListener("scroll",() => {
        if(window.scrollY > 250){
            setScrollToTop(true)
        } else {
            setScrollToTop(false)
        }
    })
}, [])
const scrollUp = () => {
window.scrollTo({
    top: 0,
    
    behavior: 'smooth'
})
};
return (
<div >
    {scrollToTop && (
        <button data-aos="zoom-in-up"
        style={ {
            position: "fixed",
            display: "flex",
            bottom: "50px",
            right: "50px",
            height: "50px",
           
        }}
        onClick={scrollUp} >
<AiOutlineArrowUp className='icon'/>
        </button>
    )}
</div>
);
}



export default ScrollToTop