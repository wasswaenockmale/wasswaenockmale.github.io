import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const skillsChart = echarts.init(document.getElementById('skillsChart'));
    const option = {
      animation: false,
      radar: {
        indicator: [
          { name: 'React Native', max: 100 },
          { name: 'TypeScript', max: 100 },
          { name: 'JavaScript', max: 100 },
          { name: 'Firebase', max: 100 },
          { name: 'UI/UX', max: 100 },
          { name: 'API Integration', max: 100 }
        ]
      },
      series: [{
        type: 'radar',
        data: [{
          value: [95, 90, 95, 85, 88, 92],
          name: 'Skills',
          areaStyle: {
            color: 'rgba(0, 123, 255, 0.2)'
          },
          lineStyle: {
            color: '#007bff'
          }
        }]
      }]
    };
    skillsChart.setOption(option);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#007bff]">Enock Wasswa</h1>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`${activeSection === item.toLowerCase() ? 'text-[#007bff]' : 'text-gray-600'} hover:text-[#007bff] transition-colors cursor-pointer whitespace-nowrap !rounded-button`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-[#007bff] cursor-pointer whitespace-nowrap !rounded-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">Hi, I'm Enock Wasswa</h1>
            <h2 className="text-3xl text-[#007bff] mb-6">React Native Developer</h2>
            <p className="text-gray-600 mb-8 font-poppins">
            Results-driven React Native Developer with 2.5+ years of experience building and deploying
            cross-platform mobile applications with a focus on performance, scalability, and user experience.
          </p>
            <button className="bg-[#007bff] text-white px-8 py-3 rounded-full hover:bg-[#0056b3] transition-colors cursor-pointer whitespace-nowrap !rounded-button">
              Hire Me
            </button>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-gray-600 hover:text-[#007bff] cursor-pointer">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#007bff] cursor-pointer">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#007bff] cursor-pointer">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://public.readdy.ai/ai/img_res/2beb296ed046310bc52d100a881ba80d.jpg"
              alt="Enock Wasswa"
              className="rounded-full w-full max-w-md mx-auto shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in mobile app development, I've had the privilege of working with startups and established companies alike, bringing innovative ideas to life through code.
              </p>
              <p className="text-gray-600 mb-6">
                My expertise lies in creating seamless, user-friendly mobile applications using React Native, backed by robust architecture and modern development practices.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Experience Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-[#007bff] mr-3"></i>
                    <span>Senior React Native Developer at TechCorp</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-[#007bff] mr-3"></i>
                    <span>Lead Mobile Developer at StartupX</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-[#007bff] mr-3"></i>
                    <span>Mobile App Consultant for Fortune 500 companies</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <div id="skillsChart" style={{ height: '300px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'HealthTrack Pro',
                description: 'A comprehensive health monitoring application with real-time tracking',
                image: 'https://public.readdy.ai/ai/img_res/6d34862139bcd7b5d6dc428dd563ed3b.jpg',
                tech: ['React Native', 'Firebase', 'TypeScript']
              },
              {
                title: 'EcoShare',
                description: 'Social platform for environmental awareness and sustainable living',
                image: 'https://public.readdy.ai/ai/img_res/55961ed8d73fe6efcb020ca9be96b54d.jpg',
                tech: ['React Native', 'Node.js', 'MongoDB']
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-[#007bff] px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#007bff] hover:text-blue-700 cursor-pointer">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="#" className="text-[#007bff] hover:text-blue-700 cursor-pointer">
                      <i className="fab fa-google-play text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#007bff] outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#007bff] outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#007bff] outline-none h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#007bff] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <div className="text-center">
              <i className="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you soon!</p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#007bff] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="bg-white h-full w-64 p-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`${activeSection === item.toLowerCase() ? 'text-[#007bff]' : 'text-gray-600'} hover:text-[#007bff] transition-colors cursor-pointer whitespace-nowrap !rounded-button`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

