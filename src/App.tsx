import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import Home from "./components/navlinks/Home";
import About from "./components/navlinks/About";
import Project from "./components/navlinks/Projects";
import Contact from "./components/navlinks/Contact";
import Footer from "./components/navlinks/Footer";
import './App.css';

export default function App() {
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