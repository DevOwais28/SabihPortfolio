import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Runner-up – Student Semester Expo 2024",
      issuer: "Dawood University of Engineering & Technology",
      description: "Achieved runner-up position for the Variable Power Supply project, demonstrating excellence in electronic design and practical implementation of engineering concepts.",
      project: "Variable Power Supply",
      date: "2024"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 card-hover animate-scale-in"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Project:</h4>
                    <p className="text-gray-700">{cert.project}</p>
                    <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
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

export default Certifications;
