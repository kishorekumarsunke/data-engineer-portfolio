import { Database, Cloud, Zap, Settings, BarChart, Shield } from 'lucide-react'

const Skills = () => {
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
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive expertise across the modern data engineering stack, 
            from infrastructure to analytics and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-block bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-white mb-8">
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
                className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                  {cert}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
