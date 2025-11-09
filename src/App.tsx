import React, { useState, useEffect, useRef } from 'react';
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
  Gamepad2, 
  Music, 
  Camera, 
  Briefcase,
  User,
  Award,
  Target,
  Zap,
  Star,
  Trophy,
  Crown,
  Shield,
  Sword
} from 'lucide-react';
import WorkHub from './WorkHub';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('portfolio');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    experience: 0,
    clients: 0
  });

  // Custom cursor tracking
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate');
            if (elementId) {
              setVisibleElements(prev => new Set([...prev, elementId]));
              
              // Animate numbers when stats section is visible
              if (elementId === 'stats') {
                animateNumber('projects', 15, 2000);
                animateNumber('experience', 2, 1500);
                animateNumber('clients', 12, 1800);
              }
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe elements
    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateNumber = (key: keyof typeof animatedNumbers, target: number, duration: number) => {
    const start = 0;
    const startTime = Date.now();
    
    const updateNumber = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(start + (target - start) * progress);
      
      setAnimatedNumbers(prev => ({ ...prev, [key]: current }));
      
      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };
    
    updateNumber();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8 animate-fade-in-up">
            <img 
              src="/FEEHAB copy copy.png" 
              alt="FEEHAB" 
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in-up animation-delay-400">
            FEEHAB
          </h1>
          <p className="text-xl text-gray-300 animate-blink animation-delay-800">
            CEO OF KUREL CORDO
          </p>
        </div>
      </div>
    );
  }

  if (currentView === 'workhub') {
    return <WorkHub onBack={() => setCurrentView('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/FEEHAB copy copy.png" alt="FEEHAB" className="h-10 w-10 rounded-full border-2 border-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
                <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">About</a>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Skills</a>
                <a href="#gaming" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Gaming</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200">Contact</a>
                <button
                  onClick={() => setCurrentView('workhub')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  WorkHub
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">About</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">Skills</a>
              <a href="#gaming" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">Gaming</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">Contact</a>
              <button
                onClick={() => setCurrentView('workhub')}
                className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                WorkHub
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16" data-animate="hero">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 animate-bounce-in">
            <img 
              src="/FEEHAB copy copy.png" 
              alt="MD Yeomun Hasan" 
              className={`w-48 h-48 rounded-full mx-auto border-4 border-blue-500 shadow-2xl transition-all duration-1000 ${
                visibleElements.has('hero') ? 'animate-picture-shine' : ''
              }`}
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              MD Yeomun Hasan
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
            Full Stack Developer & Creative Technologist
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            Crafting exceptional digital experiences through innovative design and cutting-edge technology. 
            Specializing in modern web applications and immersive user interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="/projects-showcase.html" 
              className="px-8 py-4 border border-gray-600 rounded-lg font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50" data-animate="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400">Passionate developer with a vision for the future</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm MD Yeomun Hasan, known as FEEHAB in the digital world. As a Full Stack Developer and Creative Technologist, 
                I bridge the gap between innovative design and robust functionality.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology spans over 2 years, during which I've mastered modern web technologies 
                and developed a keen eye for user experience design. I believe in creating digital solutions that 
                not only function flawlessly but also inspire and engage users.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in gaming technology, capturing moments through photography, 
                or diving deep into the world of competitive gaming where I've achieved remarkable ranks.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6" data-animate="stats">
              <div className="glass p-6 rounded-xl text-center">
                <div className={`text-3xl font-bold text-blue-400 mb-2 ${visibleElements.has('stats') ? 'animate-number-glow' : ''}`}>
                  {animatedNumbers.projects}+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className={`text-3xl font-bold text-green-400 mb-2 ${visibleElements.has('stats') ? 'animate-number-glow' : ''}`}>
                  {animatedNumbers.experience}+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className={`text-3xl font-bold text-purple-400 mb-2 ${visibleElements.has('stats') ? 'animate-number-glow' : ''}`}>
                  {animatedNumbers.clients}+
                </div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20" data-animate="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400">Technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Frontend Development</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• React.js & Next.js</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS & SCSS</li>
                <li>• HTML5 & CSS3</li>
                <li>• Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Node.js & Express</li>
                <li>• Python & Django</li>
                <li>• MongoDB & PostgreSQL</li>
                <li>• RESTful APIs</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold">Tools & Technologies</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Git & GitHub</li>
                <li>• Docker & AWS</li>
                <li>• Figma & Adobe XD</li>
                <li>• VS Code & WebStorm</li>
                <li>• Postman & Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Section */}
      <section id="gaming" className="py-20 bg-gray-800/50" data-animate="gaming">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gaming Achievements
            </h2>
            <p className="text-xl text-gray-400">Competitive gaming excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* VALORANT */}
            <div className="glass p-8 rounded-xl text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <Crown className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">VALORANT</h3>
                <div className={`text-3xl font-bold text-red-400 mb-2 ${visibleElements.has('gaming') ? 'animate-rank-shine' : ''}`}>
                  Immortal 2
                </div>
                <p className="text-gray-400">Top 1% of players worldwide</p>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Exceptional aim and game sense</p>
                <p>• Strategic team coordination</p>
                <p>• Consistent high-level performance</p>
              </div>
            </div>

            {/* PUBG Mobile */}
            <div className="glass p-8 rounded-xl text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="mb-6">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">PUBG Mobile</h3>
                <div className={`text-3xl font-bold text-yellow-400 mb-2 ${visibleElements.has('gaming') ? 'animate-rank-shine' : ''}`}>
                  Conqueror
                </div>
                <p className="text-gray-400">Elite tier achievement</p>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Superior tactical gameplay</p>
                <p>• Excellent survival instincts</p>
                <p>• Competitive tournament experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20" data-animate="interests">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Interests & Hobbies
            </h2>
            <p className="text-xl text-gray-400">What drives my creativity</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Gamepad2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gaming</h3>
              <p className="text-gray-400 text-sm">Competitive gaming and esports</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Camera className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Photography</h3>
              <p className="text-gray-400 text-sm">Capturing moments and memories</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Music className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Music</h3>
              <p className="text-gray-400 text-sm">Electronic and ambient genres</p>
            </div>
            
            <div className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-400 text-sm">UI/UX and visual aesthetics</p>
            </div>
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
            <p className="text-xl text-gray-400">Let's create something amazing together</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-400">yeomunhasan@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-400">+880 1521-438465</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-8">
                <a href="https://github.com/yeomunhasan" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yeomunhasan" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white resize-none"
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img src="/FEEHAB copy copy.png" alt="FEEHAB" className="h-10 w-10 rounded-full border-2 border-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              &copy; 2025 MD Yeomun Hasan. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Crafted with passion and precision 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;