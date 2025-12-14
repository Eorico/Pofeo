import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./components/NavBar";
import Home from "./components/navlinks/Home";
import About from "./components/navlinks/About";
import Project from "./components/navlinks/Projects";
import Contact from "./components/navlinks/Contact";
import Footer from "./components/navlinks/Footer";
import './App.css';

export default function App() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkingScreen = () => {
      setIsMobileView(window.innerWidth <= 768);
    }

    checkingScreen();
    window.addEventListener("resize",checkingScreen);
    return () => window.removeEventListener("resize", checkingScreen);
  }, []);

  if (isMobileView) {
   return ( <div
      style={{
        height: "100vh",
        width: '100%',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '10px'
        }}
      >
        NOTE: <br /> MOBILE VIEW IS NOT AVAILABLE AT THE MOMENT..
      </h2>
      <p
        style={{
          fontSize: '1.1rem',
          opacity: 0.85,
        }}
      >
        Please view this website on a PC or Laptop for the best experience.
      </p>
    </div>
   )
  }

  return (
    <Router>
      <div className="app">
        <Nav/>
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}