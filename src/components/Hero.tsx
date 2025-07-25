'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-800">
            <img
              src="/images/profile.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-300"
            />
          </div>
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Kishore Kumar,Sunke
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold">
              Data Engineer
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Experienced Data Engineering professional proficient in Azure data technologies and ETL processes. Skilled in SQL, PySpark, and Azure Data Factory. Committed to ensuring data quality and governance while delivering tailored solutions to meet business needs. Currently pursuing an MSc in Computer Science from UT Arlington. Let&apos;s connect to explore how we can drive data-driven innovation together.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-700"
            >
              <Github className="w-6 h-6 text-slate-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/sunke-kishore-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-700"
            >
              <Linkedin className="w-6 h-6 text-blue-400" />
            </a>
            <a
              href="mailto:kxs0089@mavs.uta.edu"
              className="p-3 bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-700"
            >
              <Mail className="w-6 h-6 text-green-400" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
