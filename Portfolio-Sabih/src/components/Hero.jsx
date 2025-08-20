import React from 'react';

const Hero = () => {

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container-padding section-padding">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
              SYED SABIH MAZHAR
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-blue-200 animate-slide-up">
              Electronic Engineer
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Passionate about bridging the gap between technology and human resources, 
              combining technical expertise with management skills to create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="/resume.pdf"
                download="Syed-Sabih-Mazhar-Resume.pdf"
                className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
              <a 
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <img
                    src="/chikni.jpg"
                    alt="Syed Sabih Mazhar"
                    className="w-full h-full rounded-full object-cover object-top"
                    style={{ backgroundColor: 'transparent' }}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0iIzZCNzI4MCIgZm9udC1zaXplPSIxNCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPjx0c3BhbiB4PSIxMDAiIGR5PSIuM2VtIj5Qcm9maWxlPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPg==';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
