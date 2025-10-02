import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Palette,
  ArrowRight,
  ExternalLink,
  Download,
  Star,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  X,
  Menu,
  ChevronDown,
  Zap,
  Target,
  Lightbulb,
  Heart,
  Coffee,
  GamepadIcon,
  Trophy,
  Gamepad2
} from 'lucide-react';
import WorkHub from './WorkHub';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'portfolio' | 'workhub'>('portfolio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Letter animation for FEEHAB
  const letters = ['F', 'E', 'E', 'H', 'A', 'B'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  if (currentView === 'workhub') {
    return <WorkHub onBack={() => setCurrentView('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/FEEHAB copy copy.png" 
                alt="FEEHAB Logo" 
                className="h-10 w-auto"
              />
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === section
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-gradient-shift"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Animated FEEHAB Letters */}
          <div className="mb-8">
            <div className="flex justify-center items-center space-x-2 mb-4">
              {letters.map((letter, index) => (
                <span
                  key={index}
                  className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-letter-appear neon-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 animate-fade-in-delayed">
              MD Yeomun Hasan
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-600">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Full Stack Developer & Creative Technologist
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-800">
            Crafting exceptional digital experiences with modern technologies. Passionate about creating scalable solutions and competitive gaming.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in-up animation-delay-1000">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-2000">
            <a 
              href="https://github.com/feehab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/feehab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@feehab.dev" 
              className="p-3 bg-gray-800/50 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300">Get to know the person behind the code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-glow"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
                  <img
                    src="/IMG_20250930_060032_004.png"
                    alt="MD Yeomun Hasan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">My Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm passionate about creating digital solutions that make a real impact. With expertise in modern web technology, 
                  I focus on building scalable applications that solve real-world problems while maintaining exceptional user experiences.
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">What Drives Me</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Technology is constantly evolving, and I love staying at the forefront of innovation. Whether it's exploring new frameworks, 
                  optimizing performance, or diving into competitive gaming strategies, I'm always learning and growing.
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-400" />
                  <h3 className="text-xl font-semibold">Beyond Code</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me strategizing in competitive games, exploring new technologies, 
                  or contributing to open-source projects. I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Bangladesh</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-full">
                  <Coffee className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Coffee Enthusiast</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-full">
                  <GamepadIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Competitive Gamer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-300">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Frontend Development",
                skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Backend Development",
                skills: ["Node.js", "Express", "Python", "Django", "FastAPI"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Database & Cloud",
                skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Development",
                skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "UI/UX Design",
                skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "DevOps & Tools",
                skills: ["Git", "CI/CD", "Linux", "Nginx", "Monitoring"],
                color: "from-indigo-500 to-blue-500"
              }
            ].map((category, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-24 bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} animate-progress-sweep`}
                          style={{ animationDelay: `${index * 0.2 + skillIndex * 0.1}s` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
                image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                github: "#",
                live: "#",
                featured: true
              },
              {
                title: "Task Management App",
                description: "Collaborative project management tool with real-time updates",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
                github: "#",
                live: "#",
                featured: false
              },
              {
                title: "AI Chat Application",
                description: "Real-time chat app with AI integration and smart responses",
                image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
                tech: ["React", "Python", "OpenAI", "WebSocket"],
                github: "#",
                live: "#",
                featured: true
              },
              {
                title: "Portfolio Website",
                description: "Responsive portfolio site with modern animations",
                image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
                tech: ["Next.js", "Tailwind", "Framer Motion"],
                github: "#",
                live: "#",
                featured: false
              },
              {
                title: "Weather Dashboard",
                description: "Beautiful weather app with location-based forecasts",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
                tech: ["React", "Weather API", "Chart.js"],
                github: "#",
                live: "#",
                featured: false
              },
              {
                title: "Crypto Tracker",
                description: "Real-time cryptocurrency price tracking and portfolio management",
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
                tech: ["React", "CoinGecko API", "Redux"],
                github: "#",
                live: "#",
                featured: true
              }
            ].map((project, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Star className="w-4 h-4 inline mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/projects-showcase.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Experience & Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300">My professional journey and accomplishments</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Senior Full Stack Developer",
                    company: "TechCorp Solutions",
                    period: "2023 - Present",
                    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
                    achievements: ["Increased app performance by 40%", "Led team of 5 developers", "Implemented CI/CD pipeline"]
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Innovations Ltd",
                    period: "2022 - 2023",
                    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create exceptional user experiences.",
                    achievements: ["Delivered 15+ projects on time", "Improved code quality by 60%", "Client satisfaction rate: 98%"]
                  },
                  {
                    title: "Frontend Developer",
                    company: "StartupHub",
                    period: "2021 - 2022",
                    description: "Built responsive web applications and mobile apps. Focused on performance optimization and user experience improvements.",
                    achievements: ["Reduced load time by 50%", "Built 10+ responsive websites", "Implemented modern UI/UX practices"]
                  }
                ].map((job, index) => (
                  <div key={index} className="glass p-6 rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400">{job.title}</h4>
                        <p className="text-gray-300">{job.company}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-400" />
                Education & Gaming
              </h3>
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Computer Science & Engineering</h4>
                      <p className="text-gray-300">University of Technology</p>
                      <p className="text-sm text-gray-400">2019 - 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Specialized in software engineering, algorithms, and system design. Graduated with honors.</p>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Competitive Gaming Achievements</h4>
                      <p className="text-gray-300">VALORANT & Esports</p>
                      <p className="text-sm text-gray-400">2020 - Present</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Radiant Rank in VALORANT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Regional Tournament Winner</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Team Captain & Strategic Leader</span>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Professional Certifications</h4>
                      <p className="text-gray-300">Various Platforms</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">AWS Certified Solutions Architect</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">Google Cloud Professional Developer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-300">MongoDB Certified Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">30+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>

          {/* WorkHub CTA */}
          <div className="mt-16 text-center">
            <div className="glass p-8 rounded-xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-semibold">Looking for Work Opportunities?</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out our WorkHub for available freelance projects and tasks. 
                Perfect for developers, designers, and digital professionals looking to earn extra income.
              </p>
              <button
                onClick={() => setCurrentView('workhub')}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                <Briefcase className="w-5 h-5" />
                <span>Explore WorkHub</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300">Let's discuss your next project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a full-stack developer, want to discuss a collaboration, 
                  or just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:contact@feehab.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
                      contact@feehab.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+8801234567890" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +880 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/feehab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/feehab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:contact@feehab.dev"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/FEEHAB copy copy.png" 
                  alt="FEEHAB Logo" 
                  className="h-10 w-auto"
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  FEEHAB
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Full Stack Developer & Creative Technologist passionate about creating exceptional digital experiences 
                and competitive gaming strategies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/feehab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/feehab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:contact@feehab.dev"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>Consulting</li>
                <li>Gaming Strategy</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MD Yeomun Hasan (FEEHAB). All rights reserved.</p>
            <p className="text-sm mt-1">Built with React, TypeScript, and Tailwind CSS 🚀</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;