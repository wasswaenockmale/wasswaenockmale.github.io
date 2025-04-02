import React from 'react';

function Resume() {
  return (
    <section id="resume" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-3xl font-bold text-center font-playfair">Resume</h2>
        <div className="mb-12 text-center">
          <a
            href="https://docs.google.com/document/d/1NCFPCXo-BECzUMrSSE-w1FFrNV3kKmcYvhphikQKAWc//export?format=pdf" // Add a link to your resume PDF
            className="px-8 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 font-poppins"
          >
            <i className="mr-2 fas fa-download" />poppins
            Download Resume
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold font-poppins">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">React Native Developer</h4>
                <p className="text-blue-600">Local Company, Uganda</p>
                <p className="text-gray-600">2022 - Present</p>
                <p className="text-gray-600 font-poppins">
                  Developed and launched mobile apps like Insightify (40 downloads) and Sumaco on Google Play Store.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold font-poppins">Education</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">Bachelor’s Degree</h4>
                <p className="text-blue-600">[Your University]</p>
                <p className="text-gray-600">[Graduation Year]</p>
                <p className="text-gray-600 font-poppins">First graduate in my family.</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold font-poppins">Certifications</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">[Certification Name]</h4>
                <p className="text-gray-600">[Year]</p>
              </div>
              {/* Add more certifications if applicable */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;