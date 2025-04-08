import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      <Navbar showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      <main className='lg:px-16'>
        <Home />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <About />
          <Skills />
          {/* <Resume /> */}
        </div>
        {/* <About /> */}
        <Projects />
        {/* <Skills /> */}
        {/* <Resume /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;