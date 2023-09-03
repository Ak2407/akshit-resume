import "../styles/Project.css";
import {projects} from '../constants'
import arrowR from "../assets/images/arrowR.png";
import arrowL from "../assets/images/arrowL.png";
import { ProjectCard } from "../components/ProjectCard";
import { useState } from "react";
export default function Project() {
    const [active, setActive] = useState(1);



  return (
    <>
    <div className="work-container">
      <div className="work-header" id="work">
        <h1 className="work-heading">MY WORK</h1>
      </div>
      <div className="work-project-container">
      {/* {active === 1 ? <ProjectCard
          img={project4}
          cardName="BLAWG"
          destination="https://blawg-front.vercel.app/"
          info="A bloggin website with user authentication and bookmarks functionality with state management using REDUX toolkit"
        /> : <></>}
        {active === 2 ? <ProjectCard
          img={project1}
          cardName="RESUME WEBSITE"
          destination="https://ak2407.github.io/Portfolio/"
          info="A minimal resume template website created for someone who likes minimal aesthetic using HTML CSS AND JS"
        /> : <></>}
        {active === 3 ? <ProjectCard
          img={project2}
          cardName="CODE ALONG"
          destination="https://axit-code-along.netlify.app/"
          info="This app helps you to connect with a(or many) friend or colleague of yours and code along in real time with a real time editor . Built using MERN stack and socket.io"
        /> : <></>}
        
        {active === 4 ? <ProjectCard
          img={project3}
          cardName="E-COMMERCE WEBSITE"
          destination="https://shoes-shopping-eta.vercel.app/"
          info="An extensive application which deals with selling as well as buying of products just like an e-commerce webstie . Built using MERN stack"
        /> : <></>}

        
         */}

        {projects.map((project, index) => (
          active === index+1 ? <ProjectCard key={`project-${index}`} index={index+1} {...project} /> : <></>
        ))}
      </div>
      <div className="project-arrows-container">
        <a>
            
          <img onClick={() => {active === 1 ? setActive(active) :setActive(active - 1) }} className="project-arrow" src={arrowL}></img>
        </a>
        <a>
          <img onClick={() => {active === 7 ? setActive(active) :setActive(active + 1) }} className="project-arrow" src={arrowR}></img>
        </a>
      </div>
      </div>
    </>
  );
}
