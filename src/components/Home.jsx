import React from 'react';

function Home() {
  return (
    <section id="home" className="px-4 pt-24 pb-16">
      <div className="grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl font-playfair">
            Hi, I'm Enock Wasswa
          </h1>
          <h2 className="mb-6 text-2xl text-blue-600 md:text-3xl font-playfair">
            Software Engineer
          </h2>
          <p className="mb-8 text-gray-600 font-poppins">
            I'm a passionate software engineer from Uganda with close to
            <span className='font-bold font-poppins'> 3 years</span> of experience engineering <span className='font-bold font-poppins'>cross-platform mobile apps</span> that deliver seamless user experiences.
            I'm driven to create impactful solutions through code.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 font-poppins"
          >
            Hire Me
          </a>
          {/* <div className="flex mt-8 space-x-6">
            <a href="[your-github-url]" className="text-gray-600 hover:text-blue-600">
              <i className="text-2xl fab fa-github" />
            </a>
            <a href="[your-linkedin-url]" className="text-gray-600 hover:text-blue-600">
              <i className="text-2xl fab fa-linkedin" />
            </a>
            <a href="mailto:[your-email]@gmail.com" className="text-gray-600 hover:text-blue-600">
              <i className="text-2xl fas fa-envelope" />
            </a>
          </div> */}
        </div>
        <div className="relative rounded-full bg-cyan-50">
          <img
            src="/weem-512x512.png"
            alt="Enock Wasswa"
            className="object-contain w-full max-w-md mx-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;