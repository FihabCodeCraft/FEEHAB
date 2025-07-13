import React, { useState } from 'react';
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
  Zap,
  Users,
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Globe,
  ChevronDown,
  Send,
  User,
  Calendar,
  Building,
  Target,
  Paperclip,
  ExternalLink,
  ArrowLeft,
  Tag,
  Coffee,
  Smartphone,
  DollarSign
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<{type: string, amount: number} | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachment: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      attachment: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      if (formData.attachment) {
        formDataToSend.append('attachment', formData.attachment);
      }

      const response = await fetch('https://formspree.io/f/mrbkozew', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          attachment: null,
        });
        // Reset file input
        const fileInput = document.getElementById(
          'attachment'
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsAboutDropdownOpen(false);
  };
  const handleDonation = (type: string, amount: number) => {
    setSelectedDonation({ type, amount });
    setShowPaymentModal(true);
  };

  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
    setShowPaymentModal(false);
    setShowPaymentDetails(true);
  };


  const handleEmailClick = () => {
    window.open('mailto:mdyeomunhasan@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+8801928947503', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/Gaibandha,+Rangpur,+Bangladesh', '_blank');
  };

  if (currentPage === 'projects') {
    return <ProjectsPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold relative cursor-pointer group w-64 h-8 overflow-hidden">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-8">
                FEEHAB
              </span>
              <span className="absolute top-0 left-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-transform duration-500 ease-in-out transform -translate-x-64 group-hover:translate-x-0">
                Hello there
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className="hover:text-blue-400 transition-colors"
              >
                Home
              </button>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                  <span>About</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isAboutDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-xl transition-all duration-200 ${
                    isAboutDropdownOpen
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  <div className="py-2">
                    <button
                      onClick={() => scrollToSection('about')}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                      <User className="w-4 h-4 text-blue-400" />
                      <span>About Me</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('education')}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                      <GraduationCap className="w-4 h-4 text-green-400" />
                      <span>My Journey</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('passion')}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>My Passion</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('skills')}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                      <Code className="w-4 h-4 text-purple-400" />
                      <span>Skills</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('websites')}
                      className="w-full px-4 py-2 text-left hover:bg-white/10 transition-colors flex items-center space-x-2"
                    >
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <span>My Creations</span>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage('contact')}
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('donation')}
                className="hover:text-blue-400 transition-colors"
              >
                Donation
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full glass backdrop-blur-lg">
              <div className="px-6 py-4 space-y-4">
                <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block hover:text-blue-400 transition-colors">Home</button>
                <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="block hover:text-blue-400 transition-colors">About</button>
                <button onClick={() => { setCurrentPage('projects'); setIsMenuOpen(false); }} className="block hover:text-blue-400 transition-colors">Projects</button>
                <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block hover:text-blue-400 transition-colors">Contact</button>
                <button onClick={() => { scrollToSection('donation'); setIsMenuOpen(false); }} className="block hover:text-blue-400 transition-colors">Donation</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    {/* Placeholder for your photo - replace src with your actual photo */}
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="MD Yeomun Hasan (FEEHAB)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-left lg:text-left max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  FEEHAB
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-300">
                MD Yeomun Hasan
              </h2>
              <p className="text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed">
                Full Stack Developer & Creative Technologist
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30">
                  React Developer
                </span>
                <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 border border-purple-500/30">
                  UI/UX Designer
                </span>
                <span className="px-4 py-2 bg-green-500/20 rounded-full text-green-300 border border-green-500/30">
                  Problem Solver
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('websites')}
                  className="px-8 py-3 border border-gray-600 rounded-full hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm MD Yeomun Hasan, known in the digital world as{' '}
                <span className="text-blue-400 font-semibold">FEEHAB</span>. I'm
                a passionate full-stack developer and creative technologist who
                loves crafting beautiful, functional web experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my Intermediate studies in Business Studies
                at Govt Azizul Haque College, Bogura, I combine my academic
                knowledge with practical coding skills to create innovative
                solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in technology started during my school days at Ramdeo
                Bazla Govt High School (Joypurhat Zilla School), where I was an
                active member of the Ramdeo Bazla Science Club, fostering my
                love for technology and innovation.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Gaibandha, Rangpur, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-green-400" />
                  <span>Business Studies Student</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span>Technology Enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            My Educational Journey
          </h2>
          <div className="space-y-8">
            {/* Current Education */}
            <div className="glass p-8 rounded-2xl transform hover:scale-102 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    {/* College Logo Placeholder - Replace with actual logo */}
                    <img
                      src="/11.jpeg"
                      alt="Govt Azizul Haque College Logo"
                      className="w-16 h-16 rounded-full object-contain bg-white p-1"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                    Govt Azizul Haque College, Bogura
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">
                    Higher Secondary Certificate (HSC) - Business Studies
                  </p>
                  <p className="text-gray-400 mb-3">
                    Session: 2024-25 | Currently in 2nd Year
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-500/30">
                      Business Studies
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-sm border border-green-500/30">
                      Economics
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm border border-purple-500/30">
                      Accounting
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Current</span>
                </div>
              </div>
            </div>

            {/* Previous Education */}
            <div className="glass p-8 rounded-2xl transform hover:scale-102 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    {/* School Logo Placeholder - Replace with actual logo */}
                    <img
                      src="/OIP.jpeg"
                      alt="Ramdeo Bazla Government High School Logo"
                      className="w-16 h-16 rounded-full object-contain bg-white p-1"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-purple-400 mb-2">
                    Ramdeo Bazla Government High School
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">
                    Secondary School Certificate (SSC) - Science Group
                  </p>
                  <p className="text-gray-400 mb-3">
                    Also known as Joypurhat Zilla School
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm border border-purple-500/30">
                      Science Group
                    </span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-pink-300 text-sm border border-pink-500/30">
                      Physics
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-500/30">
                      Mathematics
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Award className="w-5 h-5" />
                    <span>Member of Ramdeo Bazla Science Club</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-semibold">Completed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Focus */}
          <div className="mt-12 glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-center mb-6 text-blue-400">
              Current Academic Focus
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">
                  Business Management
                </h4>
                <p className="text-gray-300 text-sm">
                  Learning organizational behavior, management principles, and
                  business strategy
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">
                  Economics
                </h4>
                <p className="text-gray-300 text-sm">
                  Understanding market dynamics, economic theories, and
                  financial systems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">
                  Accounting
                </h4>
                <p className="text-gray-300 text-sm">
                  Mastering financial accounting, cost accounting, and business
                  mathematics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section id="passion" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
            My Passion
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Coding
              </h3>
              <p className="text-gray-300 text-sm">
                Crafting elegant solutions through clean, efficient code
              </p>
            </div>

            <div className="glass p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                Design
              </h3>
              <p className="text-gray-300 text-sm">
                Creating beautiful, user-centered digital experiences
              </p>
            </div>

            <div className="glass p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-green-400 mb-3">
                Innovation
              </h3>
              <p className="text-gray-300 text-sm">
                Pushing boundaries with cutting-edge technologies
              </p>
            </div>

            <div className="glass p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                Community
              </h3>
              <p className="text-gray-300 text-sm">
                Building connections and sharing knowledge with fellow
                developers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2" />
                Frontend
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>React.js</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>TypeScript</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tailwind CSS</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>JavaScript</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-green-400 mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                Backend
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Node.js</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Express.js</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>MongoDB</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>REST APIs</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
                <Palette className="w-6 h-6 mr-2" />
                Tools & Design
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Git & GitHub</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Figma</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-4/6"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>VS Code</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Responsive Design</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Websites Section */}
      <section id="websites" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            My Creations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="glass rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Globe className="w-16 h-16 text-white animate-float" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  E-Commerce Platform
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Full-stack e-commerce solutions for various businesses including retail stores, fashion brands, and digital marketplaces
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Clients & Projects:</p>
                  <div className="text-xs text-blue-300 space-y-1">
                    <p>• Fashion Store BD - Online clothing platform</p>
                    <p>• TechMart Bangladesh - Electronics marketplace</p>
                    <p>• Local Grocery Hub - Food delivery system</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-300 text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-green-300 text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-300 text-xs">
                    MongoDB
                  </span>
                  <span className="px-2 py-1 bg-yellow-500/20 rounded text-yellow-300 text-xs">
                    Stripe
                  </span>
                </div>
                <button 
                  onClick={() => window.open('https://github.com/feehab/ecommerce-projects', '_blank')}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <Code className="w-16 h-16 text-white animate-float" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  Task Management App
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Productivity applications with real-time collaboration for teams and organizations
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Clients & Projects:</p>
                  <div className="text-xs text-green-300 space-y-1">
                    <p>• StartupHub BD - Team collaboration tool</p>
                    <p>• Digital Agency Pro - Project management system</p>
                    <p>• Remote Work Solutions - Task tracking platform</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-300 text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-yellow-500/20 rounded text-yellow-300 text-xs">
                    Supabase
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-300 text-xs">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-green-300 text-xs">
                    Real-time
                  </span>
                </div>
                <button 
                  onClick={() => window.open('https://github.com/feehab/task-management-apps', '_blank')}
                  className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Palette className="w-16 h-16 text-white animate-float" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  Institution & Organization Websites
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Professional websites for institutions, organizations, associations, and personal portfolios
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Clients & Projects:</p>
                  <div className="text-xs text-purple-300 space-y-1">
                    <p>• Rangpur Education Board - Official website</p>
                    <p>• Youth Development Association - NGO platform</p>
                    <p>• Professional Portfolio Sites - Personal branding</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-300 text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-300 text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-cyan-500/20 rounded text-cyan-300 text-xs">
                    Supabase
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-green-300 text-xs">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-pink-500/20 rounded text-pink-300 text-xs">
                    Responsive
                  </span>
                </div>
                <button 
                  onClick={() => window.open('https://github.com/feehab/institutional-websites', '_blank')}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* Additional Projects Row */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Project 4 - Business Solutions */}
            <div className="glass rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Building className="w-16 h-16 text-white animate-float" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  Business Solutions
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Custom business applications including inventory management, CRM systems, and automation tools
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Clients & Projects:</p>
                  <div className="text-xs text-orange-300 space-y-1">
                    <p>• Local Manufacturing Co. - Inventory system</p>
                    <p>• Service Provider BD - CRM platform</p>
                    <p>• Small Business Hub - Automation tools</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-300 text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-green-300 text-xs">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-cyan-500/20 rounded text-cyan-300 text-xs">
                    Supabase
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 rounded text-orange-300 text-xs">
                    API Integration
                  </span>
                </div>
                <button 
                  onClick={() => window.open('https://github.com/feehab/business-solutions', '_blank')}
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Project 5 - Educational Platforms */}
            <div className="glass rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-white animate-float" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  Educational Platforms
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Learning management systems, online course platforms, and educational tools for institutions
                </p>
                <div className="mb-4">
                  <p className="text-xs text-gray-400 mb-2">Clients & Projects:</p>
                  <div className="text-xs text-indigo-300 space-y-1">
                    <p>• Online Learning BD - Course platform</p>
                    <p>• Student Portal System - Academic management</p>
                    <p>• Skill Development Hub - Training platform</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-500/20 rounded text-blue-300 text-xs">
                    React
                  </span>
                  <span className="px-2 py-1 bg-purple-500/20 rounded text-purple-300 text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-cyan-500/20 rounded text-cyan-300 text-xs">
                    Supabase
                  </span>
                  <span className="px-2 py-1 bg-green-500/20 rounded text-green-300 text-xs">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-indigo-500/20 rounded text-indigo-300 text-xs">
                    LMS
                  </span>
                </div>
                <button 
                  onClick={() => window.open('https://github.com/feehab/educational-platforms', '_blank')}
                  className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm always excited to collaborate on new projects and connect
                  with fellow developers. Whether you have a project in mind or
                  just want to say hello, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div 
                  className="flex items-center space-x-4 glass p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white hover:text-blue-400 transition-colors">mdyeomunhasan@gmail.com</p>
                  </div>
                </div>

                <div 
                  className="flex items-center space-x-4 glass p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <div>
                      <p className="text-white hover:text-green-400 transition-colors">+880 1928947503</p>
                      <p className="text-gray-500 text-xs">Call time: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="flex items-center space-x-4 glass p-4 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  onClick={handleLocationClick}
                >
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white hover:text-red-400 transition-colors">Gaibandha, Rangpur, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/FihabCodeCraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-6 h-6 text-white fill-current" />
                </a>
                <a
                  href="https://www.linkedin.com/in/devgenzfihab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-white fill-current" />
                </a>
                <a
                  href="mailto:mdyeomunhasan@gmail.com"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-white fill-current" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                Quick Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="project-inquiry">Project Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="job-opportunity">Job Opportunity</option>
                    <option value="general-question">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="attachment"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Attachment (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    />
                    <Paperclip className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                  {formData.attachment && (
                    <p className="text-sm text-blue-400 mt-2">
                      Selected: {formData.attachment.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-red-400 text-center">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donation" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Support My Work
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            If you find my work valuable and would like to support my open-source contributions and learning journey, any donation would be greatly appreciated.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">☕</div>
              <h3 className="text-xl font-semibold mb-2">Buy me a coffee</h3>
              <p className="text-gray-400 mb-4">$5</p>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all">
                Donate $5
              </button>
            </div>
            
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform border-2 border-blue-500">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Fuel my projects</h3>
              <p className="text-gray-400 mb-4">$25</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                Donate $25
              </button>
            </div>
            
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">Super supporter</h3>
              <p className="text-gray-400 mb-4">$100</p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                Donate $100
              </button>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Other Ways to Support</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Github className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <p className="text-sm">Star my repositories</p>
              </div>
              <div>
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <p className="text-sm">Share my work</p>
              </div>
              <div>
                <Heart className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                <p className="text-sm">Spread the word</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              FEEHAB
            </div>
            <p className="text-gray-400 mb-6">
              MD Yeomun Hasan - Full Stack Developer & Creative Technologist
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/FihabCodeCraft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-6 h-6 fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/in/devgenzfihab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-6 h-6 fill-current" />
              </a>
              <a
                href="mailto:mdyeomunhasan@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-6 h-6 fill-current" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                © 2024 FEEHAB. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectsPage({ onBack }: { onBack: () => void }) {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Full Stack",
      date: "2024",
      status: "Completed",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "AI-Powered Chat Application",
      description: "Real-time chat application with AI integration for smart responses and language translation. Built with Socket.io and OpenAI API.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Socket.io", "OpenAI", "Express", "PostgreSQL"],
      category: "AI/ML",
      date: "2024",
      status: "In Progress",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Portfolio Management System",
      description: "A comprehensive portfolio management system for financial advisors with real-time market data, risk analysis, and client reporting features.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Chart.js"],
      category: "FinTech",
      date: "2023",
      status: "Completed",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Smart Home IoT Dashboard",
      description: "IoT dashboard for smart home automation with device control, energy monitoring, and predictive analytics using machine learning.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "IoT", "Python", "TensorFlow", "MQTT"],
      category: "IoT",
      date: "2023",
      status: "Completed",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology with smart contracts and decentralized architecture.",
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      date: "2023",
      status: "Completed",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "Advanced analytics platform for social media management with sentiment analysis, engagement tracking, and automated reporting.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Angular", "Python", "FastAPI", "Redis", "Docker"],
      category: "Analytics",
      date: "2024",
      status: "In Progress",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Full Stack', 'AI/ML', 'FinTech', 'IoT', 'Blockchain', 'Analytics'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Content */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my technical expertise and creative solutions across various domains
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'glass hover:bg-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Calendar size={14} />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag size={14} className="text-purple-400" />
                    <span className="text-sm text-purple-400 font-medium">{project.category}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-md border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-md border border-gray-500/30">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors text-sm"
                    >
                      <Github size={16} className="fill-current" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;