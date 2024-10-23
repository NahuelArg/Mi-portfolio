import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Welcome />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
