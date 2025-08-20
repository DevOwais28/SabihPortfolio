import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Dawood University of Engineering & Technology (DUET)",
      degree: "Bachelor of Engineering in Electronic Engineering",
      period: "2024 – 2028",
      description: "Currently pursuing comprehensive education in electronic engineering with focus on circuit design, embedded systems, and telecommunications. Gaining hands-on experience with modern electronic design tools and methodologies.",
      achievements: ["Strong foundation in electronic principles", "Hands-on circuit design experience", "Embedded systems development", "Signal processing techniques"]
    },
    {
      institution: "Saylani Mass IT Training- SMIT",
      degree: "Web & Mobile App Development",
      period: "Batch 15",
      description: "Completed intensive training program covering full-stack web development, mobile application development, and modern JavaScript frameworks. Gained practical experience in responsive design, API integration, and deployment strategies.",
      achievements: ["Full-stack development skills", "Responsive web design expertise", "API integration experience", "Mobile-first development approach"]
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Credentials
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 lg:p-8 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {edu.period}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
