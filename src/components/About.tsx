const About = () => {
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
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Transforming Data into Insights
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                I&apos;m a passionate Data Engineer with extensive experience in designing, 
                building, and maintaining scalable data infrastructure. My expertise spans 
                across modern data stack technologies including cloud platforms, big data 
                frameworks, and real-time processing systems.
              </p>
              <p>
                With a strong background in software engineering and data architecture, 
                I specialize in creating robust ETL/ELT pipelines, implementing data 
                governance practices, and optimizing data workflows for performance and reliability.
              </p>
              <p>
                I&apos;m committed to staying at the forefront of data engineering trends 
                and continuously learning new technologies to solve complex data challenges.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-slate-300">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Skills Progress */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Core Competencies
            </h3>
            
            {[
              { skill: 'Python & SQL', level: 95 },
              { skill: 'Apache Spark & Kafka', level: 90 },
              { skill: 'AWS/GCP/Azure', level: 85 },
              { skill: 'Docker & Kubernetes', level: 80 },
              { skill: 'Data Modeling & Warehousing', level: 90 },
              { skill: 'Apache Airflow', level: 85 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-300 font-medium">
                    {item.skill}
                  </span>
                  <span className="text-blue-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
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
