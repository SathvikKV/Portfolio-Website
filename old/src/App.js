import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>
          Hi, I'm <span className="highlight">Sathvik</span> 👋
        </h2>
        <p>Welcome to my digital portfolio – explore my journey below!</p>
        <Link to="/about" className="hero-button">
          Learn More About Me 📖
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>© 2025 Sathvik Vadavatha | Built with 💻 & 🚀</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
