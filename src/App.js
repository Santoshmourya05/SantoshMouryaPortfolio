import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/JSX/Home";
import Projects from "./components/JSX/Projects";
import Experience from "./components/JSX/Experience";
import Navbar from "./components/JSX/Navbar";
import Footer from "./components/JSX/Footer";
import Skills from "./components/JSX/Skills";
import About from './components/JSX/About'
import Resume from "./components/JSX/Resume";
import Education from "./components/JSX/Education";
import Contact from "./components/JSX/Contact";
import More from "./components/JSX/More";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/education" element={<Education />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/personal" element={<Footer />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/more" element={<More/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}


export default App;