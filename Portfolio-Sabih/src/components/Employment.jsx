import React from 'react';

const Employment = () => {
  const employmentHistory = [
    {
      title: "Healthcare Call Center Agent",
      company: "Leo BPO Solution",
      period: "June 2025 – Present",
      description: "Providing exceptional customer service in healthcare support, handling patient inquiries, appointment scheduling, and maintaining accurate records while ensuring HIPAA compliance.",
      skills: ["Customer Service", "Healthcare Support", "HIPAA Compliance", "Data Entry", "Communication"]
    },
    {
      title: "Job Application & Account Management Assistant",
      company: "Freelance/Contract",
      period: "February 2025 – May 2025",
      description: "Assisted clients with job applications, resume optimization, and account management across various platforms. Provided personalized career guidance and application support.",
      skills: ["Resume Writing", "Job Applications", "Account Management", "Career Guidance", "Client Relations"]
    },
    {
      title: "HR Manager",
      company: "D2 Soft Intellicence",
      period: "March 2024 – September 2024",
      description: "Led human resources operations including recruitment, employee relations, performance management, and policy development. Managed a team of HR professionals and coordinated with senior management.",
      skills: ["HR Management", "Recruitment", "Employee Relations", "Performance Management", "Team Leadership"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Employment History
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {employmentHistory.map((job, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 lg:p-8 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-primary-600 font-semibold text-lg mb-1">
                    {job.company}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {job.period}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employment;
