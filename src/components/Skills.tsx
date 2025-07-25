'use client'

import { Database, Cloud, Zap, Settings, BarChart, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [certificationsVisible, setCertificationsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const certObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCertificationsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('skills')
    const certSection = document.getElementById('certifications')
    
    if (section) observer.observe(section)
    if (certSection) certObserver.observe(certSection)

    return () => {
      observer.disconnect()
      certObserver.disconnect()
    }
  }, [])

  const skillCategories = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Storage & Processing",
      skills: [
        "Apache Spark", "Apache Kafka", "Apache Airflow", "Hadoop",
        "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
        "Snowflake", "BigQuery", "Redshift"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Platforms",
      skills: [
        "AWS (S3, EMR, Glue, Lambda)", "Google Cloud Platform", "Microsoft Azure",
        "Databricks", "Terraform", "CloudFormation"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Programming & Tools",
      skills: [
        "Python", "SQL", "Scala", "Java", "R",
        "Docker", "Kubernetes", "Git", "Jenkins", "GitHub Actions"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Data Engineering",
      skills: [
        "ETL/ELT Pipelines", "Data Modeling", "Data Warehousing",
        "Stream Processing", "Batch Processing", "Data Lakes"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics & Visualization",
      skills: [
        "Apache Superset", "Tableau", "Power BI", "Grafana",
        "Jupyter Notebooks", "Pandas", "NumPy", "Matplotlib"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Governance & Quality",
      skills: [
        "Data Quality Monitoring", "Data Lineage", "Data Cataloging",
        "GDPR Compliance", "Data Security", "Access Control"
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive expertise across the modern data engineering stack, 
            from infrastructure to analytics and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-700 hover:border-slate-600 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} hover:scale-105 hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-900/50 rounded-lg mr-4 group-hover:bg-blue-800/70 transition-colors duration-300 group-hover:scale-110 transform">
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 group-hover:rotate-12 transform">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-block bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-900/50 hover:text-blue-300 transition-all duration-300 hover:scale-105 transform cursor-default"
                    style={{ 
                      animationDelay: `${(index * 200) + (skillIndex * 50)}ms`,
                      animation: isVisible ? 'slideInRight 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div id="certifications" className="mt-16">
          <h3 className={`text-2xl font-bold text-center text-white mb-8 transform transition-all duration-1000 delay-200 ${certificationsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "AWS Certified Data Engineer",
              "Google Cloud Professional Data Engineer",  
              "Azure Data Engineer Associate",
              "Databricks Certified Associate"
            ].map((cert, index) => (
              <div 
                key={index}
                className={`bg-slate-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-500 border border-slate-700 group transform hover:scale-105 hover:-translate-y-2 hover:border-blue-500/50 ${certificationsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
                style={{ transitionDelay: `${400 + (index * 150)}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Shield className="w-8 h-8 text-white group-hover:animate-pulse relative z-10" />
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300/50 transition-all duration-300"></div>
                </div>
                <h4 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors duration-300 mb-2">
                  {cert}
                </h4>
                <div className="mt-2 h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ${certificationsVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: `${600 + (index * 150)}ms` }}></div>
                </div>
                <div className={`mt-2 text-xs text-blue-400 opacity-0 transition-all duration-500 ${certificationsVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${800 + (index * 150)}ms` }}>
                  ✓ Certified
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
