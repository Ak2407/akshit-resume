import Navbar from "../components/Navbar";
import { Link } from "react-scroll";
import "../styles/Landing.css";
import resume from "../assets/doc/Akshit_Resume.pdf";
import heroImg from "../assets/images/hero.png";
import heroArrow from "../assets/images/heroArrow.png";
export default function Landing() {
  return (
    <>
      <div className="newSite">
        {" "}
        <h1>
          This site is no longer maintainded by me find me at new place{" "}
          <span>
            <a href="https://www.akshit.app/">here</a>
          </span>
        </h1>
      </div>

      <Navbar />
      <div className="hero">
        <img className="hero-img" src={heroImg}></img>
      </div>
      <div className="sub-hero">
        <div className="sub-title-container">
          <p className="sub-title">
            Hello There , I’m currently a student in CS degree and have been
            programming for 5 years . Have been a full time web developer in
            full stack since 1 year. This is my portfolio website which i made
            to properly showcase my work and qualification . Hope you have a
            good time :)
          </p>
        </div>

        <div className="hero-links-container">
          <Link
            className="hero-links"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            GET IN TOUCH
          </Link>
          {/* <a className="hero-links">GET IN TOUCH</a> */}
          <img className="hero-arrow" src={heroArrow}></img>
          <a className="hero-links" href={resume} target="_blank">
            RESUME
          </a>
        </div>
      </div>
    </>
  );
}
