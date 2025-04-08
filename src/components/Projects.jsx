import React from 'react';
import sumacoIcon from '../assets/sumaco_icon.png'; // Add your screenshot
import visitRuboni from '../assets/sumaco-screenshot.png'

const projects = [
  {
    title: 'Sumaco',
    description: 'The platform helps youth realize your full potential in the world of technology. It has a wealth of materials that provide informative coding hints, hands-on chances, and learning paths.',
    tech: ['React Native', 'Expo', 'Context api', 'Strapi.js', 'Typescript'],
    image: sumacoIcon,
    livelink: 'https://play.google.com/store/apps/details?id=[your-app-id]',
    githubLink: '',
  },
  {
    title: 'Visit Ruboni',
    description: 'The visit ruboni mobile app is your key to exploring the beauty and culture of Ruboni and its surrounding areas.',
    tech: ['React Native', 'Expo', 'Strapi.js', 'Javascript'],
    image: visitRuboni,
    livelink: 'https://www.visitruboni.com/',
    githubLink: '',
  },
  // {
  //   title: 'The Switch',
  //   description: 'Events marketplace for Uganda, where you can find and book events, parties, and other activities happening in your area.',
  //   tech: ['Bare React Native', 'Supabase', 'Typescript'],
  //   image: sumacoIcon,
  //   livelink: 'https://www.theswitchug.com/',
  //   githubLink: 'https://github.com/wasswaenockmale/theSwitch',
  // },
  // {
  //   title: 'SHMS',
  //   description: 'This innovative system is designed for College schools to track, and manage student health information, ensuring students remain safe and healthy.',
  //   tech: ['React', 'Redux', 'Supabase', 'Springboot', 'Typescript', 'Java'],
  //   image: visitRuboni,
  //   livelink: 'https://shrms.netlify.app/',
  //   githubLink: '[your-github-link]',
  // },
];
//  It Centralized Health Records, Facilitate Monitoring and Follow-Up, Facilitate Monitoring and Follow-Up, Support Preventive Care, Enable Treatment Management, Streamline Drug Inventory Managemen
function Projects() {
  return (
    <section id="projects" className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center font-poppins">Projects</h2>
        <p className='mb-10 text-center font-poppins'>
          Here you will find some of the personal and clients projects that
          I created with each project containing its own case study
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <img src={project.image} alt={project.title} className="object-contain w-full h-48" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold font-poppins">{project.title}</h3>
                <p className="mb-4 text-gray-600 font-poppins">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a href={project.githubLink} className="text-blue-600 hover:text-blue-800">
                      <i className="text-xl fab fa-github" />
                    </a>
                  )}
                  {project.playStoreLink && (
                    <a href={project.playStoreLink} className="text-blue-600 hover:text-blue-800">
                      <i className="text-xl fab fa-google-play" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;