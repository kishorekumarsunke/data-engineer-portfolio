'use client'

import { ExternalLink, Github, Database, Cloud, Zap } from 'lucide-react'
import { ShoppingCart, HeartPulse, Gamepad, BookOpen, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const Projects = () => {
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

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

const projects = [
  {
    title: "Taste Traverse",
    description: "An online food ordering and dining platform with real-time order tracking and dynamic restaurant listings.",
    technologies: ["React", "Node.js", "MongoDB", "Azure Functions", "SignalR"],
    features: [
      "User authentication with Clerk",
      "Dynamic restaurant and menu listings",
      "Real‑time order status updates",
      "Responsive design"
    ],
    icon: <ShoppingCart className="w-6 h-6" />,
    githubUrl: "https://github.com/yourusername/taste-traverse",
    liveUrl: "https://taste-traverse.example.com",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Wellness Wave",
    description: "A mental wellness companion app offering AI‑driven journaling prompts and secure data storage.",
    technologies: ["React Native", "Firebase", "Groq", "GitHub Actions", "Expo"],
    features: [
      "Personalized AI journaling prompts",
      "Secure Firestore data storage",
      "CI/CD pipeline with GitHub Actions",
      "Cross‑platform support"
    ],
    icon: <HeartPulse className="w-6 h-6" />,
    githubUrl: "https://github.com/yourusername/wellness-wave",
    liveUrl: "https://wellness-wave.example.com",
    image: "/api/placeholder/400/250"
  },
  {
    title: "End-to-End Azure Data Engineering Pipeline",
    description: "Comprehensive data engineering solution on Azure for healthcare analytics with ETL, storage, and dashboards.",
    technologies: ["Azure Data Factory", "Data Lake Storage Gen2", "Databricks", "Synapse Analytics", "Power BI"],
    features: [
      "Orchestrated ETL workflows",
      "Scalable data lake storage",
      "Data transformation and enrichment",
      "Interactive Power BI dashboards"
    ],
    icon: <Database className="w-6 h-6" />,
    githubUrl: "https://github.com/yourusername/azure-data-pipeline",
    liveUrl: "https://azure-pipeline.example.com",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Back to Home - Campus Quest",
    description: "A 2D educational game guiding kids through a campus map with path tracking and step counter.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS", "ES6"],
    features: [
      "Animated movement controls",
      "Path visualization",
      "Step counting tracker",
      "Randomized start location"
    ],
    icon: <Gamepad className="w-6 h-6" />,
    githubUrl: "https://github.com/yourusername/campus-quest",
    liveUrl: "https://campus-quest.example.com",
    image: "/api/placeholder/400/250"
  },
  {
    title: "EdTech Resource Portal",
    description: "MERN‑stack platform to digitize course materials with role‑based authentication and secure APIs.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "RESTful APIs"],
    features: [
      "Role‑based user authentication",
      "Secure content delivery",
      "Responsive React interface",
      "Reduced paper usage by 60%"
    ],
    icon: <BookOpen className="w-6 h-6" />,
    githubUrl: "https://github.com/yourusername/edtech-portal",
    liveUrl: "https://edtech-portal.example.com",
    image: "/api/placeholder/400/250"
  },
  {
    title: "ML‑Powered Sentiment Analysis Tool",
    description: "End‑to‑end ML pipeline for social media sentiment analysis with transformer models and dashboards.",
    technologies: ["Python", "NLTK", "Transformers", "FastAPI", "Power BI"],
    features: [
      "Text preprocessing and tokenization",
      "Fine‑tuned transformer inference",
      "Azure App Service deployment",
      "Sentiment trend dashboards"
    ],
    icon: <TrendingUp className="w-6 h-6" />,
    githubUrl: "https://github.com/yourusername/sentiment-tool",
    liveUrl: "https://sentiment-tool.example.com",
    image: "/api/placeholder/400/250"
  }
]

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A showcase of data engineering projects demonstrating expertise in building 
            scalable, reliable, and efficient data infrastructure solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-700 group transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500">
                <div className="text-white text-6xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-900/50 rounded-lg mr-3 group-hover:bg-blue-800/70 transition-colors duration-300 group-hover:scale-110 transform">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group-hover:text-slate-200 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-blue-300 transition-colors duration-300 group-hover:scale-125 transform"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-full font-medium hover:bg-blue-800/70 hover:text-blue-200 transition-all duration-300 hover:scale-105 transform cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group/button"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/button:rotate-12 transition-transform duration-300" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Link */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/25 group relative overflow-hidden"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center">
              <Github className="w-5 h-5 mr-2 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
              <span className="group-hover:text-white transition-colors duration-300">View All Projects on GitHub</span>
            </div>
            
            {/* Pulsing border */}
            <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/30 group-hover:animate-pulse transition-all duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
