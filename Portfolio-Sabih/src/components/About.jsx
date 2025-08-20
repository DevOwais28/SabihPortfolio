import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Education & Background
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I am currently pursuing my Bachelor's degree in Electronic Engineering from 
              <span className="font-semibold text-primary-600"> DUET (2024-2028)</span>, 
              where I'm developing a strong foundation in electronics, circuit design, and embedded systems.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Additionally, I completed a comprehensive Web & Mobile App Development course at 
              <span className="font-semibold text-primary-600"> SMIT (Batch 15)</span>, 
              gaining practical skills in modern web technologies and mobile application development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My unique combination of technical engineering knowledge and HR/management experience 
              allows me to bridge the gap between technical teams and business stakeholders, 
              ensuring effective communication and project success.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg card-hover">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Strong foundation in electronic engineering principles, circuit design, 
                  and embedded systems development with hands-on experience in Arduino and C/C++ programming.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg card-hover">
                <h4 className="font-semibold text-gray-900 mb-2">HR & Management Skills</h4>
                <p className="text-gray-600 text-sm">
                  Proven experience in human resources management, team coordination, 
                  and administrative operations with excellent communication and interpersonal skills.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg card-hover">
                <h4 className="font-semibold text-gray-900 mb-2">Customer Service Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Extensive experience in customer service roles, demonstrating strong problem-solving 
                  abilities and effective communication in high-pressure environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
