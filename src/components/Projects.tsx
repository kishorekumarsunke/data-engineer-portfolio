import { ExternalLink, Github, Database, Cloud, Zap } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Real-time Analytics Pipeline",
      description: "Built a scalable real-time data pipeline using Apache Kafka, Spark Streaming, and AWS services to process 1M+ events per second for e-commerce analytics.",
      technologies: ["Apache Kafka", "Spark Streaming", "AWS Kinesis", "ElasticSearch", "Python"],
      features: [
        "Real-time event processing",
        "Auto-scaling infrastructure",
        "Data quality monitoring",
        "Custom alerting system"
      ],
      icon: <Zap className="w-6 h-6" />,
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Modern Data Warehouse",
      description: "Designed and implemented a cloud-native data warehouse using Snowflake, dbt, and Airflow for a financial services company.",
      technologies: ["Snowflake", "dbt", "Apache Airflow", "Python", "SQL"],
      features: [
        "Dimensional data modeling",
        "Automated data quality tests",
        "Incremental data loading",
        "Performance optimization"
      ],
      icon: <Database className="w-6 h-6" />,
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Multi-Cloud Data Lake",
      description: "Architected a multi-cloud data lake solution using Terraform, Delta Lake, and Apache Spark for data science and ML workloads.",
      technologies: ["Delta Lake", "Apache Spark", "Terraform", "AWS S3", "Azure Data Lake"],
      features: [
        "ACID transactions on data lake",
        "Schema evolution support",
        "Time travel capabilities",
        "Cross-cloud data synchronization"
      ],
      icon: <Cloud className="w-6 h-6" />,
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Data Quality Framework",
      description: "Developed a comprehensive data quality framework with automated testing, monitoring, and alerting for enterprise data pipelines.",
      technologies: ["Great Expectations", "Apache Airflow", "PostgreSQL", "Grafana", "Python"],
      features: [
        "Automated data profiling",
        "Custom quality rules",
        "Real-time monitoring",
        "Detailed reporting dashboard"
      ],
      icon: <Database className="w-6 h-6" />,
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Streaming ETL Platform",
      description: "Built a low-latency streaming ETL platform using Apache Flink and Kubernetes for processing IoT sensor data.",
      technologies: ["Apache Flink", "Kubernetes", "Apache Kafka", "InfluxDB", "Scala"],
      features: [
        "Sub-second latency processing",
        "Exactly-once semantics",
        "Auto-scaling based on load",
        "Complex event processing"
      ],
      icon: <Zap className="w-6 h-6" />,
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "/api/placeholder/400/250"
    },
    {
      title: "ML Feature Store",
      description: "Implemented a feature store using Feast and Redis for managing and serving ML features across multiple data science teams.",
      technologies: ["Feast", "Redis", "Apache Spark", "MLflow", "Python"],
      features: [
        "Online and offline feature serving",
        "Feature versioning and lineage",
        "Point-in-time correctness",
        "Feature monitoring and drift detection"
      ],
      icon: <Database className="w-6 h-6" />,
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      image: "/api/placeholder/400/250"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A showcase of data engineering projects demonstrating expertise in building 
            scalable, reliable, and efficient data infrastructure solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                    <div className="text-blue-600 dark:text-blue-400">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
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
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
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
                    className="flex items-center px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
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
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
