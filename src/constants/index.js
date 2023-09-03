// import { project1, project2, project3, project4 } from "../assets/images";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";

const projects = [
  {
    cardName: "BLAWG",
    info: "A blogging website with user authentication and bookmarks functionality with state management using REDUX toolkit",
    img: project4,
    destination: "https://blawg-front.vercel.app/",
  },
  {
    cardName: "ADMIN DASHBOARD",
    info: "A modern designed dashboard too keep track of your daily activities and tasks .Built using Next.js 13, Tailwind CSS and Recharts",
    img: project5,
    destination: "https://akshit-admin-dashboard.vercel.app/",
  },
  {
    cardName: "SUMZ",
    info: "An article summarizer which summarizes the article just by providing the link to the article using OpenAI API. Built using React and Tailwind and API from rapidAPI",
    img: project6,
    destination: "https://akshit-summarizer.vercel.app/",
  },
  {
    cardName: "CAR HUB",
    info: "A car rental website which allows to browse through cars. Built using NextJS 13 Tailwind CSS and api is from RapidAPI.",
    img: project7,
    destination: "https://akshit-carhub.vercel.app/",
  },
  {
    cardName: "RESUME WEBSITE",
    info: "A minimal resume template website created for someone who likes minimal aesthetic using HTML CSS AND JS",
    img: project1,
    destination: "https://ak2407.github.io/Portfolio/",
  },
  {
    cardName: "CODE ALONG",
    info: "This app helps you to connect with a(or many) friend or colleague of yours and code along in real time with a real time editor . Built using MERN stack and socket.io",
    img: project2,
    destination: "https://axit-code-along.netlify.app/",
  },
  {
    cardName: "E-COMMERCE WEBSITE",
    info: "An extensive application which deals with selling as well as buying of products just like an e-commerce webstie . Built using MERN stack",
    img: project3,
    destination: "https://shoes-shopping-eta.vercel.app/",
  },
];

export { projects };
