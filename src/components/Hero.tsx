'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth initial animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center pt-20 pb-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-500/5 rounded-full animate-bounce-slow delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-cyan-500/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-pink-500/5 rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <div className="space-y-6 flex flex-col justify-center h-full">
          {/* Profile Image */}
          <div className={`mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-800 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
            <img
              src="/images/profile.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-500"
            />
          </div>
          
          {/* Name and Title */}
          <div className="space-y-3">
            <h1 className={`text-4xl md:text-6xl font-bold text-white transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block hover:text-blue-400 transition-colors duration-300">Kishore</span>{' '}
              <span className="inline-block hover:text-blue-400 transition-colors duration-300 delay-100">Kumar</span>
              <span className="inline-block hover:text-blue-400 transition-colors duration-300 delay-200">,Sunke</span>
            </h1>
            <h2 className={`text-xl md:text-2xl text-blue-400 font-semibold transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block animate-pulse">🚀</span> Big Data Engineer <span className="inline-block animate-pulse delay-500">🚀</span>
            </h2>
            <p className={`text-base md:text-lg text-slate-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              A passionate and motivated Software Developer with extensive experience in data engineering, web, and mobile app development. I specialize in creating scalable, responsive, and efficient solutions leveraging modern technologies and frameworks
            </p>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-slate-700 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sunke-kishore-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-slate-700 group"
            >
              <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </a>
            <a
              href="mailto:kxs0089@mavs.uta.edu"
              className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 border border-slate-700 group"
            >
              <Mail className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
