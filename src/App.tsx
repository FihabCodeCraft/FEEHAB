import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Zap, 
  Users, 
  Award, 
  Coffee,
  ArrowRight,
  Star,
  Download,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Trophy,
  Target,
  Rocket,
  Heart,
  Globe,
  Smartphone,
  Database,
  Server,
  Monitor,
  Layers,
  Settings,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageCircle,
  Send,
  User,
  Eye,
  ThumbsUp,
  Share2,
  BookOpen,
  Camera,
  Music,
  Gamepad2,
  Headphones,
  Mic,
  Video,
  Edit3,
  Cpu,
  HardDrive,
  Wifi,
  Shield,
  Lock,
  Key,
  Search,
  Filter,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Zap as Lightning,
  Flame,
  Sparkles,
  Diamond,
  Crown,
  Medal,
  Gift,
  Compass,
  Map,
  Navigation,
  Anchor,
  Plane,
  Car,
  Train,
  Ship,
  Truck,
  Bike,
  Footprints,
  Mountain,
  Trees,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Snowflake,
  Droplets,
  Wind,
  Thermometer,
  Battery,
  Plug,
  Power,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Repeat,
  Shuffle,
  Radio,
  Tv,
  Monitor as Screen,
  Tablet,
  Watch,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Joystick,
  Gamepad,
  Headset,
  Webcam,
  Microphone,
  Speaker,
  Router,
  Modem,
  Ethernet,
  Bluetooth,
  Nfc,
  QrCode,
  Barcode,
  CreditCard,
  Wallet,
  Coins,
  Banknote,
  Receipt,
  ShoppingCart,
  ShoppingBag,
  Store,
  Storefront,
  Package,
  Truck as Delivery,
  Box,
  Archive,
  Inbox,
  Outbox,
  Send as SendIcon,
  Paperclip,
  Link,
  Unlink,
  Copy,
  Cut,
  Paste,
  Scissors,
  Eraser,
  PenTool,
  Brush,
  Palette as ColorPalette,
  Pipette,
  Ruler,
  Move,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Maximize,
  Minimize,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Plus,
  Minus,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowUpLeft,
  CornerUpRight,
  CornerDownRight,
  CornerDownLeft,
  CornerUpLeft,
  Move3D,
  RotateCcw as Rotate,
  RefreshCw,
  RefreshCcw,
  Loader,
  Loader2,
  MoreHorizontal,
  MoreVertical,
  Menu,
  Grid,
  List,
  Columns,
  Rows,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelBottom,
  SplitSquareHorizontal,
  SplitSquareVertical,
  Expand,
  Shrink,
  ZoomIn,
  ZoomOut,
  Focus,
  Scan,
  ScanLine,
  Crosshair,
  Locate,
  LocateFixed,
  LocateOff,
  Navigation2,
  Compass as CompassIcon,
  MapPin as Pin,
  Route,
  Signpost,
  Milestone,
  Flag,
  Bookmark,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  IndianRupee,
  Bitcoin,
  Banknote as Money,
  Calculator,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Timer,
  Stopwatch,
  AlarmClock,
  Hourglass,
  History,
  RotateCcw as Undo,
  RotateCw as Redo,
  Save,
  Download as DownloadIcon,
  Upload,
  Import,
  Export,
  Share,
  Forward,
  Reply,
  ReplyAll,
  Archive as ArchiveIcon,
  Trash,
  Trash2,
  Delete,
  Edit,
  Edit2,
  FileEdit,
  FilePlus,
  FileMinus,
  FileX,
  File,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FileSpreadsheet,
  FileBarChart,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  HardDrive as Drive,
  Database as DB,
  Server as ServerIcon,
  Cloud as CloudIcon,
  CloudUpload,
  CloudDownload,
  CloudOff,
  Wifi as WifiIcon,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalZero,
  Antenna,
  Radio as RadioIcon,
  Satellite,
  Radar,
  Rss,
  Podcast,
  Cast,
  Airplay,
  Chromecast,
  Tv2,
  MonitorSpeaker,
  Projector,
  Camera as CameraIcon,
  Video as VideoIcon,
  Film,
  Image,
  ImagePlus,
  ImageMinus,
  ImageOff,
  Gallery,
  Aperture,
  Focus as FocusIcon,
  Flashlight,
  FlashlightOff,
  Lightbulb,
  LightbulbOff,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Candle,
  Flame as Fire,
  Zap as Bolt,
  Battery as BatteryIcon,
  BatteryCharging,
  BatteryFull,
  BatteryHalf,
  BatteryLow,
  Plug as PlugIcon,
  Unplug,
  Power as PowerIcon,
  PowerOff,
  ToggleLeft,
  ToggleRight,
  Switch,
  Sliders,
  SlidersHorizontal,
  Volume,
  Volume1,
  VolumeX as Mute,
  Mic as MicIcon,
  MicOff,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneForwarded,
  Voicemail,
  MessageSquare,
  MessageCircle as Message,
  Mail as MailIcon,
  MailOpen,
  MailPlus,
  MailMinus,
  MailX,
  Send as MailSend,
  Inbox as InboxIcon,
  Outbox as OutboxIcon,
  Archive as MailArchive,
  Trash as MailTrash,
  Flag as MailFlag,
  Star as MailStar,
  Heart as MailHeart,
  Bookmark as MailBookmark,
  Tag as MailTag,
  AtSign as MailAt,
  Paperclip as Attachment,
  Link as LinkIcon,
  ExternalLink as External,
  Globe as Web,
  Compass as Navigate,
  Home,
  Building,
  Building2,
  Factory,
  Warehouse,
  Store as Shop,
  ShoppingCart as Cart,
  ShoppingBag as Bag,
  Package as PackageIcon,
  Gift as GiftIcon,
  Award as AwardIcon,
  Trophy as TrophyIcon,
  Medal as MedalIcon,
  Crown as CrownIcon,
  Shield as ShieldIcon,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  Lock as LockIcon,
  LockOpen,
  Unlock,
  Key as KeyIcon,
  Fingerprint,
  Scan as ScanIcon,
  Eye as EyeIcon,
  EyeOff,
  Glasses,
  Sunglasses,
  User as UserIcon,
  Users as UsersIcon,
  UserPlus,
  UserMinus,
  UserX,
  UserCheck,
  Contact,
  Contacts,
  AddressBook,
  IdCard,
  CreditCard as Card,
  Wallet as WalletIcon,
  PiggyBank,
  Coins as CoinsIcon,
  Banknote as Cash,
  Receipt as ReceiptIcon,
  Calculator as Calc,
  Abacus,
  Ruler as RulerIcon,
  Triangle as TriangleIcon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Pentagon as PentagonIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon,
  Diamond as DiamondIcon,
  Heart as Love,
  Star as Favorite,
  Bookmark as Save2,
  Flag as FlagIcon,
  MapPin as Location,
  Map as MapIcon,
  Globe as Earth,
  Compass as Direction,
  Navigation as GPS,
  Route as Path,
  Milestone as Marker,
  Signpost as Sign,
  Mountain as Mountains,
  Trees as Forest,
  Palmtree,
  Cactus,
  Flower,
  Flower2,
  Leaf,
  Seedling,
  Sprout,
  TreePine,
  TreeDeciduous,
  Sun as Sunny,
  Moon as Night,
  Stars,
  Cloud as Cloudy,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  Umbrella as Rain,
  Snowflake as Snow,
  Zap as Thunder,
  Wind as Windy,
  Tornado,
  Hurricane,
  Thermometer as Temp,
  Gauge,
  Activity as Pulse,
  TrendingUp as Up,
  TrendingDown,
  BarChart,
  BarChart2,
  BarChart3 as Chart,
  LineChart as Line,
  PieChart as Pie,
  Doughnut,
  Target as Goal,
  Crosshair as Aim,
  Scope,
  Radar as RadarIcon,
  Sonar,
  Satellite as Sat,
  Rocket as Launch,
  Plane as Flight,
  Car as Auto,
  Truck as Vehicle,
  Bus,
  Train as Railway,
  Tram,
  Ship as Boat,
  Sailboat,
  Anchor as Port,
  Bike as Bicycle,
  Scooter,
  Motorcycle,
  Skateboard,
  Roller,
  Footprints as Walk,
  Baby,
  Stroller,
  Wheelchair,
  Cane,
  Glasses as Specs,
  Pill,
  Syringe,
  Stethoscope,
  Thermometer as Medical,
  Bandage,
  HeartHandshake,
  Activity as Health,
  Dna,
  Microscope,
  TestTube,
  FlaskConical,
  Beaker,
  Atom,
  Magnet,
  Zap as Electric,
  Lightbulb as Idea,
  Brain,
  Cpu as Processor,
  MemoryStick,
  HardDrive as Storage,
  Database as Data,
  Server as Servers,
  Cloud as Online,
  Wifi as Internet,
  Router as Network,
  Ethernet as Cable,
  Bluetooth as BT,
  Nfc as NearField,
  QrCode as QR,
  Barcode as Code128,
  Smartphone as Mobile,
  Tablet as Tab,
  Laptop,
  Monitor as Display,
  Tv as Television,
  Radio as AM_FM,
  Headphones as Audio,
  Speaker as Sound,
  Microphone as Record,
  Camera as Photo,
  Video as Movie,
  Film as Cinema,
  Clapperboard,
  Theater,
  Masks,
  Drama,
  Comedy,
  Music as Song,
  Music2,
  Music3,
  Music4,
  Disc,
  Disc2,
  Disc3,
  Vinyl,
  Cassette,
  Radio as Broadcast,
  Podcast as Cast2,
  Rss as Feed,
  Newspaper,
  BookOpen as Read,
  Book,
  Library,
  GraduationCap as Graduate,
  School,
  University,
  Pencil,
  Pen,
  PenTool as Design,
  Brush as Paint,
  Palette as Colors,
  Pipette as Dropper,
  Scissors as Cut2,
  Ruler as Measure,
  Compass as Draw,
  Triangle as Shape,
  Square as Box2,
  Circle as Round,
  Hexagon as Hex,
  Pentagon as Pent,
  Octagon as Oct,
  Diamond as Gem,
  Star as Rating,
  Heart as Like,
  ThumbsUp as Approve,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Surprised,
  Confused,
  Sleepy,
  Dizzy,
  Sick,
  Injured,
  Dead,
  Ghost,
  Alien,
  Robot,
  Monster,
  Skull,
  Bone,
  Paw,
  Cat,
  Dog,
  Rabbit,
  Squirrel,
  Hedgehog,
  Bird,
  Fish,
  Turtle,
  Snake,
  Lizard,
  Frog,
  Bug,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Worm,
  Snail,
  Shell,
  Crab,
  Lobster,
  Shrimp,
  Octopus,
  Jellyfish,
  Whale,
  Dolphin,
  Shark,
  Penguin,
  Owl,
  Eagle,
  Duck,
  Swan,
  Flamingo,
  Peacock,
  Turkey,
  Chicken,
  Rooster,
  Pig,
  Cow,
  Horse,
  Sheep,
  Goat,
  Deer,
  Elephant,
  Giraffe,
  Lion,
  Tiger,
  Bear,
  Panda,
  Koala,
  Monkey,
  Gorilla,
  Sloth,
  Kangaroo,
  Rhino,
  Hippo,
  Crocodile,
  Camel,
  Llama,
  Zebra,
  Unicorn,
  Dragon,
  Phoenix,
  Pegasus,
  Centaur,
  Mermaid,
  Fairy,
  Angel,
  Devil,
  Wizard,
  Witch,
  Vampire,
  Zombie,
  Mummy,
  Frankenstein,
  Werewolf,
  Pirate,
  Ninja,
  Samurai,
  Knight,
  Princess,
  Prince,
  King,
  Queen,
  Emperor,
  Pope,
  Priest,
  Monk,
  Nun,
  Rabbi,
  Imam,
  Shaman,
  Guru,
  Sage,
  Prophet,
  Messiah,
  God,
  Goddess,
  Deity,
  Spirit,
  Soul,
  Aura,
  Chakra,
  Yin,
  Yang,
  Zen,
  Om,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';
import WorkHub from './WorkHub';

const App: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showWorkHub, setShowWorkHub] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', level: 90, icon: <Server className="w-5 h-5" /> },
    { name: 'TypeScript', level: 88, icon: <Code className="w-5 h-5" /> },
    { name: 'Python', level: 85, icon: <Code className="w-5 h-5" /> },
    { name: 'MongoDB', level: 82, icon: <Database className="w-5 h-5" /> },
    { name: 'AWS', level: 80, icon: <Cloud className="w-5 h-5" /> }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI integration and smart responses',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'OpenAI', 'WebSocket', 'Redis'],
      github: '#',
      live: '#'
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using modern web technologies and best practices.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Built responsive web applications and collaborated with design teams to create exceptional user experiences.'
    }
  ];

  if (showWorkHub) {
    return <WorkHub onBack={() => setShowWorkHub(false)} />;
  }

  if (showAnimation) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-gradient-shift overflow-hidden">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-noise opacity-10" />

        {/* Progress Line */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 animate-progress-sweep" />

        {/* FEEHAB Text Animation */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-8">
            {'FEEHAB'.split('').map((letter, index) => (
              <span
                key={index}
                className="text-6xl sm:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-letter-appear neon-glow"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  fontFamily: 'Inter, Orbitron, sans-serif'
                }}
              >
                {letter}
              </span>
            ))}
          </div>
          
          {/* Loading Text */}
          <p className="text-gray-400 text-lg animate-fade-in-delayed">
            Loading Experience...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src="/FEEHAB copy copy.png" alt="FEEHAB" className="h-10 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.toLowerCase()
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => setShowWorkHub(true)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md text-sm font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  WorkHub
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setShowWorkHub(true)}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md text-base font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                WorkHub
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
          <div className="absolute inset-0 bg-noise opacity-5" />
          
          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                FEEHAB
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-300 mb-8 animation-delay-200">
              Full Stack Developer & Creative Technologist
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animation-delay-400">
              Crafting exceptional digital experiences with modern technologies. Passionate about creating scalable solutions and competitive gaming.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animation-delay-600">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6 mt-12 animation-delay-800">
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@feehab.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions and pushing the boundaries of technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <p className="text-gray-300">
                  Specializing in full-stack development with modern frameworks and technologies. 
                  I create scalable, performant applications that deliver exceptional user experiences.
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Palette className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">Design</h3>
                </div>
                <p className="text-gray-300">
                  Combining technical expertise with creative vision to build beautiful, 
                  intuitive interfaces that users love to interact with.
                </p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Gamepad2 className="w-6 h-6 text-pink-400" />
                  <h3 className="text-xl font-semibold">Gaming</h3>
                </div>
                <p className="text-gray-300">
                  Competitive gamer with a passion for esports. This gaming background brings 
                  strategic thinking and quick problem-solving skills to my development work.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="glass p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                    <div className="text-gray-400">Support</div>
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
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks, constantly learning and adapting to new trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-400">{skill.icon}</div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Icons */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: 'React', icon: <Code className="w-8 h-8" /> },
                { name: 'Node.js', icon: <Server className="w-8 h-8" /> },
                { name: 'MongoDB', icon: <Database className="w-8 h-8" /> },
                { name: 'AWS', icon: <Cloud className="w-8 h-8" /> },
                { name: 'Docker', icon: <Package className="w-8 h-8" /> },
                { name: 'GraphQL', icon: <Zap className="w-8 h-8" /> }
              ].map((tech, index) => (
                <div key={tech.name} className="flex flex-col items-center space-y-2 group">
                  <div className="p-4 glass rounded-xl group-hover:bg-white/10 transition-all duration-300 text-blue-400">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in full-stack development and modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My journey in software development, working with amazing teams and building incredible products.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400">contact@feehab.com</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400">+880 123 456 789</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com" className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 text-blue-400 hover:text-blue-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 text-blue-400 hover:text-blue-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@feehab.com" className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 text-blue-400 hover:text-blue-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
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
              <img src="/FEEHAB copy copy.png" alt="FEEHAB" className="h-8 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                FEEHAB
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Full Stack Developer & Creative Technologist
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@feehab.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">
                &copy; 2025 FEEHAB. All rights reserved. Built with passion and modern technologies.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;