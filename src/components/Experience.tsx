'use client'

import { Calendar, MapPin, Building } from 'lucide-react'
import { useEffect, useState } from 'react'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('experience')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])
const experiences = [
  {
    title: "Student Assistant",
    company: "UTA Office of Information Technology",
    location: "Arlington, TX",
    period: "Jan 2025 - Present",
    type: "Part-time",
    description: "Provided technical support and software management for campus labs, ensuring system reliability and student success.",
    achievements: [
      "Achieved 75% first-call resolution rate for hardware/software issues",
      "Reduced system downtime by 20% through proactive maintenance",
      "Enhanced student learning by assisting with Python programming exercises"
    ],
    technologies: ["Windows", "macOS", "ServiceNow", "Pharos Printing"]
  },
  {
    title: "Data Engineer Associate",
    company: "Accenture",
    location: "Remote (Client: Zoetis)",
    period: "Oct 2022 - Nov 2023",
    type: "Full-time",
    description: "Designed and optimized data ingestion and processing pipelines using Azure Data Factory and Databricks for the Animal Healthcare domain.",
    achievements: [
      "Increased data ingestion efficiency by 40% through optimized ADF pipelines",
      "Reduced data retrieval times by 20% with Azure Data Lake Storage Gen2",
      "Enhanced data quality by 35% via automated Databricks transforms",
      "Delivered 50% faster analytics with Azure Synapse query optimization"
    ],
    technologies: ["Azure Data Factory", "Azure Databricks", "Data Lake Storage Gen2", "Synapse Analytics", "Power BI"]
  },
  {
    title: "Junior Web Developer",
    company: "Military College of Electronics and Mechanical Engineering",
    location: "Hyderabad, India",
    period: "Apr 2022 - Sep 2022",
    type: "Volunteer",
    description: "Built a MERN-stack EdTech platform to digitize educational materials and streamline access.",
    achievements: [
      "Migrated 75% of course materials online, reducing printing costs by 40%",
      "Implemented role-based authentication to secure content",
      "Optimized front-end performance, improving load times by 30%"
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js"]
  },
  {
    title: "Quality Assurance Intern",
    company: "Virtusa",
    location: "Remote",
    period: "Jan 2022 - Mar 2022",
    type: "Internship",
    description: "Executed functional, regression, and integration testing to ensure software quality and client compliance.",
    achievements: [
      "Reduced post-deployment defects by 30% through rigorous test protocols",
      "Collaborated across teams to resolve critical bugs before release",
      "Improved testing efficiency by automating key regression suites"
    ],
    technologies: ["Selenium", "Postman", "JIRA", "TestRail"]
  }
]

  const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "The University of Texas at Arlington",
    location: "Arlington, TX",
    period: "Jan 2024 - Dec 2025",
    description: "Focused on scalable systems, data engineering, and advanced algorithms."
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Vidya Jyothi Institute of Technology",
    location: "Hyderabad, India",
    period: "Aug 2018 - Jul 2022",
    description: "Specialized in software engineering principles, data structures, and database systems."
  }
]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A progressive career in data engineering with experience across startups 
            and enterprise environments, building scalable data solutions.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold text-white mb-8 text-center transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Professional Experience
          </h3>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-px h-full w-1 md:w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transition-all duration-1500 delay-300 ${isVisible ? 'scale-y-100' : 'scale-y-0'} rounded-full`} style={{ transformOrigin: 'top' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-50 animate-pulse-slow"></div>
            </div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${400 + (index * 200)}ms` }}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900 transition-all duration-500 hover:scale-125 hover:bg-blue-400 z-10 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `${600 + (index * 200)}ms` }}>
                  <div className="absolute inset-1 bg-blue-300 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className={`${index % 2 === 0 
                  ? 'ml-12 md:ml-0 md:w-5/12 md:pr-8 md:text-right' 
                  : 'ml-12 md:ml-auto md:w-5/12 md:pl-8 md:text-left'
                } group`}>
                  <div className={`bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-2 hover:scale-105 relative ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}>
                    
                    {/* Arrow pointing to timeline */}
                    <div className={`hidden md:block absolute top-6 w-0 h-0 ${
                      index % 2 === 0 
                        ? 'right-[-12px] border-l-[12px] border-l-slate-700 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent group-hover:border-l-blue-500/50' 
                        : 'left-[-12px] border-r-[12px] border-r-slate-700 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent group-hover:border-r-blue-500/50'
                    } transition-colors duration-300`}></div>
                    
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full group-hover:bg-blue-800/70 transition-all duration-300">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className={`flex items-center text-slate-300 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Building className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className={`flex items-center text-slate-300 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <MapPin className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className={`flex items-center text-slate-300 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <p className={`text-slate-300 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className={`font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className={`flex items-start text-sm text-slate-300 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                            <div className={`w-1.5 h-1.5 bg-blue-400 rounded-full ${index % 2 === 0 ? 'ml-2 md:mr-0' : 'mr-2'} mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300`}></div>
                            <span className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-200 text-xs rounded hover:bg-blue-600/50 hover:text-white transition-all duration-200 transform hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className={`text-2xl font-bold text-white mb-8 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 transform transition-all duration-800 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${1200 + (index * 200)}ms` }}
              >
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {edu.degree}
                </h4>
                
                <div className="flex items-center text-slate-300 mb-2">
                  <Building className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="font-semibold">{edu.school}</span>
                </div>
                
                <div className="flex items-center text-slate-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                  <span>{edu.location}</span>
                </div>
                
                <div className="flex items-center text-slate-300 mb-4">
                  <Calendar className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                  <span>{edu.period}</span>
                </div>
                
                <p className="text-slate-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
