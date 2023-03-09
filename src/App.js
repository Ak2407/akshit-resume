import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Education from "./pages/Education";
import Landing from "./pages/Landing";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <div className="main">
        <Landing />
        <Project />
        <Education />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
