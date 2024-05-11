import React from "react";
import "./header.css"
import Hcomp from "./hcomp";
import { useEffect, useState } from 'react'


const Header = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
    window.scrollY > 50
        ? setIsVisible(true)
        : setIsVisible(false)
    }

    useEffect(() => {
     window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
    return(
    <div className="header">
        <ul className="headerlist1">
            <li className={isVisible ? "aboutOff" : "aboutOn"}><Hcomp title='ABOUT'/></li>
            <li className="hobbyOff"><Hcomp title='HOBBY'/></li>
            <li className="portfolioOff"><Hcomp title='PORTFOLIO'/></li>
        </ul>
    </div>
)}
export default Header;