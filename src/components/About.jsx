import React from 'react';
// import * as echarts from 'echarts';

function About() {
  // useEffect(() => {
  //   const skillsChart = echarts.init(document.getElementById('skillsChart'));
  //   const skillsOption = {
  //     animation: false,
  //     radar: {
  //       indicator: [
  //         { name: 'React Native', max: 100 },
  //         { name: 'React', max: 100 },
  //         { name: 'JavaScript', max: 100 },
  //         { name: 'Expo', max: 100 },
  //         { name: 'UI/UX', max: 100 },
  //         { name: 'API Integration', max: 100 },
  //       ],
  //     },
  //     series: [
  //       {
  //         type: 'radar',
  //         data: [
  //           {
  //             value: [85, 80, 90, 85, 70, 80],
  //             name: 'Skills',
  //             areaStyle: { color: 'rgba(0, 123, 255, 0.2)' },
  //             lineStyle: { color: '#007bff' },
  //           },
  //         ],
  //       },
  //     ],
  //   };
  //   skillsChart.setOption(skillsOption);

  //   return () => skillsChart.dispose();
  // }, []);

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
            {/* <div id="skillsChart" className="w-full h-[400px]" /> */}
          </div>
          {/* <div className="grid gap-6">
            {['React Native', 'React', 'JavaScript', 'Expo', 'Formik', 'Context API'].map((skill) => (
              <div
                key={skill}
                className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-semibold font-playfair">{skill}</h3>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;