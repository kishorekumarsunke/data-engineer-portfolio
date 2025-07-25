import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Tech Corp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead data engineer responsible for designing and implementing enterprise-scale data infrastructure supporting analytics and ML workloads.",
      achievements: [
        "Reduced data pipeline execution time by 60% through optimization and parallelization",
        "Built real-time streaming platform processing 2M+ events per day",
        "Implemented data quality framework reducing data incidents by 80%",
        "Mentored junior engineers and established data engineering best practices"
      ],
      technologies: ["Apache Spark", "Kafka", "AWS", "Python", "Snowflake", "dbt"]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Solutions",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained ETL pipelines and data warehouse solutions for e-commerce and financial clients.",
      achievements: [
        "Designed dimensional data models for 5+ client data warehouses",
        "Automated manual data processes saving 20+ hours per week",
        "Implemented CDC solutions for real-time data synchronization",
        "Collaborated with data scientists to build ML feature pipelines"
      ],
      technologies: ["PostgreSQL", "Apache Airflow", "Docker", "GCP", "BigQuery", "Python"]
    },
    {
      title: "Junior Data Engineer",
      company: "Analytics Startup",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Built foundational data infrastructure and analytics capabilities for a fast-growing startup in the fintech space.",
      achievements: [
        "Created first data warehouse from scratch using modern cloud technologies",
        "Built automated reporting system serving 100+ stakeholders",
        "Implemented data governance practices and documentation standards",
        "Optimized database queries improving dashboard performance by 40%"
      ],
      technologies: ["MySQL", "Python", "AWS S3", "Redshift", "Tableau", "Git"]
    },
    {
      title: "Data Analyst",
      company: "Business Intelligence Corp",
      location: "Chicago, IL",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Analyzed business data and created insights to drive strategic decision-making across multiple departments.",
      achievements: [
        "Built executive dashboards tracking key business metrics",
        "Performed statistical analysis identifying revenue optimization opportunities",
        "Automated monthly reporting processes using Python and SQL",
        "Collaborated with business stakeholders to define data requirements"
      ],
      technologies: ["SQL", "Python", "Excel", "Power BI", "R", "Statistics"]
    }
  ]

  const education = [
    {
      degree: "Master of Science in Data Science",
      school: "University of Technology",
      location: "Boston, MA",
      period: "2016 - 2018",
      description: "Specialized in big data analytics, machine learning, and statistical modeling."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      location: "Austin, TX",
      period: "2012 - 2016",
      description: "Focus on algorithms, data structures, and software engineering principles."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional Experience
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                  <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700">
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-white">
                        {exp.title}
                      </h4>
                      <span className="px-3 py-1 bg-blue-900/50 text-blue-300 text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 dark:text-slate-300 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center text-slate-600 dark:text-slate-300 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <p className="text-slate-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700 text-slate-200 text-xs rounded"
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Education
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700"
              >
                <h4 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h4>
                
                <div className="flex items-center text-slate-300 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{edu.school}</span>
                </div>
                
                <div className="flex items-center text-slate-300 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{edu.location}</span>
                </div>
                
                <div className="flex items-center text-slate-300 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
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
