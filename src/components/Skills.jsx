import React from 'react';

const skills = [
  { name: 'React Native', level: 85 },
  { name: 'React', level: 80 },
  { name: 'JavaScript', level: 90 },
  { name: 'Typescript', level: 90 },
  { name: 'Expo', level: 85 },
  // { name: 'Formik', level: 80 },
  { name: 'Context API', level: 80 },
  { name: 'Java', level: 70 },
  { name: 'UI/UX', level: 70 },
  { name: 'API Integration', level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="px-4 py-16 bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center font-poppins">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="font-semibold font-poppins">{skill.name}</h3>
              {/* <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-600 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;