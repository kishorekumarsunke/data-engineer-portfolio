'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter,Instagram  } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

 const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "kxs0089@mavs.uta.edu",
    href: "mailto:kxs0089@mavs.uta.edu"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "(682) 406-7054",
    href: "tel:+16824067054"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Arlington, TX",
    href: "#"
  }
]

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/kishorekumarsunke",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sunke-kishore-kumar",
    color: "hover:text-blue-600"
  },
  {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://instagram.com/kishore_12_12",
      color: "hover:text-pink-500"
    },
]

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-slate-300 mb-8">
                I&apos;m passionate about data engineering and always excited to discuss 
                new technologies, share knowledge, or explore potential collaborations. 
                Don&apos;t hesitate to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-center space-x-4 group hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: `${300 + (index * 150)}ms` }}>
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center group-hover:bg-blue-800/70 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {info.label}
                    </h4>
                    <a 
                      href={info.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              <h4 className="font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 rounded-lg text-slate-300 ${social.color} transition-all duration-200 hover:scale-110 hover:-translate-y-2 border border-slate-700 group`}
                    aria-label={social.label}
                    style={{ animationDelay: `${800 + (index * 100)}ms` }}
                  >
                    <div className="group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-slate-800 rounded-lg p-8 border border-slate-700 transform transition-all duration-1000 delay-300 hover:border-blue-500/50 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`transform transition-all duration-500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all duration-300 hover:border-slate-500 focus:scale-105"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className={`transform transition-all duration-500 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all duration-300 hover:border-slate-500 focus:scale-105"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className={`transform transition-all duration-500 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 transition-all duration-300 hover:border-slate-500 focus:scale-105"
                  placeholder="What's this about?"
                />
              </div>
              
              <div className={`transform transition-all duration-500 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-700 text-white placeholder-slate-400 resize-none transition-all duration-300 hover:border-slate-500 focus:scale-105"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <div className={`transform transition-all duration-500 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 hover:-translate-y-1 active:scale-95 group"
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    <Send className="w-5 h-5" />
                  </div>
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-300">
            © 2025 Kishore Kumar Sunke. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
