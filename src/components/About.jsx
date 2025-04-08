import React from 'react';

function About() {

  return (
    <section id="about" className="px-4 py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center font-playfair">About Me</h2> 
        <div className="grid gap-12 md:grid-cols-1">
          <div>
            <p className="mb-6 text-gray-600 font-poppins">
              I'm a software engineer from Uganda with 2.5 years of experience in mobile app development, specializing in React Native and React. I’ve built and launched apps like Insightify on the Google Play Store, achieving 40 downloads, and I’m currently working on Sumaco.
            </p>
            <p className="mb-6 text-gray-600 font-poppins">
              I'm passionate about using technology to solve real-world problems. I focus on writing clean, efficient code and creating intuitive user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;