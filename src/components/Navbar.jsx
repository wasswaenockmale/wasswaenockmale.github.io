import React from 'react';

function Navbar({ showMobileMenu, setShowMobileMenu }) {
  const sections = ['home', 'about', 'projects', /*'skills' ,*/ /*'resume',*/ /*'testimonials',*/ 'contact'];

  return (
    <nav className="fixed z-50 w-full bg-gray-50">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        {/* <img
            src="/android-chrome-512x512.png"
            alt="Enock Wasswa"
            className="w-10 rounded-full shadow-xl"
          /> */}
        <h1 className="text-3xl font-bold text-blue-600 font-tangerine">
          <span className="block sm:hidden">EWM</span>
          <span className="hidden sm:block">Enock Wasswa Male</span>
        </h1>
        <div className="items-center hidden space-x-8 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="font-medium text-gray-600 capitalize transition-colors hover:text-blue-600 font-playfair"
              onClick={() => setShowMobileMenu(false)}
            >
              {section}
            </a>
          ))}
        </div>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-gray-600 md:hidden"
        >
          <i className={`fas ${showMobileMenu ? 'fa-times' : 'fa-bars'} text-xl font-tangerine`} />
        </button>
      </div>
      {showMobileMenu && (
        <div className="bg-white shadow-lg md:hidden">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block px-4 py-3 text-gray-600 capitalize hover:bg-gray-100 font-poppins"
              onClick={() => setShowMobileMenu(false)}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;