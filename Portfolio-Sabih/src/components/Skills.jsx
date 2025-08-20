import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C", level: 75 },
    { name: "C++", level: 70 },
    { name: "Arduino", level: 85 },
    { name: "Circuit Designing", level: 80 },
  ];

  const softSkills = [
    "Microsoft Office",
    "Communication Skills",
    "HR Management",
    "Team Leadership",
    "Problem Solving",
    "Project Management",
    "Customer Service"
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="card-hover p-4 rounded-lg bg-gray-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-primary-50 text-primary-700 text-center py-3 px-4 rounded-lg card-hover"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Key Competencies
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Strong analytical and problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Excellent communication and interpersonal skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Project management and team coordination experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Customer service excellence in high-pressure environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
