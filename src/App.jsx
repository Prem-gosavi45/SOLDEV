import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Twitter, Search, Code2, Terminal, Cpu, Globe, 
  Palette, Database, ExternalLink, Menu, X, ChevronRight, Mail, 
  Trophy, Star, Zap, Layers, Rocket, Monitor, Server, Shield,
  Bot, User, ArrowRight, Activity, ToggleLeft, ToggleRight, Sun, Moon,
  ArrowLeft, MapPin, Calendar, GitCommit, Briefcase, Loader, RotateCw,
  Home, Users, Send, MessageSquare, Image, Handshake, Award, ClipboardList,
  Crown, Gem, Coffee, Sparkles, Quote, Atom, Cloud, Box, Brain,
  Bell, Radio
} from 'lucide-react';

// --- CUSTOM LOGO COMPONENT ---
const SolutionDevelopersLogo = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    className={className}
    role="img"
    aria-label="Golden Soluper's Logo"
  >
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Stylized 'S' Monogram for Solution Developers */}
    {/* Top Curve */}
    <path 
      fill="url(#goldGradient)" 
      d="M70 20 H30 C18 20 8 30 8 42 C8 54 18 60 25 60 H60 V50 H30 C25 50 20 46 20 42 C20 36 25 30 30 30 H70 C76 30 80 34 80 40 V50 H92 V40 C92 28 82 20 70 20 Z" 
      filter="url(#glow)"
    />
    {/* Bottom Curve */}
    <path 
      fill="url(#goldGradient)" 
      d="M30 80 H70 C82 80 92 70 92 58 C92 46 82 40 75 40 H40 V50 H70 C75 50 80 54 80 58 C80 64 75 70 70 70 H30 C24 70 20 66 20 60 V50 H8 V60 C8 72 18 80 30 80 Z" 
      filter="url(#glow)"
    />
    
    {/* Central Hexagon Accent */}
    <path 
        fill="url(#goldGradient)" 
        d="M50 42 L57 46 V54 L50 58 L43 54 V46 Z"
        opacity="0.9"
    />
  </svg>
);

// --- GLOBAL STYLES (Custom Scrollbar & Animations) ---
const GlobalStyles = ({ theme }) => {
  const scrollColor = theme === 'bot' ? '#22c55e' : (theme === 'light' ? '#4f46e5' : '#3b82f6');
  const trackColor = theme === 'bot' ? '#000000' : (theme === 'light' ? '#f1f5f9' : '#0f172a');

  return (
    <style>{`
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: ${trackColor}; 
      }
      ::-webkit-scrollbar-thumb {
        background: ${scrollColor}; 
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: ${theme === 'bot' ? '#16a34a' : '#2563eb'}; 
      }
      
      @keyframes gradient-x {
        0%, 100% {
          background-size: 200% 200%;
          background-position: left center;
        }
        50% {
          background-size: 200% 200%;
          background-position: right center;
        }
      }
      .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
      }
      
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
      
      .perspective-1000 {
        perspective: 1000px;
      }
      .preserve-3d {
        transform-style: preserve-3d;
      }
      
      /* 3D Rotation Animation for Founders Note */
      @keyframes spin-3d {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(-360deg); }
      }
      .animate-spin-3d {
        animation: spin-3d 25s linear infinite;
      }
      .pause-on-hover:hover {
        animation-play-state: paused;
      }
      .backface-hidden {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      
      /* New Shimmer Animation for Loading Bar */
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  );
};

// --- MOCK DATA ---
const MEMBERS_DATA = [
  {
    id: 1,
    name: "Tasnim Chaugule",
    role: "Founder & Lead",
    category: "Full Stack & AI/ML",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Architecting scalable solutions and mentoring the next generation of devs. Obsessed with clean code and distributed systems.",
    location: "Microsoft, Bengalore",
    joined: "March 2021",
    commits: 1240,
    projects: 5,
    skills: [
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "AWS", level: 85 },
      { name: "TypeScript", level: 92 },
      { name: "LLMs", level: 88 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-blue-500 to-cyan-400",
    featured: true,
    personalAchievements: [
      { title: "Smart India Hackathon Winner", image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=400&auto=format&fit=crop", desc: "Led the team to victory in SIH 2023." },
      { title: "Best Paper Award", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=400&auto=format&fit=crop", desc: "Research on AI ethics published in IEEE." }
    ]
  },
  {
    id: 9,
    name: "Hariom Sandve",
    role: "Founder & Strategy",
    category: "Business & Strategy",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    bio: "Driving the strategic vision and operational excellence of the collective. Focusing on sustainable growth and partnerships.",
    location: "Pune, India",
    joined: "March 2021",
    commits: 500,
    projects: 10,
    skills: [
        { name: "Strategy", level: 90 },
        { name: "Management", level: 85 },
        { name: "Operations", level: 88 },
        { name: "Growth", level: 92 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-amber-500 to-orange-600",
    featured: true,
    personalAchievements: [
        { title: "Startup of the Year", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop", desc: "Recognized by Pune Innovation Hub." }
    ]
  },
  {
    id: 10,
    name: "Vaibhav Gangurde",
    role: "Founder & Tech Lead",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    bio: "Technical visionary ensuring our architecture scales. Passionate about bleeding-edge tech and developer experience.",
    location: "Nashik, India",
    joined: "March 2021",
    commits: 1100,
    projects: 12,
    skills: [
        { name: "System Arch", level: 95 },
        { name: "Cloud", level: 90 },
        { name: "Security", level: 85 },
        { name: "DevOps", level: 88 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-red-500 to-rose-600",
    featured: true,
    personalAchievements: [
        { title: "Open Source Contributor", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop", desc: "Top 1% contributor on GitHub in 2024." }
    ]
  },
  {
    id: 2,
    name: "Ragini Waghmare",
    role: "Co-Founder & Technical Director",
    category: "AI & Data",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Turning data into actionable intelligence. Specialist in NLP and computer vision models. Building the brain of the future.",
    location: "IBM, Hyderabad",
    joined: "July 2023",
    commits: 890,
    projects: 8,
    skills: [
        { name: "Python", level: 98 },
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "Data Pipelines", level: 90 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-purple-500 to-pink-500",
    featured: true,
    personalAchievements: [
        { title: "AI Summit Speaker", image: "https://images.unsplash.com/photo-1475721027767-p42f56b2327b?q=80&w=400&auto=format&fit=crop", desc: "Keynote on Future of NLP." }
    ]
  },
  {
    id: 6,
    name: "Prem Gosawi",
    role: "Co-Founder & President",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop",
    bio: "Designing robust APIs that can handle millions of requests. Optimizing queries and ensuring 99.99% uptime.",
    location: "Google, Bangalore",
    joined: "July, 2024",
    commits: 3400,
    projects: 18,
    skills: [
        { name: "Go", level: 92 },
        { name: "PostgreSQL", level: 95 },
        { name: "Redis", level: 85 },
        { name: "Kafka", level: 80 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-indigo-500 to-purple-600",
    featured: true,
    personalAchievements: [
        { title: "Cloud Architect Cert", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop", desc: "Certified Solutions Architect Professional." }
    ]
  },
  {
    id: 3,
    name: "Laxmi Doke",
    role: "Full Stack Developer",
    category: "Design",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f64?q=80&w=400&auto=format&fit=crop",
    bio: "Believes that good design is invisible. Master of Figma and Motion. Crafting experiences that delight users.",
    location: "Infosys, Mysuru",
    joined: "July 2025",
    commits: 450,
    projects: 22,
    skills: [
        { name: "Figma", level: 95 },
        { name: "Tailwind", level: 90 },
        { name: "Motion", level: 85 },
        { name: "Prototyping", level: 88 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-orange-400 to-red-500",
    featured: false,
    personalAchievements: []
  },
  {
    id: 4,
    name: "Durva Shinde",
    role: "DevOps Specialist",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    bio: "Keeping the servers humming. Automation is my love language. If you have to do it twice, automate it.",
    location: "TCS, Mumbai",
    joined: "July 2025",
    commits: 2100,
    projects: 40,
    skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 80 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-emerald-400 to-green-600",
    featured: false,
    personalAchievements: []
  },
  {
    id: 5,
    name: "Riddhi Chaudhari",
    role: "Frontend Developer",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    bio: "Pixel perfectionist. Building smooth, accessible web interfaces. Making the web look good on any device.",
    location: "Cognizant, Kolkata",
    joined: "July 2025",
    commits: 780,
    projects: 12,
    skills: [
        { name: "Vue.js", level: 90 },
        { name: "React", level: 85 },
        { name: "WebGL", level: 75 },
        { name: "GSAP", level: 80 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-cyan-400 to-blue-600",
    featured: false,
    personalAchievements: []
  },
  {
    id: 7,
    name: "Sammed Chaugule",
    role: "Co-Founder & Mobile Lead",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Bringing the desktop experience to your pocket. Expert in cross-platform development for iOS and Android.",
    location: "Meta, Bengalore",
    joined: "July 2025",
    commits: 650,
    projects: 9,
    skills: [
        { name: "Flutter", level: 95 },
        { name: "React Native", level: 85 },
        { name: "Swift", level: 70 },
        { name: "Firebase", level: 90 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-pink-500 to-rose-500",
    featured: false,
    personalAchievements: []
  },
  {
    id: 8,
    name: "Avinash Ailwad",
    role: "Co-Founder & Security",
    category: "Security",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bio: "White hat hacker ensuring our solutions are bulletproof. Security first, always. Finding vulnerabilities before they do.",
    location: "Google, Singapur",
    joined: "June 2025",
    commits: 320,
    projects: 50,
    skills: [
        { name: "Pen Testing", level: 95 },
        { name: "OAuth", level: 90 },
        { name: "Cryptography", level: 85 },
        { name: "Auditing", level: 88 }
    ],
    social: { github: "#", linkedin: "#", twitter: "#" },
    gradient: "from-yellow-400 to-orange-500",
    featured: false,
    personalAchievements: []
  }
];

const FOUNDERS_NOTES = [
  {
    name: "Tasnim Chaugule",
    role: "Founder & Lead",
    quote: "We are students today. Experts tomorrow. Learners forever. We built this collective to stop waiting for permission.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Hariom Sandve",
    role: "Founder & Strategy",
    quote: "Strategy is not about being different. It's about being better. We define the path, then we pave it.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Vaibhav Gangurde",
    role: "Founder & Tech Lead",
    quote: "Code is more than syntax; it's the language of the future. We write the stories of tomorrow in the IDEs of today.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Ragini Waghmare",
    role: "Technical Director",
    quote: "Data whispers the secrets of the universe. We just need to build the ears to listen.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Prem Gosawi",
    role: "President",
    quote: "Reliability is our currency. We build systems that stand the test of time and scale.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
  }
];

const NOTICES = [
  { id: 1, type: 'Urgent', date: 'Oct 24', title: 'Hackathon Registration Closing', desc: 'Final call for the AI Innovation Summit. Teams must submit proposals by Friday.' },
  { id: 2, type: 'System', date: 'Oct 22', title: 'v2.4 Deployment Successful', desc: 'Performance optimizations are now live. API latency reduced by 40%.' },
  { id: 3, type: 'Event', date: 'Oct 20', title: 'Community Meetup', desc: 'Join us this Friday at the Tech Hub for a session on Distributed Systems.' },
];

const LEADERSHIP_TIMELINE = [
    { 
      year: "July 2025 - Dec 2025", 
      leader: "Hariom Sandve", 
      role: "Lead & Founder", 
      desc: "Established the collective strategic vision and operational excellence, laying the groundwork for future growth." 
    },
    { 
      year: "Jan 2026 - June 2026", 
      leader: "Prem Gosawi & Ragini Waghmare", 
      role: "Current Leads", 
      desc: "Spearheading the collective's expansion, overseeing technical operations, and driving the next phase of innovation." 
    }
];

const PROJECTS = [
  {
    title: "Edu-Advisory",
    desc: "AI-driven educational counseling platform helping students choose the right career path.",
    tags: ["React", "Python", "LLMs"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Digi-Traffic",
    desc: "Smart city traffic management system using IoT sensors and real-time computer vision.",
    tags: ["Python", "IoT", "TensorFlow"],
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "DevForge CLI",
    desc: "A developer tool that scaffolds production-ready microservices in seconds.",
    tags: ["Go", "Rust", "Docker"],
    icon: <Terminal className="w-6 h-6" />
  }
];

const GALLERY_DATA = {
  achievements: [
    { title: "Smart India Hackathon 2024 Winners", desc: "1st Place in Smart Automation", image: "bg-yellow-500" },
    { title: "Best Student Startup", desc: "Awarded by Ministry of Tech", image: "bg-blue-500" },
    { title: "100 Days of Code Completion", desc: "Team Milestone", image: "bg-green-500" },
    { title: "Global AI Summit Finalists", desc: "Represented the nation", image: "bg-purple-500" }
  ],
  surveys: [
    { title: "Campus Tech Survey", desc: "Analyzing student needs", image: "bg-red-500" },
    { title: "Industry 4.0 Readiness", desc: "Field research at local factories", image: "bg-orange-500" },
    { title: "User Experience Study", desc: "Feedback loop for Edu-Advisory", image: "bg-teal-500" },
    { title: "Community Outreach", desc: "Teaching code to local schools", image: "bg-pink-500" }
  ]
};

const COLLABORATIONS = [
  { name: "TechCorp Inc.", type: "Industry Partner", desc: "Joint research on AI pipelines." },
  { name: "OpenSource Alliance", type: "Community", desc: "Strategic contribution partnership." },
  { name: "Future University", type: "Academic", desc: "Providing internship opportunities." },
  { name: "CloudSystems", type: "Infrastructure", desc: "Sponsoring our server costs." }
];

const ACHIEVEMENTS = [
  { label: "Projects Shipped", value: "50+", icon: <Rocket className="w-6 h-6" /> },
  { label: "Hackathons Won", value: "12", icon: <Trophy className="w-6 h-6" /> },
  { label: "Lines of Code", value: "1.2M", icon: <Code2 className="w-6 h-6" /> },
  { label: "Contributors", value: "85", icon: <Globe className="w-6 h-6" /> },
];

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend", "AI & Data", "Design", "DevOps", "Mobile", "Security"];

// --- STYLING UTILS ---

const useTheme = () => {
  const [theme, setTheme] = useState('light'); 
  const toggleTheme = () => setTheme(prev => {
    if (prev === 'light') return 'dark';
    if (prev === 'dark') return 'bot';
    return 'light'; 
  });
  return { theme, toggleTheme };
};

// --- BASE COMPONENTS ---

const SectionTitle = ({ title, subtitle, align = "center", theme }) => (
  <div className={`mb-16 ${align === "left" ? "text-left" : "text-center"} relative z-10`}>
    <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight 
      ${theme === 'bot' ? 'text-green-400 font-mono uppercase' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>
      {theme === 'bot' && <span className="mr-2 text-green-600 blink">&gt;</span>}
      {title}
      <span className={theme === 'bot' ? 'text-green-600' : 'text-blue-500'}>{theme === 'bot' ? '_' : '.'}</span>
    </h2>
    <div className={`h-1.5 w-24 rounded-full ${align === "center" ? "mx-auto" : ""} ${theme === 'bot' ? 'bg-green-700 h-0.5' : 'bg-gradient-to-r from-blue-600 to-cyan-400'}`}></div>
    {subtitle && <p className={`mt-6 max-w-2xl mx-auto text-lg 
      ${theme === 'bot' ? 'text-green-600/80 font-mono text-sm' : (theme === 'light' ? 'text-slate-600' : 'text-slate-400')}`}>
      {subtitle}</p>}
  </div>
);

const RevealOnScroll = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}>
      {children}
    </div>
  );
};

// --- ENHANCED BUTTON COMPONENT ---
const Button = ({ children, variant = 'primary', icon: Icon, theme, className = "", onClick, ...props }) => {
  const baseStyles = "relative px-6 py-3 font-bold transition-all duration-300 ease-out flex items-center justify-center gap-2 group cursor-pointer active:scale-95 focus:outline-none tracking-wide overflow-hidden";
  
  const lightStyles = {
    primary: "bg-slate-900 text-white rounded-xl shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] hover:shadow-[0_20px_30px_-5px_rgba(15,23,42,0.4)] hover:-translate-y-1",
    secondary: "bg-white text-slate-700 border border-slate-200 rounded-xl shadow-sm hover:border-blue-500 hover:text-blue-600 hover:shadow-lg",
    outline: "border-2 border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600 rounded-lg bg-transparent"
  };

  const darkStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] border border-white/10 hover:-translate-y-1",
    secondary: "bg-slate-800/80 backdrop-blur-md text-white border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
    outline: "border-2 border-slate-600 text-slate-400 hover:border-white hover:text-white rounded-lg bg-transparent"
  };

  const botStyles = {
    primary: "bg-green-500 text-black border-2 border-green-400 rounded-none uppercase font-mono shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,1)]",
    secondary: "bg-black text-green-500 border-2 border-green-800 rounded-none font-mono uppercase hover:border-green-500 hover:text-green-400 hover:shadow-[inset_0_0_15px_rgba(34,197,94,0.4)]",
    outline: "border border-green-800 text-green-800 hover:text-green-500 hover:border-green-500 rounded-none font-mono uppercase bg-transparent"
  };

  let styles = lightStyles;
  if (theme === 'dark') styles = darkStyles;
  if (theme === 'bot') styles = botStyles;

  let selectedStyle = variant === 'primary' ? styles.primary : (variant === 'secondary' ? styles.secondary : styles.outline);

  return (
    <button className={`${baseStyles} ${selectedStyle} ${className}`} onClick={onClick} {...props}>
      {(theme !== 'bot' && variant === 'primary') && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
      )}
      
      {theme === 'bot' && (
        <span className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1`} />}
      </span>
    </button>
  );
};

// --- FEATURE COMPONENTS ---

const LoadingScreen = ({ theme, onComplete, toggleTheme }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Organic loading simulation with random acceleration
    let current = 0;
    const interval = setInterval(() => {
      // Random increment between 1 and 5
      const increment = Math.random() * 4 + 1;
      current += increment;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 800); 
        }, 600);
      }
      setProgress(current);
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Dynamic Glamorous Gradients based on Theme
  const getBarGradient = () => {
    if (theme === 'bot') return 'bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.6)]';
    if (theme === 'light') return 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]';
    return 'bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]';
  };

  const getTextColor = () => {
    if (theme === 'bot') return 'text-emerald-400';
    if (theme === 'light') return 'text-slate-800';
    return 'text-white';
  };

  const bgClass = theme === 'bot' ? 'bg-black' : (theme === 'light' ? 'bg-slate-50' : 'bg-slate-950');

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-1000 ${bgClass} ${isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'}`}>
      
      {/* Theme Toggle in Corner */}
      <button onClick={toggleTheme} className={`absolute top-8 right-8 p-3 rounded-full transition-all duration-300 z-[110] flex items-center gap-2 group backdrop-blur-md border ${theme === 'bot' ? 'bg-black/50 border-green-500/30 text-green-500' : 'bg-white/10 border-slate-500/20 text-slate-500'}`}>
        <span className="text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute right-full mr-3 whitespace-nowrap">SWITCH MODE</span>
        {theme === 'bot' && <Bot className="w-5 h-5" />}
        {theme === 'light' && <Sun className="w-5 h-5" />}
        {theme === 'dark' && <Moon className="w-5 h-5" />}
      </button>

      <div className="w-full max-w-lg px-8 relative flex flex-col items-center">
        
        {/* Logo Container with Ambient Glow */}
        <div className="relative mb-16 group">
           <div className={`absolute -inset-10 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 blur-3xl rounded-full ${theme === 'bot' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
           <img 
             src="/my-logo.png" 
             alt="Solution Developers Logo" 
             className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl animate-pulse" 
           />
        </div>

        {/* Typography */}
        <div className="text-center mb-10 space-y-2">
          <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${getTextColor()}`}>
            SOLUTION <span className="opacity-50">DEVELOPERS</span>
          </h2>
          <div className="flex items-center justify-center gap-3 opacity-60">
            <span className={`h-[1px] w-8 ${theme === 'bot' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
            <p className={`text-xs font-mono tracking-[0.4em] uppercase ${getTextColor()}`}>
              {theme === 'bot' ? 'INITIALIZING...' : 'INNOVATING FUTURE'}
            </p>
            <span className={`h-[1px] w-8 ${theme === 'bot' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
          </div>
        </div>

        {/* GLAMOROUS LOADING BAR */}
        <div className="w-full relative">
            {/* Percentage Float */}
            <div 
                className={`absolute -top-8 transition-all duration-100 ease-out font-mono font-bold text-xs ${getTextColor()}`}
                style={{ left: `calc(${progress}% - 12px)` }}
            >
                {Math.round(progress)}%
            </div>

            {/* Bar Container (Glass Effect) */}
            <div className={`h-2 w-full rounded-full overflow-hidden backdrop-blur-xl border ${theme === 'bot' ? 'bg-emerald-900/20 border-emerald-500/20' : 'bg-slate-200/50 border-white/50'}`}>
                {/* The Progress Fill */}
                <div 
                    className={`h-full relative transition-all duration-200 ease-out rounded-full ${getBarGradient()}`} 
                    style={{ width: `${progress}%` }}
                >
                    {/* Shimmer Effect Overlay */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"></div>
                    
                    {/* Leading Glow Head */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white box-shadow-[0_0_10px_white] blur-[2px]"></div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

const Background3D = ({ theme }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => {
      mouseRef.current = { x: e.clientX - canvas.width / 2, y: e.clientY - canvas.height / 2 };
    });

    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      scrollRef.current = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
    });

    const cubes = Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * canvas.width * 1.5,
      y: (Math.random() - 0.5) * canvas.height * 1.5,
      z: Math.random() * 800 + 200,
      size: Math.random() * 40 + 20,
      vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, vz: (Math.random() - 0.5) * 2,
      rotX: Math.random() * Math.PI, rotY: Math.random() * Math.PI,
      vRotX: (Math.random() - 0.5) * 0.04, vRotY: (Math.random() - 0.5) * 0.04
    }));

    const project = (x, y, z) => {
      const scale = 800 / (800 + z);
      return { x: x * scale + canvas.width / 2, y: y * scale + canvas.height / 2, scale };
    };

    const rotate = (a, b, angle) => ({ a: a * Math.cos(angle) - b * Math.sin(angle), b: a * Math.sin(angle) + b * Math.cos(angle) });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const strokeColor = theme === 'bot' ? '34, 197, 94' : (theme === 'light' ? '99, 102, 241' : '59, 130, 246');

      cubes.forEach(cube => {
        cube.x += cube.vx; cube.y += cube.vy; cube.z += cube.vz;
        
        // Interactions
        const dx = cube.x - mouseRef.current.x * 1.5;
        const dy = cube.y - mouseRef.current.y * 1.5;
        if (Math.sqrt(dx*dx + dy*dy) < 400) {
            cube.vx += (dx / 400) * 0.8; cube.vy += (dy / 400) * 0.8;
        }
        if (Math.abs(scrollRef.current) > 0.1) cube.vy -= scrollRef.current * 0.15;

        cube.rotX += cube.vRotX; cube.rotY += cube.vRotY;
        cube.vx *= 0.98; cube.vy *= 0.98; cube.vz *= 0.98;

        if (cube.z > 1200) cube.z = 100; if (cube.z < 100) cube.z = 1200;

        const s = cube.size;
        const vertices = [
          {x:-s, y:-s, z:-s}, {x:s, y:-s, z:-s}, {x:s, y:s, z:-s}, {x:-s, y:s, z:-s},
          {x:-s, y:-s, z:s},  {x:s, y:-s, z:s},  {x:s, y:s, z:s},  {x:-s, y:s, z:s}
        ].map(v => {
            let r = rotate(v.y, v.z, cube.rotX); let vy = r.a, vz = r.b;
            r = rotate(v.x, vz, cube.rotY); let vx = r.a; vz = r.b;
            return project(vx + cube.x, vy + cube.y, vz + cube.z);
        });

        ctx.beginPath();
        const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
        ctx.strokeStyle = `rgba(${strokeColor}, ${Math.max(0.1, 1 - cube.z/1200)})`;
        ctx.lineWidth = 1.5 * vertices[0].scale;
        edges.forEach(e => { ctx.moveTo(vertices[e[0]].x, vertices[e[0]].y); ctx.lineTo(vertices[e[1]].x, vertices[e[1]].y); });
        ctx.stroke();
      });
      scrollRef.current *= 0.9;
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
};

const DevBot = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([{ type: 'bot', text: 'Hello! I am DevBot. How can I assist you today?' }]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages(prev => [...prev, { type: 'user', text: input }]);
        setInput("");
        setTimeout(() => {
            let botText = "I'm focusing on the code right now. Contact the team for more info!";
            if (input.toLowerCase().includes('hire') || input.toLowerCase().includes('contact')) botText = "You can reach us via the Contact form below or email us directly at hello@solutiondevs.com";
            else if (input.toLowerCase().includes('tech')) botText = "We specialize in React, Node.js, Python, Go, and Cloud Native technologies.";
            setMessages(prev => [...prev, { type: 'bot', text: botText }]);
        }, 800);
    };

    const containerClass = theme === 'bot' ? 'bg-black border-green-500' : (theme === 'light' ? 'bg-white border-slate-200 shadow-xl' : 'bg-slate-900 border-slate-700 shadow-xl');
    const textClass = theme === 'bot' ? 'text-green-500 font-mono' : (theme === 'light' ? 'text-slate-800' : 'text-white');

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {isOpen && (
                <div className={`mb-4 w-80 h-96 rounded-2xl border flex flex-col overflow-hidden ${containerClass}`}>
                    <div className={`p-4 border-b flex justify-between items-center ${theme === 'bot' ? 'border-green-800 bg-green-900/20' : 'border-slate-700/50 bg-slate-800/50'}`}>
                        <span className={`font-bold flex items-center gap-2 ${textClass}`}><Bot className="w-5 h-5" /> DevBot AI</span>
                        <button onClick={() => setIsOpen(false)} className={textClass}><X className="w-4 h-4"/></button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto space-y-3">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.type === 'user' ? (theme === 'bot' ? 'bg-green-900/50 text-green-400 border border-green-700' : 'bg-blue-600 text-white') : (theme === 'bot' ? 'bg-black border border-green-800 text-green-500' : (theme === 'light' ? 'bg-slate-100 text-slate-700' : 'bg-slate-800 text-slate-300'))}`}>{msg.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-slate-700/50 flex gap-2">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Type a message..." className={`flex-1 bg-transparent border-none outline-none text-sm ${textClass}`} />
                        <button onClick={handleSend} className={theme === 'bot' ? 'text-green-500' : 'text-blue-500'}><Send className="w-4 h-4" /></button>
                    </div>
                </div>
            )}
            <button onClick={() => setIsOpen(!isOpen)} className={`p-4 rounded-full shadow-lg transition-transform hover:scale-110 ${theme === 'bot' ? 'bg-black border border-green-500 text-green-500' : 'bg-blue-600 text-white'}`}>
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
};

const TechTicker = ({ theme }) => {
    const techItems = [
      { name: "React", icon: Atom },
      { name: "Node.js", icon: Server },
      { name: "Python", icon: Terminal },
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Layers },
      { name: "Go", icon: Code2 },
      { name: "Rust", icon: Shield },
      { name: "TensorFlow", icon: Brain },
      { name: "Figma", icon: Palette },
      { name: "Next.js", icon: Zap },
      { name: "GraphQL", icon: Database }
    ];

    return (
        <div className={`w-full py-6 overflow-hidden border-y backdrop-blur-sm ${theme === 'bot' ? 'bg-black/50 border-green-900' : (theme === 'light' ? 'bg-white/50 border-slate-200' : 'bg-slate-900/50 border-slate-800')}`}>
            <div className="flex animate-marquee whitespace-nowrap">
                {[...techItems, ...techItems, ...techItems].map((item, i) => {
                    const Icon = item.icon;
                    return (
                        <div key={i} className="mx-8 flex items-center gap-2 group">
                             <Icon className={`w-6 h-6 ${theme === 'bot' ? 'text-green-500' : (theme === 'light' ? 'text-blue-600' : 'text-blue-400')} transition-transform group-hover:scale-110`} />
                             <span className={`text-lg font-bold uppercase tracking-wider ${theme === 'bot' ? 'text-green-500/70 font-mono' : (theme === 'light' ? 'text-slate-500' : 'text-slate-400')}`}>
                                {item.name}
                             </span>
                             <span className={`text-xs ml-2 ${theme === 'bot' ? 'text-green-900' : 'text-slate-700/20'}`}>•</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- NEW COMPONENT: NOTICE SECTION ---
const NoticeSection = ({ theme }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-20 px-4">
      <div className={`rounded-xl overflow-hidden border transition-all duration-300 ${theme === 'bot' ? 'bg-black/80 border-green-900' : (theme === 'light' ? 'bg-white/60 border-slate-200 shadow-lg' : 'bg-slate-900/60 border-slate-800 shadow-xl')}`}>
        {/* Header */}
        <div className={`p-4 border-b flex items-center justify-between ${theme === 'bot' ? 'bg-green-900/20 border-green-800' : (theme === 'light' ? 'bg-slate-50/80 border-slate-200' : 'bg-slate-800/50 border-slate-700')}`}>
          <div className="flex items-center gap-2">
            <Radio className={`w-5 h-5 ${theme === 'bot' ? 'text-green-500 animate-pulse' : 'text-blue-500'}`} />
            <span className={`font-bold tracking-wider uppercase text-sm ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-800' : 'text-white')}`}>
              {theme === 'bot' ? 'SYSTEM_BROADCAST' : 'Notice Board'}
            </span>
          </div>
          <div className={`text-xs px-2 py-1 rounded ${theme === 'bot' ? 'text-green-600 font-mono' : 'text-slate-500 bg-slate-200/50'}`}>
            LIVE FEED
          </div>
        </div>
        
        {/* Content */}
        <div className="divide-y divide-slate-200/10">
          {NOTICES.map((notice) => (
            <div key={notice.id} className={`p-4 flex flex-col md:flex-row gap-4 items-start md:items-center hover:bg-white/5 transition-colors ${theme === 'bot' ? 'hover:bg-green-900/10' : ''}`}>
              <div className={`flex-shrink-0 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide w-24 text-center ${
                notice.type === 'Urgent' 
                  ? (theme === 'bot' ? 'bg-red-900/30 text-red-500 border border-red-800' : 'bg-red-100 text-red-600') 
                  : notice.type === 'System'
                    ? (theme === 'bot' ? 'bg-blue-900/30 text-blue-400 border border-blue-800' : 'bg-blue-100 text-blue-600')
                    : (theme === 'bot' ? 'bg-green-900/30 text-green-500 border border-green-800' : 'bg-green-100 text-green-600')
              }`}>
                {notice.type}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>
                    {notice.title}
                  </span>
                  <span className={`text-xs ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>• {notice.date}</span>
                </div>
                <p className={`text-sm truncate ${theme === 'bot' ? 'text-green-600/80 font-mono' : (theme === 'light' ? 'text-slate-600' : 'text-slate-400')}`}>
                  {notice.desc}
                </p>
              </div>
              <button className={`hidden md:block p-2 rounded-full transition-colors ${theme === 'bot' ? 'text-green-700 hover:text-green-400 hover:bg-green-900/20' : 'text-slate-400 hover:text-blue-500 hover:bg-blue-50'}`}>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- NEW COMPONENT: 3D FOUNDERS CAROUSEL ---
const FoundersCarousel = ({ theme }) => {
  const radius = 260; 
  const count = FOUNDERS_NOTES.length;
  
  return (
    <div className="w-full h-[320px] perspective-1000 overflow-visible mb-12 flex flex-col items-center justify-center relative z-20">
      <h3 className={`mb-8 text-sm font-bold uppercase tracking-widest flex items-center gap-2 ${theme === 'bot' ? 'text-green-500 font-mono' : (theme === 'light' ? 'text-slate-500' : 'text-slate-400')}`}>
         <Quote className="w-4 h-4" /> {theme === 'bot' ? "FOUNDERS_LOGS" : "Elders' Notes"}
      </h3>
      {/* 3D Container */}
      <div className="relative w-[320px] h-[200px] preserve-3d animate-spin-3d pause-on-hover cursor-pointer">
         {FOUNDERS_NOTES.map((note, index) => {
            const angle = (360 / count) * index;
            // Calculate position: rotateY then translateZ pushes them out in a circle
            return (
               <div 
                 key={index}
                 className={`absolute inset-0 rounded-2xl p-6 border backdrop-blur-md backface-hidden flex flex-col justify-center transition-all duration-300
                    ${theme === 'bot' ? 'bg-black/90 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]' : (theme === 'light' ? 'bg-white/95 border-slate-200 shadow-xl' : 'bg-slate-900/95 border-slate-700 shadow-2xl')}
                 `}
                 style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                 }}
               >
                  <div className="flex items-center gap-4 mb-3">
                     <img src={note.image} alt={note.name} className={`w-12 h-12 rounded-full border-2 object-cover ${theme === 'bot' ? 'border-green-500' : 'border-blue-500'}`} />
                     <div>
                        <h4 className={`text-sm font-bold ${theme === 'bot' ? 'text-green-400' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>{note.name}</h4>
                        <p className={`text-xs ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>{note.role}</p>
                     </div>
                  </div>
                  <p className={`text-sm italic leading-relaxed ${theme === 'bot' ? 'text-green-600 font-mono' : (theme === 'light' ? 'text-slate-600' : 'text-slate-300')}`}>"{note.quote}"</p>
               </div>
            );
         })}
      </div>
    </div>
  )
}

const ContactSection = ({ theme }) => {
    const inputClass = `w-full px-4 py-3 rounded-lg outline-none transition-all ${theme === 'bot' ? 'bg-black border border-green-800 text-green-500 placeholder-green-800 focus:border-green-500 font-mono' : (theme === 'light' ? 'bg-slate-50 border border-slate-200 text-slate-800 focus:border-indigo-500' : 'bg-slate-900 border border-slate-700 text-white focus:border-blue-500')}`;
    return (
        <div className={`py-20 px-6 ${theme === 'bot' ? 'bg-black border-t border-green-900' : (theme === 'light' ? 'bg-white border-t border-slate-200' : 'bg-slate-950 border-t border-slate-800')}`}>
            <div className="max-w-4xl mx-auto">
                <SectionTitle theme={theme} title="Initialize Contact" subtitle="Ready to start a project? Transmit your data." />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <input type="text" className={inputClass} placeholder="Name" />
                        <input type="email" className={inputClass} placeholder="Email" />
                        <textarea className={`${inputClass} h-32 resize-none`} placeholder="Message..."></textarea>
                        <Button theme={theme} variant="primary" className="w-full">{theme === 'bot' ? 'TRANSMIT_PACKET' : 'Send Message'}</Button>
                    </div>
                    <div className={`p-8 rounded-3xl border flex flex-col justify-center items-center text-center space-y-6 ${theme === 'bot' ? 'bg-black border-green-900' : (theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-900 border-slate-800')}`}>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${theme === 'bot' ? 'bg-green-900/20 text-green-500' : 'bg-blue-600/10 text-blue-600'}`}><Mail className="w-8 h-8" /></div>
                        <div><h3 className={`text-xl font-bold mb-1 ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>Direct Channel</h3><p className={theme === 'bot' ? 'text-green-700 font-mono' : 'text-slate-500'}>hello@solutiondevelopers.com</p></div>
                        <div className="flex gap-4"><Github className="w-6 h-6" /><Twitter className="w-6 h-6" /><Linkedin className="w-6 h-6" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LeadershipTimeline = ({ theme }) => {
    return (
        <div className={`mb-24 p-8 rounded-3xl border relative overflow-hidden ${theme === 'bot' ? 'bg-black/50 border-green-900 rounded-none' : (theme === 'light' ? 'bg-white/50 border-slate-200' : 'bg-slate-900/50 border-slate-800')}`}>
            <h3 className={`text-2xl font-bold mb-12 flex items-center gap-2 ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}><Activity className="w-6 h-6" /> Legacy Protocol</h3>
            <div className="relative">
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${theme === 'bot' ? 'bg-green-900' : 'bg-slate-700'}`}></div>
                <div className="space-y-12">
                    {LEADERSHIP_TIMELINE.map((item, idx) => (
                        <div key={idx} className="relative pl-12">
                            <div className={`absolute left-[11px] top-1.5 w-3 h-3 rounded-full border-2 ${theme === 'bot' ? 'bg-black border-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-slate-900 border-blue-500'}`}></div>
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                <span className={`text-sm font-bold px-2 py-0.5 rounded ${theme === 'bot' ? 'bg-green-900/30 text-green-400 font-mono' : 'bg-blue-600/10 text-blue-500'}`}>{item.year}</span>
                                <h4 className={`text-lg font-bold ${theme === 'bot' ? 'text-white' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>{item.leader}</h4>
                                <span className={`text-sm ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>// {item.role}</span>
                            </div>
                            <p className={`${theme === 'bot' ? 'text-green-800 font-mono text-sm' : 'text-slate-400'}`}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- NEW FOUNDERS SECTION ---

const FoundersSection = ({ theme }) => {
    // Explicitly select Founders by Name to ensure correct order
    const founders = MEMBERS_DATA.filter(m => ["Hariom Sandve", "Tasnim Chaugule", "Vaibhav Gangurde"].includes(m.name));
    // Sort logic to match request: Hariom, Tasnim, Vaibhav
    founders.sort((a, b) => {
        const order = ["Hariom Sandve", "Tasnim Chaugule", "Vaibhav Gangurde"];
        return order.indexOf(a.name) - order.indexOf(b.name);
    });

    // Explicitly select Co-Founders
    const coFounders = MEMBERS_DATA.filter(m => ["Prem Gosawi", "Ragini Waghmare", "Avinash Ailwad", "Sammed Chaugule"].includes(m.name));

    // Founder Styles (Gold/Green)
    const founderCardClass = theme === 'bot' ? 'bg-black/90 border-green-500 rounded-none' : (theme === 'light' ? 'bg-white/90 border-amber-200 shadow-xl' : 'bg-slate-900/90 border-amber-500/50');
    const founderTextClass = theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white');
    const founderSubText = theme === 'bot' ? 'text-green-700' : 'text-amber-500';

    // Co-Founder Styles (Silver)
    const coFounderCardClass = theme === 'bot' ? 'bg-black/80 border-gray-500 rounded-none' : (theme === 'light' ? 'bg-white/80 border-slate-300 shadow-md' : 'bg-slate-900/80 border-slate-500');
    const coFounderTextClass = theme === 'bot' ? 'text-gray-300 font-mono' : (theme === 'light' ? 'text-slate-800' : 'text-slate-200');
    const coFounderSubText = theme === 'bot' ? 'text-gray-500' : 'text-slate-400';

    return (
        <div className="mb-24">
             {/* --- TIER 1: FOUNDERS --- */}
             <div className="flex items-end justify-between mb-8">
                 <h3 className={`text-2xl font-bold flex items-center gap-2 ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>
                    <Crown className={`w-6 h-6 ${theme === 'bot' ? 'text-green-500' : 'text-amber-500'}`} /> 
                    The Originators
                 </h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                 {founders.map(founder => (
                     <div key={founder.id} className={`p-8 border-2 flex flex-col items-center text-center gap-6 relative overflow-hidden group transition-all hover:scale-[1.02] ${founderCardClass}`}>
                         {theme !== 'bot' && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>}
                         <div className={`w-32 h-32 flex-shrink-0 rounded-full border-4 overflow-hidden shadow-lg ${theme === 'bot' ? 'border-green-500' : 'border-amber-400'}`}>
                             <img src={founder.image} alt={founder.name} className="w-full h-full object-cover bg-slate-800" />
                         </div>
                         <div className="relative z-10">
                             <h4 className={`text-2xl font-bold mb-2 ${founderTextClass}`}>{founder.name}</h4>
                             <p className={`font-bold tracking-wide uppercase text-sm mb-4 ${founderSubText}`}>{founder.role}</p>
                             <p className={`text-sm leading-relaxed ${theme === 'bot' ? 'text-green-800' : 'text-slate-500'}`}>{founder.bio}</p>
                         </div>
                     </div>
                 ))}
             </div>

             {/* --- TIER 2: CO-FOUNDERS --- */}
             <div className="flex items-end justify-between mb-8">
                 <h3 className={`text-xl font-bold flex items-center gap-2 ${theme === 'bot' ? 'text-gray-400 font-mono' : (theme === 'light' ? 'text-slate-700' : 'text-slate-300')}`}>
                    <Gem className={`w-5 h-5 ${theme === 'bot' ? 'text-gray-500' : 'text-slate-400'}`} /> 
                    Co-Founders
                 </h3>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {coFounders.map(co => (
                     <div key={co.id} className={`p-6 border-2 flex flex-col items-center text-center gap-4 relative overflow-hidden group transition-all hover:scale-[1.02] ${coFounderCardClass}`}>
                         <div className={`w-24 h-24 flex-shrink-0 rounded-full border-2 overflow-hidden shadow-md ${theme === 'bot' ? 'border-gray-500' : 'border-slate-300'}`}>
                             <img src={co.image} alt={co.name} className="w-full h-full object-cover bg-slate-800" />
                         </div>
                         <div className="relative z-10">
                             <h4 className={`text-lg font-bold mb-1 ${coFounderTextClass}`}>{co.name}</h4>
                             <p className={`font-semibold text-xs uppercase tracking-wider mb-2 ${coFounderSubText}`}>{co.role}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    );
};

// --- DISPLAY COMPONENTS ---

const SpotlightCard = ({ member, theme, onClick }) => (
  <div onClick={() => onClick(member)} className={`relative h-[26rem] overflow-hidden group cursor-pointer border ${theme === 'bot' ? 'rounded-none border-green-800 hover:border-green-500' : 'rounded-3xl border-transparent hover:border-white/20'}`}>
    {theme === 'bot' ? <div className="absolute inset-0 bg-black/80"><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div></div> : <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-90 transition-opacity duration-300`}></div>}
    <img src={member.image} alt={member.name} className={`absolute right-[-20px] bottom-[-20px] w-64 h-64 object-cover transform group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 opacity-80 mix-blend-overlay`} />
    <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
      <div className="flex justify-between items-start">
        <span className={`px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wider ${theme === 'bot' ? 'bg-green-900/50 text-green-400 border border-green-600 rounded-none' : 'bg-white/20 rounded-full text-white'}`}>Lead</span>
        <div className={`p-2 transition-colors ${theme === 'bot' ? 'bg-green-900/30 text-green-400' : 'bg-white/10 rounded-full hover:bg-white/20'}`}><Star className={`w-5 h-5 ${theme === 'bot' ? 'text-green-500' : 'text-yellow-300 fill-yellow-300'}`} /></div>
      </div>
      <div>
        <h3 className={`text-3xl font-bold mb-1 ${theme === 'bot' ? 'text-green-400 font-mono' : 'text-white'}`}>{member.name}</h3>
        <p className={`font-medium mb-4 ${theme === 'bot' ? 'text-green-700 font-mono uppercase text-sm' : 'text-white/80'}`}>{member.role}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {member.skills.slice(0, 3).map((skill, i) => <span key={i} className={`text-xs font-semibold px-2 py-1 ${theme === 'bot' ? 'bg-green-900/20 text-green-500 border border-green-800 rounded-none font-mono' : 'bg-black/20 text-white/80 rounded'}`}>#{skill.name}</span>)}
        </div>
        <Button theme={theme} variant={theme === 'bot' ? 'outline' : 'secondary'} className="w-full text-center group-hover:bg-white group-hover:text-black">View Profile</Button>
      </div>
    </div>
  </div>
);

const DirectoryCard = ({ member, theme, onClick }) => (
  <div onClick={() => onClick(member)} className={`p-4 transition-all flex items-center gap-4 group relative overflow-hidden backdrop-blur-sm border ${theme === 'bot' ? 'bg-black/80 border-green-900 hover:border-green-500 rounded-none' : (theme === 'light' ? 'bg-white/80 rounded-xl border-slate-200 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1' : 'bg-slate-900/80 rounded-xl border-slate-800 hover:border-slate-600 hover:-translate-y-1')}`}>
    <div className={`h-16 w-16 flex-shrink-0 overflow-hidden ${theme === 'bot' ? 'rounded-none border border-green-800 grayscale' : (theme === 'light' ? 'rounded-full bg-slate-100 border border-slate-200' : 'rounded-full bg-slate-800 border border-slate-700')}`}>
      <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
    </div>
    <div className="flex-1 min-w-0 relative z-10">
      <h4 className={`font-bold truncate transition-colors ${theme === 'bot' ? 'text-green-400 font-mono group-hover:text-green-300' : (theme === 'light' ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400')}`}>{member.name}</h4>
      <p className={`text-xs uppercase tracking-wide mb-2 ${theme === 'bot' ? 'text-green-800 font-mono' : (theme === 'light' ? 'text-slate-500' : 'text-slate-400')}`}>{member.role}</p>
    </div>
    <div className="flex flex-col gap-2"><button className={`p-2 transition-colors ${theme === 'bot' ? 'text-green-700 hover:text-green-400' : (theme === 'light' ? 'text-slate-400 hover:text-slate-900' : 'text-slate-500 hover:text-white')}`}><ExternalLink className="w-4 h-4" /></button></div>
  </div>
);

// --- VIEW COMPONENTS ---

const Navbar = ({ theme, toggleTheme, activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Team', id: 'team', icon: Users },
    { name: 'Projects', id: 'projects', icon: Briefcase },
    { name: 'Gallery', id: 'gallery', icon: Image },
    { name: 'Collabs', id: 'collabs', icon: Handshake }
  ];

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4" />;
    if (theme === 'bot') return <Bot className="w-4 h-4" />;
    return <Moon className="w-4 h-4" />;
  };

  const getThemeLabel = () => {
    if (theme === 'light') return 'LIGHT';
    if (theme === 'bot') return 'BOT';
    return 'DARK';
  };

  const getNavButtonStyle = (linkId) => {
    const isActive = activePage === linkId;
    let style = "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ";
    if (theme === 'bot') {
        style += "rounded-none border-l-2 border-r-2 " + (isActive ? "border-green-500 bg-green-900/30 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "border-transparent text-green-700 hover:text-green-400 hover:bg-green-900/10");
    } else {
        if (isActive) {
            // Updated to be a distinct pill shape for light/dark modes
            if (theme === 'light') style += "bg-white text-indigo-600 shadow-md transform scale-105"; 
            else style += "bg-blue-600 text-white shadow-lg shadow-blue-500/25 transform scale-105";
        } else {
            if (theme === 'light') style += "text-slate-600 hover:bg-white/50 hover:text-slate-900";
            else style += "text-slate-400 hover:text-white hover:bg-white/10";
        }
    }
    return style;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? (theme === 'bot' ? "bg-black/90 border-b border-green-900 py-3" : (theme === 'light' ? "bg-white/30 backdrop-blur-xl border-b border-slate-200 py-3" : "bg-slate-950/30 backdrop-blur-xl border-b border-slate-800 py-3")) : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer ${theme === 'bot' ? 'text-green-500 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`} onClick={() => onNavigate('home')}>
            {/* Replaced SVG with Image - Change 'image_cd1378.png' to your uploaded file name */}
            <img 
              src="/my-logo.png" 
              alt="Solution Developers" 
              className="w-10 h-10 object-contain" 
            />
            SOLUTION DEVELOPERS
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className={`flex items-center p-1.5 rounded-full border backdrop-blur-md transition-colors mr-4 ${theme === 'bot' ? 'bg-black/50 border-green-900 rounded-none' : (theme === 'light' ? 'bg-white/40 border-slate-200 shadow-sm' : 'bg-slate-900/40 border-slate-700 shadow-xl')}`}>
              {navLinks.map(link => {
                const Icon = link.icon;
                return <button key={link.id} onClick={() => onNavigate(link.id)} className={getNavButtonStyle(link.id)}><Icon className={`w-4 h-4 ${theme === 'bot' && activePage === link.id ? 'animate-pulse' : ''}`} /><span>{link.name}</span></button>;
              })}
            </div>
            <button onClick={toggleTheme} className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border transition-all shadow-sm ${theme === 'bot' ? 'border-green-500 text-green-500 hover:bg-green-900/30 rounded-none' : (theme === 'light' ? 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-md' : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/10')}`}>{getThemeIcon()}{getThemeLabel()}</button>
          </div>
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className={theme === 'bot' ? 'text-green-500' : (theme === 'light' ? 'text-slate-700' : 'text-white')}>{getThemeIcon()}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = ({ theme, onNavigate }) => (
  <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-transparent">
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-20">
      <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 transition-colors cursor-pointer backdrop-blur-md ${theme === 'bot' ? 'bg-black/50 border border-green-700 rounded-none' : (theme === 'light' ? 'rounded-full bg-white/50 border border-slate-200 shadow-sm' : 'rounded-full bg-slate-900/50 border border-slate-700')}`}>
        <span className="flex h-2 w-2 relative">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme === 'bot' ? 'bg-green-400' : 'bg-green-400'}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${theme === 'bot' ? 'bg-green-500' : 'bg-green-500'}`}></span>
        </span>
        <span className={`text-sm font-medium ${theme === 'bot' ? 'text-green-500 font-mono tracking-widest uppercase' : (theme === 'light' ? 'text-slate-600' : 'text-slate-300')}`}>{theme === 'bot' ? 'SYSTEM ONLINE v2.0' : 'v2.0 System Online'}</span>
      </div>
      <h1 className={`text-6xl md:text-8xl font-black mb-6 leading-tight ${theme === 'bot' ? 'text-green-500 font-mono tracking-tighter' : (theme === 'light' ? 'text-slate-900 tracking-tighter' : 'text-white tracking-tighter')}`}>
        {theme === 'bot' ? 'INITIATE_' : 'SOLVE'} <span className={`text-transparent bg-clip-text ${theme === 'bot' ? 'bg-green-400 animate-pulse' : 'bg-gradient-to-r from-blue-400 to-cyan-300'}`}>{theme === 'bot' ? 'FUTURE' : 'FUTURE'}</span><br />
        <span className={theme === 'bot' ? 'text-green-800 text-5xl md:text-7xl' : (theme === 'light' ? 'text-slate-400' : 'text-slate-600')}>{theme === 'bot' ? '>> DEVELOP_TODAY();' : 'DEVELOP TODAY.'}</span>
      </h1>
      <p className={`text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${theme === 'bot' ? 'text-green-700 font-mono text-sm' : (theme === 'light' ? 'text-slate-600' : 'text-slate-400')}`}>Once A Soluper , Always a Solution Developer.</p>
      
      {/* 3D ROTATING FOUNDERS NOTE CAROUSEL */}
      <FoundersCarousel theme={theme} />

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <Button theme={theme} variant="primary" icon={theme === 'bot' ? Terminal : ChevronRight} onClick={() => onNavigate('team')}>{theme === 'bot' ? 'EXECUTE: MEET_SQUAD' : 'Meet the Squad'}</Button>
        <Button theme={theme} variant="secondary" icon={theme === 'bot' ? Code2 : Terminal} onClick={() => onNavigate('projects')}>{theme === 'bot' ? 'SCAN ARSENAL' : 'View Arsenal'}</Button>
      </div>

      <NoticeSection theme={theme} />

      <TechTicker theme={theme} />
    </div>
  </section>
);

const GalleryPage = ({ theme }) => {
    const [activeTab, setActiveTab] = useState('achievements');
    const data = GALLERY_DATA[activeTab];

    const cardClass = theme === 'bot' ? 'bg-black/80 border border-green-900 hover:border-green-500' : (theme === 'light' ? 'bg-white/80 border border-slate-200 hover:border-blue-300' : 'bg-slate-900/80 border border-slate-700 hover:border-blue-500');
    const textClass = theme === 'bot' ? 'text-green-400' : (theme === 'light' ? 'text-slate-900' : 'text-white');

    return (
        <section className="px-6 pb-24 min-h-screen pt-24 bg-transparent relative z-10">
             <div className="max-w-7xl mx-auto">
                <SectionTitle theme={theme} title="Visual Log" subtitle="Capturing our journey." />
                
                <div className="flex justify-center mb-12 gap-4">
                    <button onClick={() => setActiveTab('achievements')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'achievements' ? (theme === 'bot' ? 'bg-green-900/30 text-green-500 border border-green-500' : 'bg-blue-600 text-white') : (theme === 'bot' ? 'text-green-700' : 'text-slate-500')}`}>
                        <Award className="w-4 h-4 inline mr-2"/> Achievements
                    </button>
                    <button onClick={() => setActiveTab('surveys')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'surveys' ? (theme === 'bot' ? 'bg-green-900/30 text-green-500 border border-green-500' : 'bg-blue-600 text-white') : (theme === 'bot' ? 'text-green-700' : 'text-slate-500')}`}>
                        <ClipboardList className="w-4 h-4 inline mr-2"/> Surveys & Events
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item, idx) => (
                        <div key={idx} className={`group relative aspect-square overflow-hidden rounded-2xl ${cardClass} hover:-translate-y-2 transition-all duration-300 shadow-xl`}>
                             <div className={`absolute inset-0 ${item.image} opacity-80 group-hover:scale-110 transition-transform duration-500`}></div>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                                 <h3 className={`text-lg font-bold text-white mb-1`}>{item.title}</h3>
                                 <p className="text-sm text-slate-300">{item.desc}</p>
                             </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

const CollaborationsPage = ({ theme }) => (
    <section className="px-6 pb-24 min-h-screen pt-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
             <SectionTitle theme={theme} title="Alliances" subtitle="Strategic partners and friends." />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {COLLABORATIONS.map((collab, idx) => (
                     <div key={idx} className={`p-8 rounded-2xl border flex items-center gap-6 hover:shadow-2xl transition-all duration-300 ${theme === 'bot' ? 'bg-black/50 border-green-900' : (theme === 'light' ? 'bg-white/50 border-slate-200 hover:bg-white/80' : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900/80')}`}>
                         <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${theme === 'bot' ? 'bg-green-900/20 text-green-500' : 'bg-blue-600/10 text-blue-500'}`}>
                             {collab.name.charAt(0)}
                         </div>
                         <div>
                             <h3 className={`text-xl font-bold ${theme === 'bot' ? 'text-green-400' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}>{collab.name}</h3>
                             <span className={`text-xs uppercase tracking-wider font-bold ${theme === 'bot' ? 'text-green-700' : 'text-blue-500'}`}>{collab.type}</span>
                             <p className={`mt-2 text-sm ${theme === 'bot' ? 'text-green-800' : 'text-slate-500'}`}>{collab.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    </section>
);

const TeamPage = ({ theme, onMemberClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredMembers = MEMBERS_DATA.filter(m => m.featured);
  const filteredMembers = MEMBERS_DATA.filter(member => {
    const matchesCategory = activeCategory === "All" || member.category === activeCategory;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="px-6 pb-24 min-h-screen pt-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionTitle theme={theme} title="The Syndicate" subtitle="Meet the minds behind the machine." />
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <h3 className={`text-2xl font-bold flex items-center gap-2 ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}><Zap className={`w-6 h-6 ${theme === 'bot' ? 'text-green-500' : 'text-yellow-400'}`} /> {theme === 'bot' ? 'VANGUARD_UNIT' : 'Vanguard Unit'}</h3>
            <span className={`text-sm hidden sm:block ${theme === 'bot' ? 'text-green-800 font-mono' : (theme === 'light' ? 'text-slate-500' : 'text-slate-500')}`}>/// TOP CONTRIBUTORS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMembers.map((member) => <RevealOnScroll key={member.id}><SpotlightCard member={member} theme={theme} onClick={() => onMemberClick(member)} /></RevealOnScroll>)}
          </div>
        </div>
        
        {/* NEW SECTION: FOUNDERS & CO-FOUNDERS */}
        <FoundersSection theme={theme} />

        <LeadershipTimeline theme={theme} />

        <div className={`p-6 md:p-8 backdrop-blur-md ${theme === 'bot' ? 'bg-black/90 border border-green-900 rounded-none' : (theme === 'light' ? 'bg-white/90 rounded-3xl border border-slate-200 shadow-sm' : 'bg-slate-900/90 rounded-3xl border border-slate-800')}`}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
            <h3 className={`text-2xl font-bold flex items-center gap-2 ${theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white')}`}><Database className={`w-6 h-6 ${theme === 'bot' ? 'text-green-500' : 'text-blue-400'}`} /> Member Directory</h3>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative group">
                <Search className={`absolute left-3 top-2.5 h-4 w-4 ${theme === 'bot' ? 'text-green-700' : 'text-slate-500 group-focus-within:text-blue-400'}`} />
                <input type="text" placeholder="Search..." className={`border text-sm pl-10 pr-4 py-2 w-full focus:outline-none transition-colors bg-transparent ${theme === 'bot' ? 'border-green-800 text-green-400 rounded-none focus:border-green-500 font-mono' : (theme === 'light' ? 'border-slate-200 text-slate-900 rounded-xl focus:border-blue-500' : 'border-slate-800 text-white rounded-xl focus:border-blue-500')}`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <select className={`border text-sm px-4 py-2 focus:outline-none bg-transparent ${theme === 'bot' ? 'border-green-800 text-green-400 rounded-none focus:border-green-500 font-mono' : (theme === 'light' ? 'border-slate-200 text-slate-900 rounded-xl focus:border-blue-500' : 'border-slate-800 text-white rounded-xl focus:border-blue-500')}`} value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)}>
                {CATEGORIES.map(c => <option key={c} value={c} className="text-slate-900">{c}</option>)}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMembers.map(member => <DirectoryCard key={member.id} member={member} theme={theme} onClick={() => onMemberClick(member)} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsPage = ({ theme }) => (
  <section className="min-h-screen pt-24 pb-24 bg-transparent relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <SectionTitle theme={theme} title="The Arsenal" subtitle="Tools we've built for the community." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((proj, idx) => (
          <RevealOnScroll key={idx} className={`delay-[${idx * 200}ms]`}>
            <div className={`group h-full flex flex-col overflow-hidden transition-all duration-300 backdrop-blur-md ${theme === 'bot' ? 'bg-black/80 border border-green-900 hover:border-green-500 rounded-none hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]' : (theme === 'light' ? 'bg-white/80 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10' : 'bg-slate-900/80 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-900/20')}`}>
              <div className={`h-48 relative overflow-hidden flex items-center justify-center ${theme === 'bot' ? 'bg-green-900/10' : (theme === 'light' ? 'bg-slate-50/50' : 'bg-slate-800/50')}`}>
                 <div className={`p-4 rounded-xl ${theme === 'bot' ? 'bg-black border border-green-700 text-green-500' : (theme === 'light' ? 'bg-white border border-slate-200 text-blue-500 shadow-sm' : 'bg-slate-950 border border-slate-700 text-white')}`}>{React.cloneElement(proj.icon, { className: "w-8 h-8" })}</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-bold transition-colors ${theme === 'bot' ? 'text-green-400 font-mono group-hover:text-green-300' : (theme === 'light' ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400')}`}>{proj.title}</h3>
                  <a href="#" className={theme === 'bot' ? 'text-green-700 hover:text-green-400' : (theme === 'light' ? 'text-slate-400 hover:text-slate-700' : 'text-slate-500 hover:text-white')}><ExternalLink className="w-5 h-5" /></a>
                </div>
                <p className={`mb-6 flex-1 ${theme === 'bot' ? 'text-green-800 font-mono text-sm' : (theme === 'light' ? 'text-slate-600' : 'text-slate-400')}`}>{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                  {proj.tags.map(tag => <span key={tag} className={`text-xs px-2 py-1 border ${theme === 'bot' ? 'font-mono text-green-500 bg-green-900/20 border-green-800 rounded-none' : (theme === 'light' ? 'font-mono text-blue-600 bg-blue-50 border-blue-200 rounded' : 'font-mono text-blue-300 bg-blue-900/20 border-blue-900/30 rounded')}`}>{tag}</span>)}
                </div>
                <Button theme={theme} variant={theme === 'bot' ? 'outline' : 'outline'} className="w-full">{theme === 'bot' ? 'INIT_PROJECT' : 'View Details'}</Button>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

const MemberProfile = ({ member, theme, onBack }) => {
  const [view, setView] = useState('overview'); // 'overview' or 'achievements'

  const bgClass = theme === 'bot' ? 'bg-black/95 border-green-900' : (theme === 'light' ? 'bg-white/95 border-slate-200' : 'bg-slate-950/95 border-slate-800');
  const textClass = theme === 'bot' ? 'text-green-400 font-mono' : (theme === 'light' ? 'text-slate-900' : 'text-white');
  const subTextClass = theme === 'bot' ? 'text-green-700 font-mono' : (theme === 'light' ? 'text-slate-500' : 'text-slate-400');
  const cardClass = theme === 'bot' ? 'bg-black/80 border border-green-800 backdrop-blur-md' : (theme === 'light' ? 'bg-slate-50/80 border border-slate-200 shadow-sm backdrop-blur-md' : 'bg-slate-900/80 border border-slate-700 backdrop-blur-md');

  // Achievements View Component
  const AchievementsGallery = () => {
    const achievements = member.personalAchievements || [];
    
    if (achievements.length === 0) {
        return (
            <div className={`p-12 text-center rounded-2xl border border-dashed ${theme === 'bot' ? 'border-green-800 text-green-700' : 'border-slate-700 text-slate-500'}`}>
                <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50"/>
                <p>No specific achievements listed yet for this member.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {achievements.map((ach, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 ${theme === 'bot' ? 'border-green-900' : 'border-slate-700'}`}>
                    <div className="aspect-video w-full overflow-hidden bg-slate-800">
                        <img src={ach.image} alt={ach.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className={`p-6 ${theme === 'bot' ? 'bg-black' : (theme === 'light' ? 'bg-white' : 'bg-slate-900')}`}>
                        <h4 className={`text-lg font-bold mb-2 ${textClass}`}>{ach.title}</h4>
                        <p className={`text-sm ${subTextClass}`}>{ach.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <button onClick={onBack} className={`mb-8 flex items-center gap-2 ${subTextClass} hover:${textClass} transition-colors bg-transparent`}><ArrowLeft className="w-5 h-5" /> Back to Team</button>
        
        <div className={`rounded-3xl overflow-hidden border ${theme === 'bot' ? 'border-green-900 rounded-none' : 'border-slate-800'} ${bgClass} backdrop-blur-xl`}>
          {/* Header Banner */}
          <div className={`h-48 w-full bg-gradient-to-r ${member.gradient} relative`}>
            {theme === 'bot' && <div className="absolute inset-0 bg-black/60 bg-[size:20px_20px] bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] opacity-20"></div>}
          </div>
          
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row gap-8 -mt-16 relative z-10">
              <div className={`w-32 h-32 rounded-3xl overflow-hidden border-4 ${theme === 'bot' ? 'border-black rounded-none grayscale' : (theme === 'light' ? 'border-white shadow-lg' : 'border-slate-900')}`}>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover bg-slate-800" />
              </div>
              
              <div className="flex-1 pt-16 md:pt-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className={`text-3xl font-bold ${textClass}`}>{member.name}</h1>
                    <p className={`text-lg font-medium ${subTextClass} flex items-center gap-2 mt-1`}>{member.role}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button theme={theme} variant="primary" icon={Mail} className="!py-2">Contact</Button>
                    <Button 
                        theme={theme} 
                        variant={view === 'achievements' ? 'primary' : 'outline'} 
                        icon={Trophy} 
                        className="!py-2"
                        onClick={() => setView(view === 'overview' ? 'achievements' : 'overview')}
                    >
                        {view === 'overview' ? 'Achievements' : 'Overview'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
                {view === 'overview' ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div className={`p-6 rounded-2xl ${cardClass}`}>
                            <h3 className={`font-bold mb-4 flex items-center gap-2 ${textClass}`}><Cpu className="w-5 h-5" /> Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {member.skills.map((skill, i) => (
                                <span key={i} className={`text-xs px-2.5 py-1 rounded-md font-medium border ${theme === 'bot' ? 'border-green-800 bg-green-900/20 text-green-500 font-mono rounded-none' : (theme === 'light' ? 'bg-slate-100 text-slate-700 border-slate-200' : 'bg-slate-800 text-slate-300 border-slate-700')}`}>
                                    {skill.name}
                                </span>
                                ))}
                            </div>
                            </div>

                            <div className={`p-6 rounded-2xl ${cardClass}`}>
                            <h3 className={`font-bold mb-4 flex items-center gap-2 ${textClass}`}><Activity className="w-5 h-5" /> Activity</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between"><span className={subTextClass}>Commits</span><span className={textClass}>{member.commits}</span></div>
                                <div className="flex justify-between"><span className={subTextClass}>Projects</span><span className={textClass}>{member.projects}</span></div>
                            </div>
                            </div>
                        </div>

                        {/* Right Column: RICH ABOUT SECTION */}
                        <div className="md:col-span-2 space-y-6">
                            <div className={`p-6 rounded-2xl ${cardClass}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`font-bold flex items-center gap-2 ${textClass}`}><User className="w-5 h-5" /> About</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${theme === 'bot' ? 'border-green-500 text-green-500' : 'bg-green-100 text-green-700 border-green-200'}`}>
                                        ● Online
                                    </span>
                                </div>
                                
                                <p className={`leading-relaxed text-lg mb-6 ${subTextClass}`}>{member.bio}</p>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className={`p-4 rounded-xl border ${theme === 'bot' ? 'border-green-900 bg-green-900/10' : (theme === 'light' ? 'bg-slate-50 border-slate-100' : 'bg-slate-800/50 border-slate-700')}`}>
                                        <div className={`text-xs uppercase tracking-wider mb-1 ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>Location</div>
                                        <div className={`font-semibold flex items-center gap-2 ${textClass}`}><MapPin className="w-4 h-4" /> {member.location}</div>
                                    </div>
                                    <div className={`p-4 rounded-xl border ${theme === 'bot' ? 'border-green-900 bg-green-900/10' : (theme === 'light' ? 'bg-slate-50 border-slate-100' : 'bg-slate-800/50 border-slate-700')}`}>
                                        <div className={`text-xs uppercase tracking-wider mb-1 ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>Department</div>
                                        <div className={`font-semibold flex items-center gap-2 ${textClass}`}><Briefcase className="w-4 h-4" /> {member.category}</div>
                                    </div>
                                    <div className={`p-4 rounded-xl border ${theme === 'bot' ? 'border-green-900 bg-green-900/10' : (theme === 'light' ? 'bg-slate-50 border-slate-100' : 'bg-slate-800/50 border-slate-700')}`}>
                                        <div className={`text-xs uppercase tracking-wider mb-1 ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>Join Date</div>
                                        <div className={`font-semibold flex items-center gap-2 ${textClass}`}><Calendar className="w-4 h-4" /> {member.joined}</div>
                                    </div>
                                    <div className={`p-4 rounded-xl border ${theme === 'bot' ? 'border-green-900 bg-green-900/10' : (theme === 'light' ? 'bg-slate-50 border-slate-100' : 'bg-slate-800/50 border-slate-700')}`}>
                                        <div className={`text-xs uppercase tracking-wider mb-1 ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>Status</div>
                                        <div className={`font-semibold flex items-center gap-2 ${textClass}`}><Zap className="w-4 h-4" /> Open to Collab</div>
                                    </div>
                                </div>

                                {/* Tags / "Superpowers" */}
                                <div>
                                    <div className={`text-xs uppercase tracking-wider mb-3 ${theme === 'bot' ? 'text-green-700' : 'text-slate-500'}`}>Core Competencies</div>
                                    <div className="flex flex-wrap gap-2">
                                        {["System Architecture", "Agile", "Problem Solving", "Team Leadership"].map((tag, i) => (
                                            <span key={i} className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${theme === 'bot' ? 'border-green-500 text-green-500 bg-transparent' : (theme === 'light' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-blue-500/10 text-blue-400 border-blue-500/20')}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <AchievementsGallery />
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ theme }) => (
  <footer className={`bg-transparent relative z-10`}>
    <ContactSection theme={theme} />
    <div className={`py-8 text-center text-sm border-t ${theme === 'bot' ? 'border-green-900 text-green-800 font-mono bg-black' : (theme === 'light' ? 'border-slate-200 text-slate-500 bg-white' : 'border-slate-800 text-slate-500 bg-slate-950')}`}>
        <p>&copy; 2025 SOLUTION DEVELOPERS. System Operational.</p>
    </div>
  </footer>
);

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [currentPage, setCurrentPage] = useState('home'); 
  const [selectedMember, setSelectedMember] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    handleNavigate('profile');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${theme === 'bot' ? 'bg-black selection:bg-green-500/30' : (theme === 'light' ? 'bg-slate-50 selection:bg-blue-500/30' : 'bg-slate-950 selection:bg-blue-500/30')}`}>
      <GlobalStyles theme={theme} />
      <Background3D theme={theme} /> 
      {loading && <LoadingScreen theme={theme} onComplete={() => setLoading(false)} toggleTheme={toggleTheme} />}
      {!loading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} activePage={currentPage} onNavigate={handleNavigate} />
          <main className="relative z-10 animate-fade-in">
            {currentPage === 'home' && <HomePage theme={theme} onNavigate={handleNavigate} />}
            {currentPage === 'team' && <TeamPage theme={theme} onMemberClick={handleMemberClick} />}
            {currentPage === 'projects' && <ProjectsPage theme={theme} />}
            {currentPage === 'gallery' && <GalleryPage theme={theme} />}
            {currentPage === 'collabs' && <CollaborationsPage theme={theme} />}
            {currentPage === 'profile' && selectedMember && <MemberProfile member={selectedMember} theme={theme} onBack={() => handleNavigate('team')} />}
          </main>
          <DevBot theme={theme} />
          <Footer theme={theme} />
        </>
      )}
    </div>
  );
}