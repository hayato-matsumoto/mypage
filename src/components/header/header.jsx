import React from "react";
import "./header.css"
import Hcomp from "./hcomp";
import { useEffect, useState } from 'react'

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};
const Header = () => {

   

    const [isVisibleAbout, setIsVisibleAbout] = useState(false)
    const [isVisibleHobby, setIsVisibleHobby] = useState(false)
    const [isVisiblePortfolio, setIsVisiblePortfolio] = useState(false)

    

    const toggleVisibilityAbout = () => {
        if (window.scrollY > 500 && window.scrollY<900) {
            setIsVisibleAbout(true);
        } else {
            setIsVisibleAbout(false);
        }
    }

    const toggleVisibilityHobby = () => {
        if (window.scrollY > 1400 && window.scrollY<2300) {
            setIsVisibleHobby(true);
        } else {
            setIsVisibleHobby(false);
        }
    }

    const toggleVisibilityPortfolio = () => {
        if (window.scrollY > 2500 ) {
            setIsVisiblePortfolio(true);
        } else {
            setIsVisiblePortfolio(false);
        }
    }

    useEffect(() => {
     window.addEventListener('scroll', toggleVisibilityAbout)
    return () => window.removeEventListener('scroll', toggleVisibilityAbout)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibilityHobby)
       return () => window.removeEventListener('scroll', toggleVisibilityHobby)
       }, [])

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibilityPortfolio)
       return () => window.removeEventListener('scroll', toggleVisibilityPortfolio)
       }, [])

    return(
    <div className="header">
        <ul className="headerlist1">
            <li onClick={() => scrollToSection("about")} className={isVisibleAbout ? "aboutOn" : "aboutOff"}><Hcomp title='ABOUT'/></li>
            <li onClick={() => scrollToSection("hobby")} className={isVisibleHobby ? "hobbyOn" : "hobbyOff"}><Hcomp title='HOBBY'/></li>
            <li onClick={() => scrollToSection("portfolio")} className={isVisiblePortfolio ? "portfolioOn" : "portfolioOff"}><Hcomp title='PORTFOLIO'/></li>
        </ul>
    </div>
)}
export default Header;