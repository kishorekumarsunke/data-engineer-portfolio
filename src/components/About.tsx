'use client'

import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateProgress, setAnimateProgress] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimateProgress(true), 500)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-white">
              Empowering Ideas Through Technology
            </h3>
            <div className="space-y-4 text-slate-300">
              <p className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                Specializing in React, I build responsive and scalable web applications with intuitive user interfaces. My expertise includes developing efficient front-end solutions integrated seamlessly with back-end services using Node.js and Express.js, ensuring optimal user experience and performance.
              </p>
              <p className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                Experienced in creating robust ETL/ELT pipelines, I leverage Azure Data Factory, Databricks, and Synapse Analytics to optimize data workflows. My focus is on data governance, security, and improving analytical capabilities, empowering effective, data-driven decision-making.
              </p>
              <p className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                I develop engaging, cross-platform mobile apps using React Native, Firebase, and Expo. My work emphasizes real-time data integration, intuitive UX/UI design, and scalable app architecture, delivering enhanced user satisfaction and functionality.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className={`grid grid-cols-2 gap-6 pt-6 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 group">
                <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                <div className="text-sm text-slate-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Skills Progress */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-white">
              Core Competencies
            </h3>
            
            {[
              { skill: 'React & React Native', level: 95 },
              { skill: 'Azure Cloud (ADF, Databricks, Synapse)', level: 85 },
              { skill: 'Firebase & Expo', level: 80 },
              { skill: 'MongoDB & SQL Databases', level: 90 },
              { skill: 'Data Visualization (Power BI, Qlik)', level: 90 },
              { skill: 'AI/ML (Python, Scikit-learn)', level: 85 },
              { skill: 'DevOps (Git, Azure DevOps)', level: 80 },
            ].map((item, index) => (
              <div key={index} className={`space-y-2 transform transition-all duration-500`} style={{ transitionDelay: `${1000 + (index * 150)}ms` }}>
                <div className="flex justify-between">
                  <span className="text-slate-300 font-medium">
                    {item.skill}
                  </span>
                  <span className="text-blue-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{ 
                      width: animateProgress ? `${item.level}%` : '0%',
                      transitionDelay: `${1200 + (index * 150)}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
