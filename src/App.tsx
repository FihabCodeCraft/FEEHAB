import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Award, 
  Users, 
  Clock, 
  Star,
  ExternalLink,
  Download,
  ChevronDown,
  Gamepad2,
  Trophy,
  Target,
  Zap
} from 'lucide-react';
import WorkHub from './WorkHub';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showWorkHub, setShowWorkHub] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'gaming', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Smooth wheel scrolling
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 50) {
        e.preventDefault();
        const scrollAmount = e.deltaY > 0 ? 100 : -100;
        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setShowWorkHub(false);
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      setActiveSection(sectionId);
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWorkHubClick = () => {
    setShowWorkHub(true);
    setIsMenuOpen(false);
  };

  const handleBackFromWorkHub = () => {
    setShowWorkHub(false);
  };

  if (showWorkHub) {
    return <WorkHub onBack={handleBackFromWorkHub} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/feehabss.png" 
                alt="FEEHAB Logo" 
                className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500/50"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'gaming', label: 'Gaming' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={handleWorkHubClick}
                  className="px-3 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  WorkHub
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'gaming', label: 'Gaming' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleWorkHubClick}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                WorkHub
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Profile Image with Shine Effect */}
          <div className="mb-8 relative inline-block">
            <div className="relative overflow-hidden rounded-full">
              <img 
                src="/feehabss.png" 
                alt="MD Yeomun Hasan" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500/50 shadow-2xl"
              />
              {/* Shine Effect Overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shine"></div>
              </div>
            </div>
          </div>

          {/* Animated Name */}
          <div className="mb-6">
            {['F', 'E', 'E', 'H', 'A', 'B'].map((letter, index) => (
              <span
                key={index}
                className="inline-block text-6xl sm:text-8xl font-black animate-letter-appear"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-300 animate-fade-in-up animation-delay-800">
            MD Yeomun Hasan
          </h2>
          
          <p className="text-xl sm:text-2xl mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold animate-fade-in-up animation-delay-1000">
            Full Stack Developer & Creative Technologist
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-2000">
            Crafting digital experiences with modern technologies. Passionate about creating innovative solutions 
            that bridge the gap between design and functionality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-4000">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400">Get to know the person behind the code</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 2 years of experience in creating 
                digital solutions that make a difference. My journey began with curiosity about 
                how websites work, and it has evolved into a deep love for crafting exceptional 
                user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud 
                platforms. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or gaming with friends.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-400">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-center">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Code className="w-6 h-6 text-blue-400" />
                    <span>Full Stack Web Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="w-6 h-6 text-purple-400" />
                    <span>UI/UX Design & Prototyping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="w-6 h-6 text-green-400" />
                    <span>Database Design & Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-yellow-400" />
                    <span>API Development & Integration</span>
                  </div>
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400">Tools and technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
              <div className="space-y-3">
                {[
                  { name: 'React.js', level: 90 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'Tailwind CSS', level: 95 },
                  { name: 'Next.js', level: 80 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-progress-sweep"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
              <div className="space-y-3">
                {[
                  { name: 'Node.js', level: 88 },
                  { name: 'Express.js', level: 85 },
                  { name: 'MongoDB', level: 80 },
                  { name: 'PostgreSQL', level: 75 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full animate-progress-sweep"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Tools & Others</h3>
              <div className="space-y-3">
                {[
                  { name: 'Git & GitHub', level: 90 },
                  { name: 'Docker', level: 70 },
                  { name: 'AWS', level: 65 },
                  { name: 'Figma', level: 80 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full animate-progress-sweep"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Section */}
      <section id="gaming" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gaming Achievements
            </h2>
            <p className="text-xl text-gray-400">My competitive gaming journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Valorant */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-700/20 p-6 rounded-xl border border-red-500/30 hover:border-red-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                  <img 
                    src="/valorant-logo-transparent-free-png.png" 
                    alt="Valorant" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 animate-shine-text neon-glow">Valorant</h3>
                <div className="text-2xl font-bold text-red-400 mb-2 animate-shine-text neon-glow">
                  Immortal 2
                </div>
                <p className="text-gray-400 text-sm">Competitive Rank</p>
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400">Top 1% Players</span>
                </div>
              </div>
            </div>

            {/* PUBG Mobile */}
            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-700/20 p-6 rounded-xl border border-orange-500/30 hover:border-orange-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-12 h-12 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 animate-shine-text neon-glow">PUBG Mobile</h3>
                <div className="text-2xl font-bold text-orange-400 mb-2 animate-shine-text neon-glow">
                  Conqueror
                </div>
                <p className="text-gray-400 text-sm">Season Rank</p>
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <Target className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Elite Tier</span>
                </div>
              </div>
            </div>

            {/* Free Fire */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-700/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 animate-shine-text neon-glow">Free Fire</h3>
                <div className="text-2xl font-bold text-blue-400 mb-2 animate-shine-text neon-glow">
                  Grandmaster
                </div>
                <p className="text-gray-400 text-sm">Ranked Mode</p>
                <div className="flex items-center justify-center mt-4 space-x-2">
                  <Star className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400">Master Level</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-700/50 p-6 rounded-xl inline-block">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Gaming Philosophy</h3>
              <p className="text-gray-300 max-w-2xl">
                Gaming has taught me strategic thinking, quick decision-making, and teamwork - 
                skills that directly translate to my development work. The precision required in 
                competitive gaming mirrors the attention to detail needed in coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="E-Commerce Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">E-Commerce Platform</h3>
                  <p className="text-gray-300 text-sm">Full-stack online store with payment integration</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">MongoDB</span>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Task Management App"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Task Management App</h3>
                  <p className="text-gray-300 text-sm">Collaborative project management tool</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">Tailwind</span>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Weather Dashboard"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Weather Dashboard</h3>
                  <p className="text-gray-300 text-sm">Real-time weather tracking application</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Vue.js</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">API</span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">Chart.js</span>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center space-x-1">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/projects-showcase.html" 
              target="_blank"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">Let's work together on your next project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white">yeomunhasan@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p className="text-white">+880 1234567890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700/50 p-8 rounded-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/feehabss.png" 
                alt="FEEHAB Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              &copy; 2025 MD Yeomun Hasan (FEEHAB). All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with React, TypeScript, and Tailwind CSS 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;