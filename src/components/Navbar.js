import React from "react";
import { useRef } from "react";
import {Link} from "react-scroll"
import "../styles/Navbar.css";
export default function Navbar(){

    const navRef = useRef();

    const showNav = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }


    return (
        <div className="navbar"  >
            <h1 ><a className="logo" href="/">AG</a></h1>
            <div className="hamburger" onClick={showNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="links" ref={navRef}>
                <Link className="nav-link" to="work" spy={true} smooth={true} offset={-100} duration={500} onClick={showNav}>WORK</Link>
                <Link className="nav-link" to="education" spy={true} smooth={true} offset={50} duration={500} onClick={showNav}>EDUCATION</Link>
                <Link className="nav-link" to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={showNav}>CONTACT</Link>
            </div>
        </div>
    );

}