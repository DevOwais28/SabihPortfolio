import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Travel Website Clone",
      description: "A fully responsive travel booking website built using core web technologies: HTML, CSS, and JavaScript. Features modern design with destination search, booking functionality, and responsive layout for all devices.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubLink: "https://github.com/Engsabih/travelwebsite.git",
      liveLink: "https://thenewtravelwebsite.netlify.app/",
      image: "/travel.jpg"
    },
    {
      title: "Figma Clone",
      description: "A pixel-perfect recreation of Figma's interface using HTML, CSS, and JavaScript. Features responsive design, modern UI elements, and interactive components that mirror Figma's design system.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      githubLink: "https://github.com/Engsabih/figmadupe.git",
      liveLink: "https://figmasmit15.netlify.app/",
      image: "/figma.jpg"
    },
    {
      title: "Variable Power Supply",
      description: "Designed and built a variable power supply unit with adjustable voltage output (0-30V) and current limiting features. Includes digital display and safety protections.",
      technologies: ["Circuit Design", "Arduino", "Power Electronics", "PCB Design"],
      image: "PowerSupply.jpg"
    },
    {
      title: "4-in-1 Automation House",
      description: "Smart home automation system integrating four key features: lighting control, temperature monitoring, security system, and voice control. Built using IoT principles and wireless communication.",
      technologies: ["IoT", "Arduino", "Sensors", "Wireless Communication"],
      image: "/automationHouse.jpg"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {(project.title === "Travel Website Clone" || project.title === "Figma Clone") && (
                  <div className="flex gap-4">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-md transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-md transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
