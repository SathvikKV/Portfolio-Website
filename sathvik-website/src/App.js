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
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <h2>
            Hello, I'm <span>Sathvik</span>
          </h2>
          <p>Welcome to my portfolio website!</p>
        </div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Sathvik's Portfolio</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">About</Link>
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
            {/* Home route with Hero and About sections */}
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Sathvik Vadavatha</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
