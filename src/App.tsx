import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Database, 
  Server, 
  Smartphone,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Star,
  Calendar,
  Users,
  Zap,
  CheckCircle
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'gaming', 'skills', 'experience', 'education', 'projects', 'contact'];
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

  const gameProfiles = {
    valorant: {
      name: 'Valorant',
      ign: 'whiff FEEHAB #RUSHR',
      rank: 'Diamond 2',
      level: 156,
      mainAgent: 'Jett',
      kd: '1.8',
      winRate: '68%',
      logo: 'public/download copy.webp'
    },
    cs2: {
      name: 'Counter-Strike 2',
      uid: 'FEEHAB_YH',
      rank: 'Legendary Eagle',
      level: 89,
      mainWeapon: 'AK-47',
      kd: '1.6',
      winRate: '72%',
      logo: '/files_5259412-1752659540062-download.webp'
    },
    freefire: {
      name: 'Free Fire',
      uid: '1521343189',
      rank: 'Heroic 3STAR',
      level: 67,
      mainCharacter: 'ALOK',
      kd: '2.1',
      winRate: '75%',
      logo: '/files_5259412-1752659513690-th.jpg'
    },
    roblox: {
      name: 'Roblox',
      uid: 'FEEHAB_YH',
      level: 'Player Level 45',
      joinDate: '2019',
      favoriteGames: 'Dead Rails, Buckshot Mayhem',
      playtime: '500+ Hours',
      achievements: '150+ Badges',
      logo: '/files_5259412-1752659563015-download.webp'
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://getform.io/f/adrgmrwa', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // You could add error state handling here if needed
    } finally {
      setIsSubmitting(false);
    }
  };
  const skills = [
    { name: 'React', level: 95, icon: <Code className="w-6 h-6" /> },
    { name: 'Node.js', level: 90, icon: <Server className="w-6 h-6" /> },
    { name: 'TypeScript', level: 88, icon: <Code className="w-6 h-6" /> },
    { name: 'MongoDB', level: 85, icon: <Database className="w-6 h-6" /> },
    { name: 'React Native', level: 82, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Next.js', level: 90, icon: <Globe className="w-6 h-6" /> },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive user interfaces.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 60%',
        'Improved code review process'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Built responsive web applications and mobile apps. Worked closely with UX/UI designers to implement pixel-perfect designs.',
      achievements: [
        'Launched 3 mobile applications',
        'Achieved 98% user satisfaction',
        'Optimized loading times by 50%'
      ]
    }
  ];

  const education = [
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt. Azizul Haque College, Bogura',
      period: '2024 - 2026',
      gpa: 'Ongoing',
      department: 'Business Studies',
      description: 'Currently pursuing HSC in Business Studies Group. Expected graduation in 2026.',
      logo: '/OIP%20(1).jpeg'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Ramdeo Bazla Govt. High School (Joypurhat Zilla School)',
      period: 'Completed 2024',
      gpa: '5.00/5.00',
      department: 'Science',
      description: 'Completed SSC in Science Group with perfect GPA. Active member of Ramdeo Bazla "Scintessa" Science Club, participating in various scientific activities and competitions.',
      logo: '/OIP%20copy.jpeg',
      clubLink: 'https://www.facebook.com/scintessa',
      clubName: 'Ramdeo Bazla "Scintessa" Science Club'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/feehab/ecommerce',
      live: 'https://ecommerce-demo.feehab.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/feehab/taskmanager',
      live: 'https://tasks.feehab.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/feehab/weather',
      live: 'https://weather.feehab.com',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and automated reporting features.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com/feehab/analytics',
      live: 'https://analytics.feehab.com',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'gaming', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {['home', 'about', 'gaming', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left py-2 capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                MD Yeomun Hasan
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
              Full Stack Developer & Creative Technologist
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about creating scalable solutions and competitive gaming.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/feehab" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/feehab" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@feehab.com" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-400">Hello! I'm Yeomun</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that bridge the gap between design and technology. I specialize 
                in building scalable web applications and mobile experiences that users love.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I'm also 
                a passionate gamer who enjoys competitive FPS games and open-world adventures. 
                Gaming enhances my strategic thinking and problem-solving skills, which I apply 
                to coding challenges. I believe in writing clean, maintainable code and creating 
                products that make a real impact.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 glass rounded-lg">
                  <div className="text-3xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-slow"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Section */}
      <section id="gaming" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Gaming & Interests</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Gaming is more than just entertainment for me - it's a way to enhance strategic thinking, 
              teamwork, and quick decision-making skills that I apply in development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Valorant */}
            <div 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredGame('valorant')}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={gameProfiles.valorant.logo} 
                    alt="Valorant" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {hoveredGame === 'valorant' ? (
                  <div className="space-y-1">
                    <div className="text-xs text-gray-400">UID: <span className="text-white font-mono">{gameProfiles.valorant.uid}</span></div>
                    <div className="text-xs text-gray-400">Rank: <span className="text-red-400 font-semibold">{gameProfiles.valorant.rank}</span></div>
                    <div className="text-xs text-gray-400">Level: <span className="text-white">{gameProfiles.valorant.level}</span></div>
                    <div className="text-xs text-gray-400">Agent: <span className="text-blue-400">{gameProfiles.valorant.mainAgent}</span></div>
                    <div className="text-xs text-gray-400">K/D: <span className="text-green-400">{gameProfiles.valorant.kd}</span></div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-red-400">Valorant</h3>
                    <p className="text-gray-300 text-sm">Tactical FPS</p>
                  </>
                )}
              </div>
            </div>

            {/* Counter-Strike 2 */}
            <div 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredGame('cs2')}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={gameProfiles.cs2.logo} 
                    alt="Counter-Strike 2" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {hoveredGame === 'cs2' ? (
                  <div className="space-y-1">
                    <div className="text-xs text-gray-400">Steam: <span className="text-white font-mono">{gameProfiles.cs2.uid}</span></div>
                    <div className="text-xs text-gray-400">Rank: <span className="text-yellow-400 font-semibold">{gameProfiles.cs2.rank}</span></div>
                    <div className="text-xs text-gray-400">Level: <span className="text-white">{gameProfiles.cs2.level}</span></div>
                    <div className="text-xs text-gray-400">Weapon: <span className="text-red-400">{gameProfiles.cs2.mainWeapon}</span></div>
                    <div className="text-xs text-gray-400">K/D: <span className="text-green-400">{gameProfiles.cs2.kd}</span></div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-blue-400">Counter-Strike 2</h3>
                    <p className="text-gray-300 text-sm">Competitive FPS</p>
                  </>
                )}
              </div>
            </div>

            {/* Free Fire */}
            <div 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredGame('freefire')}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={gameProfiles.freefire.logo} 
                    alt="Free Fire" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {hoveredGame === 'freefire' ? (
                  <div className="space-y-1">
                    <div className="text-xs text-gray-400">ID: <span className="text-white font-mono">{gameProfiles.freefire.uid}</span></div>
                    <div className="text-xs text-gray-400">Rank: <span className="text-orange-400 font-semibold">{gameProfiles.freefire.rank}</span></div>
                    <div className="text-xs text-gray-400">Level: <span className="text-white">{gameProfiles.freefire.level}</span></div>
                    <div className="text-xs text-gray-400">Character: <span className="text-blue-400">{gameProfiles.freefire.mainCharacter}</span></div>
                    <div className="text-xs text-gray-400">K/D: <span className="text-green-400">{gameProfiles.freefire.kd}</span></div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-orange-400">Free Fire</h3>
                    <p className="text-gray-300 text-sm">Battle Royale</p>
                  </>
                )}
              </div>
            </div>

            {/* Roblox */}
            <div 
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredGame('roblox')}
              onMouseLeave={() => setHoveredGame(null)}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={gameProfiles.roblox.logo} 
                    alt="Roblox" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {hoveredGame === 'roblox' ? (
                  <div className="space-y-1">
                    <div className="text-xs text-gray-400">User: <span className="text-white font-mono">{gameProfiles.roblox.uid}</span></div>
                    <div className="text-xs text-gray-400">{gameProfiles.roblox.level}</div>
                    <div className="text-xs text-gray-400">Since: <span className="text-white">{gameProfiles.roblox.joinDate}</span></div>
                    <div className="text-xs text-gray-400">Top Games:</div>
                    <div className="text-xs text-blue-400">{gameProfiles.roblox.favoriteGames}</div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold mb-2 text-green-400">Roblox</h3>
                    <p className="text-gray-300 text-sm">Creative Platform</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Open World Games Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-purple-400">Open World Games</h3>
            <div className="flex justify-center">
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400">Open World Games</h4>
                    <p className="text-gray-300 text-sm">GTA V, Minecraft, Assassin's Creed series</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
                    <h4 className="text-xl text-gray-300">{exp.company}</h4>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-purple-400">Key Achievements:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Currently building my academic foundation while pursuing my passion for technology and development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-6 flex-shrink-0">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                     className="w-16 h-16 object-cover rounded-full bg-white p-2 border-2 border-gray-600"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400">{edu.degree}</h3>
                        <h4 className="text-gray-300">{edu.institution}</h4>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="text-gray-400 text-sm">{edu.period}</div>
                        <div className="text-purple-400 font-semibold">
                          {edu.gpa === 'Ongoing' ? 'In Progress' : `GPA: ${edu.gpa}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {edu.clubLink && (
                  <div className="mt-3 flex items-center text-green-400 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    <a 
                      href={edu.clubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green-300 transition-colors duration-200 flex items-center"
                    >
                      {edu.clubName}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            ))}
            
            <div className="text-center mt-12">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Future Plans</h3>
                <p className="text-gray-300">
                  Planning to pursue studies at IBA (Institute of Business Administration) after completing HSC. 
                  My goal is to achieve expertise in three key areas: computer knowledge, business knowledge, and gaming. 
                  This combination will help me build innovative tech businesses and contribute to the gaming industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Send me a message and I will reply you under 6 hours. I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a 
                    href="mailto:mdyeomunhasan@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    mdyeomunhasan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <a 
                    href="tel:+8801928975003" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    +88 019 289-7503
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <a 
                    href="https://www.google.com/maps/search/Gaibandha,+Rangpur,+Bangladesh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    Gaibandha, Rangpur, Bangladesh
                  </a>
                </div>
              </div>
            </div>

            {formSubmitted ? (
              <div className="glass p-8 rounded-xl text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300">I will reply you so soon. Thank you for reaching out!</p>
              </div>
            ) : (
              <form 
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <select
                  name="country"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-white"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Your Country</option>
                  <option value="afghanistan">Afghanistan</option>
                  <option value="albania">Albania</option>
                  <option value="algeria">Algeria</option>
                  <option value="argentina">Argentina</option>
                  <option value="australia">Australia</option>
                  <option value="austria">Austria</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="belgium">Belgium</option>
                  <option value="brazil">Brazil</option>
                  <option value="canada">Canada</option>
                  <option value="china">China</option>
                  <option value="denmark">Denmark</option>
                  <option value="egypt">Egypt</option>
                  <option value="finland">Finland</option>
                  <option value="france">France</option>
                  <option value="germany">Germany</option>
                  <option value="greece">Greece</option>
                  <option value="india">India</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="iran">Iran</option>
                  <option value="iraq">Iraq</option>
                  <option value="ireland">Ireland</option>
                  <option value="italy">Italy</option>
                  <option value="japan">Japan</option>
                  <option value="jordan">Jordan</option>
                  <option value="kenya">Kenya</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="mexico">Mexico</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="new-zealand">New Zealand</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="norway">Norway</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="philippines">Philippines</option>
                  <option value="poland">Poland</option>
                  <option value="portugal">Portugal</option>
                  <option value="russia">Russia</option>
                  <option value="saudi-arabia">Saudi Arabia</option>
                  <option value="singapore">Singapore</option>
                  <option value="south-africa">South Africa</option>
                  <option value="south-korea">South Korea</option>
                  <option value="spain">Spain</option>
                  <option value="sri-lanka">Sri Lanka</option>
                  <option value="sweden">Sweden</option>
                  <option value="switzerland">Switzerland</option>
                  <option value="thailand">Thailand</option>
                  <option value="turkey">Turkey</option>
                  <option value="uae">United Arab Emirates</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <select
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-white"
                  defaultValue=""
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Subject</option>
                  <option value="project-inquiry">Project Inquiry</option>
                  <option value="job-opportunity">Job Opportunity</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="freelance-work">Freelance Work</option>
                  <option value="consultation">Consultation</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Attachment (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 file:cursor-pointer"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="/FEEHAB copy copy.png" 
                alt="FEEHAB Logo" 
                className="h-20 w-auto"
              />
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 MD Yeomun Hasan. All rights reserved.</p>
              <p className="text-sm mt-1">Built with React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;