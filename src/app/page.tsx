'use client';

import { useRef, useState } from 'react';
import CourseCard from '@/components/CourseCard';
import IndiaMap from '@/components/IndiaMap';

export default function Home() {
  const coursesScrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentMember, setCurrentMember] = useState(0);

  // Core Circle Members Data - Replace images with real ones
  const coreMembers = [
    {
      name: "Mohit Ryan",
      role: "Founder & CEO",
      bio: "Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringill.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
      largeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=top",
      linkedin: "#",
      facebook: "#"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Academics",
      bio: "Expert in curriculum design with over 10 years of experience in IIT-JEE preparation. Passionate about helping students achieve their dreams.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
      largeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&crop=top",
      linkedin: "#",
      facebook: "#"
    },
    {
      name: "Rahul Sharma",
      role: "Physics Lead",
      bio: "IIT Delhi alumnus specializing in Physics. Known for simplifying complex concepts and making learning enjoyable for students.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
      largeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&crop=top",
      linkedin: "#",
      facebook: "#"
    },
    {
      name: "Priya Patel",
      role: "Chemistry Expert",
      bio: "Chemistry wizard with a track record of helping hundreds of students master organic and inorganic chemistry for JEE Advanced.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
      largeImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=top",
      linkedin: "#",
      facebook: "#"
    },
    {
      name: "Amit Kumar",
      role: "Mathematics Head",
      bio: "Mathematics guru who believes every problem has an elegant solution. Specializes in calculus and algebra for competitive exams.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
      largeImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&crop=top",
      linkedin: "#",
      facebook: "#"
    },
    {
      name: "Neha Singh",
      role: "Student Mentor",
      bio: "Recent IIT graduate dedicated to mentoring students through their JEE journey. Focuses on study strategies and mental wellness.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
      largeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=700&fit=crop&crop=top",
      linkedin: "#",
      facebook: "#"
    }
  ];
  
  // Mentors by city for the interactive map (sample 10 mentors across major cities)
  const mentorsByCity: Record<string, { name: string; batch: string; college: string; testimonial: string; avatar: string; city: string }[]> = {
    Chandigarh: [
      { 
        name: 'Aman Verma', 
        batch: '2018', 
        college: 'IIT Roorkee',
        testimonial: 'What stood out was the test-to-action loop: mocks → analytics → focused micro-lessons. After each mock I had a two-week plan to fix precise errors rather than vague promises to study harder. The mentors were practical, and the habit nudges (sleep, focused session timers) helped me keep consistent when fatigue set in.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces', 
        city: 'Chandigarh'
      },
      { 
        name: 'Ruchi Malhotra', 
        batch: '2019', 
        college: 'IIT Delhi',
        testimonial: 'The personalized study plan and regular check-ins helped me stay on track. Mock analysis was incredibly detailed, pointing out exactly where I was losing marks and how to improve.',
        avatar: 'https://images.unsplash.com/photo-1545996124-1b2a56b6d7c7?w=400&h=400&fit=crop&crop=faces', 
        city: 'Chandigarh'
      }
    ],
    Delhi: [
      { 
        name: 'Rohit Singh', 
        batch: '2017', 
        college: 'IIT Delhi',
        testimonial: 'What stood out was the test-to-action loop: mocks → analytics → focused micro-lessons. After each mock I had a two-week plan to fix precise errors rather than vague promises to study harder. The mentors were practical, and the habit nudges (sleep, focused session timers) helped me keep consistent when fatigue set in.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces', 
        city: 'Delhi'
      },
      { 
        name: 'Neha Kapoor', 
        batch: '2020', 
        college: 'IIT Bombay',
        testimonial: 'Ex-IITian with a knack for teaching problem solving and quick techniques for exams. The mentorship program transformed my preparation approach completely.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces', 
        city: 'Delhi'
      }
    ],
    Mumbai: [
      { 
        name: 'Rohan Mehta', 
        batch: '2016', 
        college: 'IIT Bombay',
        testimonial: 'Organic chemistry mentor who simplifies mechanisms into patterns for faster recall. The systematic approach to problem-solving was game-changing for my JEE prep.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces', 
        city: 'Mumbai'
      }
    ],
    Bengaluru: [
      { 
        name: 'Siddharth Rao', 
        batch: '2018', 
        college: 'IIT Madras',
        testimonial: 'Problem-solving oriented mentor focusing on JEE Advanced level physics problems. The structured study plans and regular feedback helped me improve consistently.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces', 
        city: 'Bengaluru'
      }
    ],
    Kolkata: [
      { 
        name: 'Ananya Roy', 
        batch: '2019', 
        college: 'IIT Kharagpur',
        testimonial: 'Strong theoretical grounding with practical tricks for organic and physical chemistry. The doubt-clearing sessions were incredibly helpful.',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces', 
        city: 'Kolkata'
      }
    ],
    Hyderabad: [
      { 
        name: 'Vikram Nair', 
        batch: '2017', 
        college: 'IIT Hyderabad',
        testimonial: 'Focuses on speed and accuracy in algebra and calculus with personalized short-cuts. The mentor helped me optimize my exam strategy.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces', 
        city: 'Hyderabad'
      }
    ],
    Chennai: [
      { 
        name: 'Lakshmi Iyer', 
        batch: '2020', 
        college: 'IIT Madras',
        testimonial: 'Experienced mentor in mechanics and thermodynamics with student-first approach. The personalized attention made all the difference.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces', 
        city: 'Chennai'
      }
    ],
    Jaipur: [
      { 
        name: 'Manish Gupta', 
        batch: '2018', 
        college: 'IIT Roorkee',
        testimonial: 'Coach for conceptual clarity and exam strategy, especially for algebra and geometry. Clear explanations and patient guidance.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces', 
        city: 'Jaipur'
      }
    ],
    Lucknow: [
      { 
        name: 'Priya Singh', 
        batch: '2019', 
        college: 'IIT Kanpur',
        testimonial: 'Hands-on mentor with strengths in inorganic chemistry and quick revision techniques. The structured notes were excellent.',
        avatar: 'https://images.unsplash.com/photo-1545996124-1b2a56b6d7c7?w=400&h=400&fit=crop&crop=faces', 
        city: 'Lucknow'
      }
    ],
    Pune: [
      { 
        name: 'Karan Desai', 
        batch: '2017', 
        college: 'IIT Bombay',
        testimonial: 'Specializes in advanced calculus and problem selection strategy for JEE. Strategic approach to mock tests was very helpful.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces', 
        city: 'Pune'
      }
    ]
  };

  const [selectedCity, setSelectedCity] = useState<string>('Chandigarh');
  const [selectedMentorIndex, setSelectedMentorIndex] = useState<number | null>(0);
  const [showMentorModal, setShowMentorModal] = useState(false);
  const [activeMentor, setActiveMentor] = useState<{name: string; batch: string; college: string; testimonial: string; avatar: string} | null>(null);
  
  const handleCityClick = (cityName: string) => {
    const mentors = mentorsByCity[cityName];
    if (mentors && mentors.length > 0) {
      setActiveMentor(mentors[0]);
      setShowMentorModal(true);
    }
  };

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % coreMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + coreMembers.length) % coreMembers.length);
  };

  const scrollCourses = (direction: 'left' | 'right') => {
    const container = coursesScrollRef.current;
    if (!container) return;

    const scrollAmount = 840; // 400px card + 40px gap
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Update button states after scroll
    setTimeout(() => {
      updateScrollButtons();
    }, 300);
  };

  const updateScrollButtons = () => {
    const container = coursesScrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <div className="min-h-screen bg-[#C7E7F9]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#E8F4FD] via-[#D4EBFC] to-[#C7E7F9] px-6 pt-[140px] pb-[100px] overflow-hidden">
        {/* Premium Enhanced Background with Blue Tones */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Elegant curved wave - diagonal sweep - MORE VIVID */}
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full" viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none">
              {/* Main diagonal curve - more vibrant */}
              <path d="M 0 200 Q 360 100 720 200 T 1440 300 L 1440 1000 L 0 1000 Z" fill="url(#wave-gradient-main)" opacity="0.7"/>
              {/* Secondary curve for depth - more visible */}
              <path d="M 0 250 Q 360 180 720 280 T 1440 380 L 1440 1000 L 0 1000 Z" fill="url(#wave-gradient-secondary)" opacity="0.55"/>
              {/* Accent curve at top - enhanced */}
              <path d="M 0 0 Q 360 80 720 50 T 1440 100 L 1440 150 Q 1080 120 720 100 T 0 50 Z" fill="url(#wave-gradient-accent)" opacity="0.6"/>
              
              <defs>
                <linearGradient id="wave-gradient-main" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.55"/>
                </linearGradient>
                <linearGradient id="wave-gradient-secondary" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.45"/>
                </linearGradient>
                <linearGradient id="wave-gradient-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5"/>
                  <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.45"/>
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Large gradient orbs with rich blue tones */}
          <div className="absolute w-[1680px] h-[1987px] rounded-full bg-gradient-to-br from-blue-200/70 via-cyan-100/50 to-indigo-100/40 blur-2xl animate-pulse" style={{left: '407px', top: '-133px', animationDuration: '8s'}}></div>
          
          {/* Animated accent blobs - more vibrant */}
          <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-gradient-to-bl from-blue-400/50 via-cyan-300/35 to-transparent blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-indigo-300/45 via-blue-200/35 to-transparent blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-300/40 via-sky-200/30 to-transparent blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-300/35 via-indigo-200/25 to-transparent blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Sophisticated dot pattern with blue tones */}
          <div className="absolute inset-0 opacity-[0.25]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.25) 2px, transparent 0)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 80%)'
          }}></div>
          
          {/* Multi-layer radial gradients for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(232,244,253,0.8)_70%)]"></div>
          
          {/* Premium mesh overlay with multiple colors */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.07),transparent_35%),radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.06),transparent_40%)]"></div>
          
          {/* Animated gradient lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating light particles - more colorful */}
          <div className="absolute top-20 right-1/4 w-3 h-3 rounded-full bg-blue-500/70 blur-sm animate-pulse shadow-lg shadow-blue-500/50" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-cyan-500/60 blur-sm animate-pulse shadow-lg shadow-cyan-500/50" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-indigo-500/70 blur-sm animate-pulse shadow-lg shadow-indigo-500/50" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute bottom-60 right-1/3 w-2 h-2 rounded-full bg-blue-400/60 blur-sm animate-pulse shadow-lg shadow-blue-400/50" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-cyan-400/65 blur-sm animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/5 w-2.5 h-2.5 rounded-full bg-indigo-400/65 blur-sm animate-pulse shadow-lg shadow-indigo-400/50" style={{animationDelay: '2.5s'}}></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center gap-16 text-center">
            {/* Hero Title */}
            <div className="flex flex-col gap-6">
              <h1 className="text-[90px] leading-[100px] font-bold tracking-[-0.03em]">
                <span className="block text-[#031023]">Master Your Path to</span>
                <span className="block bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1E82E9] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">IIT Success</span>
              </h1>
              <p className="text-2xl text-slate-700 font-medium max-w-3xl mx-auto leading-relaxed">
                Join India's premier JEE coaching platform with expert mentors, personalized learning, and proven results
              </p>
            </div>

            {/* Login Buttons Row */}
            <div className="flex items-center gap-6">
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-blue-400/70 to-blue-300/50 shadow-sm max-w-[200px]"></div>
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1d7dd4] hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl w-[300px] h-20 shadow-lg shadow-blue-500/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                      <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM16 8C18.21 8 20 9.79 20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8ZM16 28C12.67 28 9.69 26.5 7.76 24.12C10.07 22.5 13.02 21.5 16 21.5C18.98 21.5 21.93 22.5 24.24 24.12C22.31 26.5 19.33 28 16 28Z" fill="white"/>
                    </svg>
                  </div>
                <span className="text-2xl relative">
                  <span className="font-normal">Log In as </span>
                  <span className="font-bold">Student</span>
                </span>
              </button>
              <div className="w-10 h-1 bg-gradient-to-r from-blue-300/60 to-indigo-300/60 shadow-sm"></div>
              <button className="group flex items-center justify-center gap-3 border-2 border-blue-400 hover:border-blue-500 bg-white/60 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 text-[#031023] px-6 py-3 rounded-xl w-[300px] h-20 shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
                    <path d="M28 8H22V5.33C22 3.86 20.81 2.67 19.33 2.67H12.67C11.19 2.67 10 3.86 10 5.33V8H4C2.53 8 1.35 9.19 1.35 10.67L1.33 25.33C1.33 26.81 2.53 28 4 28H28C29.48 28 30.67 26.81 30.67 25.33V10.67C30.67 9.19 29.48 8 28 8ZM12.67 5.33H19.33V8H12.67V5.33ZM28 25.33H4V10.67H28V25.33Z" fill="#1E82E9"/>
                  </svg>
                </div>
                <span className="text-2xl relative font-medium">
                  <span className="font-normal">Log In as </span>
                  <span className="font-bold">Mentor</span>
                </span>
              </button>
              <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-blue-400/70 to-blue-300/50 shadow-sm max-w-[200px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section - Premium Soft Design */}
      <section className="relative px-6 py-24 overflow-hidden">
        {/* Premium Background - Matching Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FD] via-[#D4EBFC] to-[#C7E7F9]"></div>
        
        {/* Premium Layered Background matching hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large vivid gradient orbs - Hero style */}
          <div className="absolute -top-[600px] right-[5%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-400/50 via-cyan-300/40 to-transparent blur-3xl animate-blob"></div>
          <div className="absolute top-[10%] -left-[400px] w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-indigo-400/45 via-blue-300/35 to-transparent blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[500px] right-[25%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-cyan-400/40 via-blue-300/30 to-transparent blur-3xl animate-blob animation-delay-4000"></div>
          
          {/* Additional depth orbs */}
          <div className="absolute top-[40%] right-[40%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-300/25 via-indigo-200/20 to-transparent blur-3xl animate-blob animation-delay-6000"></div>
          
          {/* Premium wave pattern - matching hero */}
          <svg className="absolute bottom-0 left-0 w-full h-[280px] opacity-40" viewBox="0 0 1440 280" fill="none" preserveAspectRatio="none">
            <path d="M 0 140 Q 240 80 480 140 T 960 140 Q 1200 80 1440 140 L 1440 280 L 0 280 Z" fill="url(#offer-wave-gradient)" opacity="0.7">
              <animate attributeName="d" dur="15s" repeatCount="indefinite" values="
                M 0 140 Q 240 80 480 140 T 960 140 Q 1200 80 1440 140 L 1440 280 L 0 280 Z;
                M 0 120 Q 240 100 480 120 T 960 120 Q 1200 100 1440 120 L 1440 280 L 0 280 Z;
                M 0 140 Q 240 80 480 140 T 960 140 Q 1200 80 1440 140 L 1440 280 L 0 280 Z
              "/>
            </path>
            <defs>
              <linearGradient id="offer-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4"/>
                <stop offset="35%" stopColor="#06B6D4" stopOpacity="0.45"/>
                <stop offset="70%" stopColor="#6366F1" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35"/>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Elegant grid pattern - matching hero */}
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
          
          {/* Subtle radial glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          
          {/* Premium glass orbs decoration */}
          <div className="absolute top-[15%] right-[12%] w-32 h-32 rounded-full border-2 border-blue-300/30 bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(59,130,246,0.15)]"></div>
          <div className="absolute bottom-[25%] left-[8%] w-40 h-40 rounded-full border-2 border-cyan-300/30 bg-white/5 backdrop-blur-sm shadow-[0_8px_32px_rgba(6,182,212,0.15)]"></div>
          <div className="absolute top-[50%] left-[45%] w-24 h-24 rounded-full border border-indigo-300/25 bg-white/5 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col gap-16 relative z-10">
          {/* Premium Title Section - Matching Hero */}
          <div className="flex flex-col items-center gap-7">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 shadow-lg shadow-blue-500/30 animate-pulse" style={{animationDuration: '3s'}}>
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7V11C2 16.55 5.84 21.74 11 23C16.16 21.74 20 16.55 20 11V7L12 2Z" fill="white"/>
              </svg>
            </div>
            <h2 className="text-[72px] leading-[84px] font-bold text-center drop-shadow-sm">
              <span className="text-[#031023] bg-gradient-to-r from-[#031023] to-[#0a1f3d] bg-clip-text">What We </span>
              <span className="bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1E82E9] bg-clip-text text-transparent animate-gradient">Offer</span>
            </h2>
            <p className="text-lg leading-7 text-slate-700 font-medium text-center max-w-2xl">
              Comprehensive tools and resources to accelerate your IIT-JEE preparation
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Feature Cards with Hover Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 - Personalised Tracking */}
              <div className="group relative bg-white/70 backdrop-blur-2xl border border-blue-200/50 rounded-[32px] overflow-hidden hover:shadow-[0_24px_64px_rgba(59,130,246,0.25)] transition-all duration-700 hover:scale-[1.03] hover:border-blue-300/70">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Top gradient shine */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Content container */}
                <div className="relative p-10 flex flex-col items-center justify-center min-h-[420px]">
                  {/* Animated icon container */}
                  <div className="relative mb-8">
                    {/* Floating animation elements - more subtle */}
                    <div className="absolute -inset-6">
                      <div className="absolute top-0 left-0 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping animation-delay-2000"></div>
                      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-ping animation-delay-4000"></div>
                    </div>
                    
                    {/* Icon with enhanced gradient */}
                    <div className="relative w-28 h-28 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-[28px] flex items-center justify-center shadow-[0_12px_40px_rgba(59,130,246,0.3)] group-hover:shadow-[0_16px_56px_rgba(59,130,246,0.45)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                      {/* Glass shine effect */}
                      <div className="absolute inset-[2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent rounded-[26px]"></div>
                      {/* Inner glow */}
                      <div className="absolute inset-[3px] bg-gradient-to-tl from-blue-400/20 to-transparent rounded-[25px]"></div>
                      <svg className="w-14 h-14 text-white relative z-10 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L4 9V21H20V9L12 3ZM12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14C15.5 15.933 13.933 17.5 12 17.5Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title - always visible with better spacing */}
                  <h3 className="text-[26px] font-bold text-slate-900 text-center mb-5 tracking-[-0.02em] leading-tight px-2">
                    Personalised Tracking
                  </h3>
                  
                  {/* Description - appears on hover with better typography */}
                  <div className="overflow-hidden transition-all duration-700 group-hover:max-h-48 max-h-0">
                    <p className="text-[15px] text-slate-600 text-center leading-[1.7] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 font-medium px-3">
                      Monitor your progress with AI-powered insights, customized study plans, and real-time performance analytics tailored to your learning pace.
                    </p>
                  </div>
                  
                  {/* Bottom indicator - enhanced */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full group-hover:w-20 transition-all duration-700 shadow-lg shadow-blue-500/50"></div>
                </div>
              </div>

              {/* Card 2 - Prep Curated Content */}
              <div className="group relative bg-white/70 backdrop-blur-2xl border border-blue-200/50 rounded-[32px] overflow-hidden hover:shadow-[0_24px_64px_rgba(6,182,212,0.25)] transition-all duration-700 hover:scale-[1.03] hover:border-cyan-300/70">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-sky-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-10 flex flex-col items-center justify-center min-h-[420px]">
                  <div className="relative mb-8">
                    <div className="absolute -inset-6">
                      <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-ping animation-delay-2000"></div>
                      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-sky-400/30 rounded-full animate-ping animation-delay-4000"></div>
                    </div>
                    
                    <div className="relative w-28 h-28 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-700 rounded-[28px] flex items-center justify-center shadow-[0_12px_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_16px_56px_rgba(6,182,212,0.45)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                      <div className="absolute inset-[2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent rounded-[26px]"></div>
                      <div className="absolute inset-[3px] bg-gradient-to-tl from-cyan-400/20 to-transparent rounded-[25px]"></div>
                      <svg className="w-14 h-14 text-white relative z-10 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17ZM16 11V13H8V11H16Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-[26px] font-bold text-slate-900 text-center mb-5 tracking-[-0.02em] leading-tight px-2">
                    Prep Curated Content
                  </h3>
                  
                  <div className="overflow-hidden transition-all duration-700 group-hover:max-h-48 max-h-0">
                    <p className="text-[15px] text-slate-600 text-center leading-[1.7] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 font-medium px-3">
                      Access premium study materials, practice questions, and video lectures crafted by IIT experts and top educators specifically for JEE preparation.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 rounded-full group-hover:w-20 transition-all duration-700 shadow-lg shadow-cyan-500/50"></div>
                </div>
              </div>

              {/* Card 3 - Strategy Builder */}
              <div className="group relative bg-white/70 backdrop-blur-2xl border border-blue-200/50 rounded-[32px] overflow-hidden hover:shadow-[0_24px_64px_rgba(99,102,241,0.25)] transition-all duration-700 hover:scale-[1.03] hover:border-indigo-300/70">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-10 flex flex-col items-center justify-center min-h-[420px]">
                  <div className="relative mb-8">
                    <div className="absolute -inset-6">
                      <div className="absolute top-0 left-0 w-2 h-2 bg-indigo-400/30 rounded-full animate-ping"></div>
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping animation-delay-2000"></div>
                      <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-ping animation-delay-4000"></div>
                    </div>
                    
                    <div className="relative w-28 h-28 bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-[28px] flex items-center justify-center shadow-[0_12px_40px_rgba(99,102,241,0.3)] group-hover:shadow-[0_16px_56px_rgba(99,102,241,0.45)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                      <div className="absolute inset-[2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent rounded-[26px]"></div>
                      <div className="absolute inset-[3px] bg-gradient-to-tl from-indigo-400/20 to-transparent rounded-[25px]"></div>
                      <svg className="w-14 h-14 text-white relative z-10 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-[26px] font-bold text-slate-900 text-center mb-5 tracking-[-0.02em] leading-tight px-2">
                    Strategy Builder
                  </h3>
                  
                  <div className="overflow-hidden transition-all duration-700 group-hover:max-h-48 max-h-0">
                    <p className="text-[15px] text-slate-600 text-center leading-[1.7] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 font-medium px-3">
                      Create winning exam strategies with data-driven planning tools, mock test analysis, and personalized time management solutions for optimal results.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 rounded-full group-hover:w-20 transition-all duration-700 shadow-lg shadow-indigo-500/50"></div>
                </div>
              </div>

              {/* Card 4 - Your Safe Space */}
              <div className="group relative bg-white/70 backdrop-blur-2xl border border-blue-200/50 rounded-[32px] overflow-hidden hover:shadow-[0_24px_64px_rgba(168,85,247,0.25)] transition-all duration-700 hover:scale-[1.03] hover:border-purple-300/70">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-10 flex flex-col items-center justify-center min-h-[420px]">
                  <div className="relative mb-8">
                    <div className="absolute -inset-6">
                      <div className="absolute top-0 right-0 w-2 h-2 bg-purple-400/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-ping animation-delay-2000"></div>
                      <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-ping animation-delay-4000"></div>
                    </div>
                    
                    <div className="relative w-28 h-28 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 rounded-[28px] flex items-center justify-center shadow-[0_12px_40px_rgba(168,85,247,0.3)] group-hover:shadow-[0_16px_56px_rgba(168,85,247,0.45)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                      <div className="absolute inset-[2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent rounded-[26px]"></div>
                      <div className="absolute inset-[3px] bg-gradient-to-tl from-purple-400/20 to-transparent rounded-[25px]"></div>
                      <svg className="w-14 h-14 text-white relative z-10 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-[26px] font-bold text-slate-900 text-center mb-5 tracking-[-0.02em] leading-tight px-2">
                    Your Safe Space
                  </h3>
                  
                  <div className="overflow-hidden transition-all duration-700 group-hover:max-h-48 max-h-0">
                    <p className="text-[15px] text-slate-600 text-center leading-[1.7] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200 font-medium px-3">
                      Connect with mentors and peers in a supportive learning community, share experiences, and get guidance through your JEE preparation journey.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-600 rounded-full group-hover:w-20 transition-all duration-700 shadow-lg shadow-purple-500/50"></div>
                </div>
              </div>
            </div>

            {/* Premium 1-on-1 Session CTA Banner */}
            <div className="relative group">
              {/* Ultra-Premium Multi-Layer Background */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                {/* Base premium gradient with more depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700"></div>
                
                {/* Animated gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
                
                {/* Animated mesh gradient blobs */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-transparent blur-3xl animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-indigo-400/30 via-purple-400/20 to-transparent blur-3xl animate-blob animation-delay-2000"></div>
                
                {/* Sophisticated grid pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.12) 1px, transparent 0)`,
                  backgroundSize: '48px 48px'
                }}></div>
                
                {/* Premium shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-out"></div>
              </div>
              
              {/* Glass morphism border */}
              <div className="absolute inset-0 rounded-[32px] border border-white/20 backdrop-blur-xl group-hover:border-white/30 transition-colors duration-700"></div>
              
              {/* Content */}
              <div className="relative px-8 py-16 sm:py-20 flex flex-col items-center gap-8 text-center">
                <div className="flex flex-col gap-5 max-w-2xl">
                  {/* Enhanced title with animated gradient */}
                  <h3 className="text-5xl sm:text-6xl font-extrabold tracking-[-0.02em] leading-[1.1]">
                    <span className="inline-block text-white">Book a </span>
                    <span className="inline-block bg-gradient-to-r from-cyan-200 via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                      1-on-1
                    </span>
                    <span className="inline-block text-white"> Session</span>
                  </h3>
                  
                  {/* Enhanced subtitle */}
                  <p className="text-xl text-blue-50 font-medium leading-relaxed tracking-tight">
                    Get a personalized study roadmap from an IIT-trained mentor
                  </p>
                </div>
                
                {/* Ultra-Premium Button */}
                <button className="group/btn relative">
                  {/* Outer glow */}
                  <div className="absolute inset-0 bg-white/40 rounded-[20px] blur-xl scale-95 group-hover/btn:scale-105 opacity-60 group-hover/btn:opacity-100 transition-all duration-700"></div>
                  
                  {/* Button container */}
                  <div className="relative px-8 py-4 bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.15)] group-hover/btn:shadow-[0_12px_48px_rgba(0,0,0,0.25)] transition-all duration-700 group-hover/btn:scale-105 overflow-hidden">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white group-hover/btn:from-blue-50 group-hover/btn:via-cyan-50 group-hover/btn:to-blue-50 transition-all duration-700"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></div>
                    
                    {/* Button content */}
                    <span className="relative flex items-center gap-3 text-[17px] font-bold text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text tracking-tight">
                      <svg className="w-5 h-5 text-blue-600 group-hover/btn:text-indigo-600 transition-colors duration-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      Book Now
                      <svg className="w-4 h-4 text-blue-600 group-hover/btn:text-indigo-600 transition-all duration-700 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Enhanced Premium Design */}
      <section className="relative px-6 py-32 overflow-hidden">
        {/* Premium Multi-Layer Background matching hero & What We Offer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base gradient similar to What We Offer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FD] via-[#D4EBFC] to-[#C7E7F9]"></div>
          
          {/* Animated gradient blobs with organic movement */}
          <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-transparent blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-bl from-indigo-300/35 via-blue-200/30 to-transparent blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-sky-300/35 via-cyan-200/25 to-transparent blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-purple-300/20 via-blue-200/15 to-transparent blur-3xl animate-blob animation-delay-6000"></div>
          
          {/* Animated SVG Wave matching What We Offer */}
          <div className="absolute bottom-0 left-0 right-0 h-[300px] opacity-30">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="url(#courseWaveGradient)" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave"
              ></path>
              <defs>
                <linearGradient id="courseWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Glass orb decorations */}
          <div className="absolute top-20 right-24 w-48 h-48 rounded-full border border-blue-300/40 backdrop-blur-sm shadow-[inset_0_0_60px_rgba(59,130,246,0.1)]"></div>
          <div className="absolute bottom-32 left-24 w-36 h-36 rounded-full border border-cyan-300/30 backdrop-blur-sm shadow-[inset_0_0_40px_rgba(6,182,212,0.08)]"></div>
          <div className="absolute top-1/2 left-16 w-28 h-28 rounded-full border border-indigo-300/25 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(99,102,241,0.06)]"></div>
          
          {/* Sophisticated grid with perspective fade */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(59,130,246,0.04)_1.5px,transparent_1.5px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          
          {/* Floating light particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-400/60 blur-sm animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/60 blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-indigo-400/60 blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50 blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-[1320px] mx-auto flex flex-col gap-[60px]">
          {/* Premium Title Section matching hero style */}
          <div className="text-center relative">
            {/* Decorative icon */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-[18px] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#1E82E9] to-[#6366F1] rounded-[18px] flex items-center justify-center shadow-[0_8px_32px_rgba(30,130,233,0.25)] group-hover:shadow-[0_12px_48px_rgba(30,130,233,0.35)] transition-all duration-500 animate-pulse">
                  <div className="absolute inset-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-[17px]"></div>
                  <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <h2 className="text-[72px] leading-[84px] font-bold tracking-[-0.02em] text-center mb-6">
              <span className="text-slate-900">Premium </span>
              <span className="inline-block bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1E82E9] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Courses
              </span>
            </h2>
            
            <p className="text-lg leading-7 text-slate-700 font-medium max-w-2xl mx-auto tracking-tight">
              Master JEE concepts with expert-led courses designed for success
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Course Cards with Navigation */}
            <div className="flex items-center gap-10">
              {/* Premium Left Arrow */}
              <div className="flex-shrink-0 min-w-[80px] max-w-[80px]">
                <button 
                  onClick={() => scrollCourses('left')}
                  disabled={!canScrollLeft}
                  className="relative group w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E82E9]/20 to-[#10549E]/20 hover:from-[#1E82E9] hover:to-[#10549E] transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed border border-[#1E82E9]/30 hover:border-[#C7E7F9] shadow-lg hover:shadow-[#1E82E9]/50 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <svg className="relative w-10 h-10 text-[#C7E7F9] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Cards Container - Scrollable */}
              <div 
                ref={coursesScrollRef}
                onScroll={updateScrollButtons}
                className="flex-1 min-w-[800px] overflow-x-auto overflow-y-hidden scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex items-center gap-10">
                  <CourseCard
                    title="Graphs Simplified"
                    description="Master every graph that JEE asks — solve faster, make fewer mistakes, score higher."
                    instructor="Riya Joshi & Guransh Kaur"
                    instructorInitials="RJ"
                    lectures={12}
                    rating={4.6}
                    gradientFrom="#1e3a8a"
                    gradientTo="#1e40af"
                    accentColor="#1E82E9"
                    hoverColor="#C7E7F9"
                  />

                  <CourseCard
                    title="All Important Reaction Mechanisms"
                    description="Understand every organic mechanism step-by-step, from logic to product formation."
                    instructor="Riya Joshi & Guransh Kaur"
                    instructorInitials="RJ"
                    lectures={15}
                    rating={4.8}
                    gradientFrom="#581c87"
                    gradientTo="#7c3aed"
                    accentColor="#a855f7"
                    hoverColor="#e9d5ff"
                  />

                  <CourseCard
                    title="Advanced Calculus Mastery"
                    description="From limits to integration — build rock-solid calculus fundamentals for JEE Advanced."
                    instructor="Arjun Mehta"
                    instructorInitials="AM"
                    lectures={20}
                    rating={4.9}
                    gradientFrom="#064e3b"
                    gradientTo="#047857"
                    accentColor="#10b981"
                    hoverColor="#d1fae5"
                  />

                  <CourseCard
                    title="Physics Problem Solving"
                    description="Learn the art of breaking complex physics problems into simple, solvable steps."
                    instructor="Priya Sharma"
                    instructorInitials="PS"
                    lectures={18}
                    rating={4.7}
                    gradientFrom="#7c2d12"
                    gradientTo="#ea580c"
                    accentColor="#f97316"
                    hoverColor="#fed7aa"
                  />

                  <CourseCard
                    title="Inorganic Chemistry Complete"
                    description="Master coordination compounds, d-block elements, and everything inorganic for JEE."
                    instructor="Vikram Singh"
                    instructorInitials="VS"
                    lectures={16}
                    rating={4.5}
                    gradientFrom="#7f1d1d"
                    gradientTo="#dc2626"
                    accentColor="#ef4444"
                    hoverColor="#fecaca"
                  />

                  <CourseCard
                    title="Trigonometry & Vectors"
                    description="Build strong foundations in trigonometric identities and vector algebra for JEE."
                    instructor="Neha Gupta"
                    instructorInitials="NG"
                    lectures={14}
                    rating={4.6}
                    gradientFrom="#134e4a"
                    gradientTo="#0f766e"
                    accentColor="#14b8a6"
                    hoverColor="#ccfbf1"
                  />

                  <CourseCard
                    title="Modern Physics & Relativity"
                    description="Explore quantum mechanics, atomic structure, and special relativity concepts."
                    instructor="Rahul Verma"
                    instructorInitials="RV"
                    lectures={22}
                    rating={4.9}
                    gradientFrom="#831843"
                    gradientTo="#db2777"
                    accentColor="#ec4899"
                    hoverColor="#fce7f3"
                  />

                  <CourseCard
                    title="Electrochemistry & Thermodynamics"
                    description="Complete guide to electrochemical cells, Nernst equation, and thermodynamic principles."
                    instructor="Anjali Reddy"
                    instructorInitials="AR"
                    lectures={17}
                    rating={4.8}
                    gradientFrom="#713f12"
                    gradientTo="#ca8a04"
                    accentColor="#eab308"
                    hoverColor="#fef9c3"
                  />
                </div>
              </div>

              {/* Premium Right Arrow */}
              <div className="flex-shrink-0 min-w-[80px] max-w-[80px] flex justify-end">
                <button 
                  onClick={() => scrollCourses('right')}
                  disabled={!canScrollRight}
                  className="relative group w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E82E9]/20 to-[#10549E]/20 hover:from-[#1E82E9] hover:to-[#10549E] transition-all duration-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed border border-[#1E82E9]/30 hover:border-[#C7E7F9] shadow-lg hover:shadow-[#1E82E9]/50 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <svg className="relative w-10 h-10 text-[#C7E7F9] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center">
              <div className="w-[220px] h-2 relative">
                <div className="w-10 h-2 absolute left-0 top-0 bg-[#1E82E9] rounded-lg"></div>
                <div className="w-10 h-2 absolute left-[60px] top-0 bg-[#86B8F3] rounded-lg"></div>
                <div className="w-10 h-2 absolute left-[120px] top-0 bg-[#86B8F3] rounded-lg"></div>
                <div className="w-10 h-2 absolute left-[180px] top-0 bg-[#86B8F3] rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Circle Section - Premium Professional Design */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Premium Multi-Layer Background matching hero & What We Offer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base gradient similar to other sections */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FD] via-[#D4EBFC] to-[#C7E7F9]"></div>
          
          {/* Animated gradient blobs with organic movement */}
          <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-transparent blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-bl from-indigo-300/35 via-blue-200/30 to-transparent blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-sky-300/35 via-cyan-200/25 to-transparent blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-purple-300/20 via-blue-200/15 to-transparent blur-3xl animate-blob animation-delay-6000"></div>
          
          {/* Animated SVG Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-[300px] opacity-30">
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill="url(#coreWaveGradient)" 
                fillOpacity="1" 
                d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-wave"
              ></path>
              <defs>
                <linearGradient id="coreWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Glass orb decorations */}
          <div className="absolute top-20 right-24 w-48 h-48 rounded-full border border-blue-300/40 backdrop-blur-sm shadow-[inset_0_0_60px_rgba(59,130,246,0.1)]"></div>
          <div className="absolute bottom-32 left-24 w-36 h-36 rounded-full border border-cyan-300/30 backdrop-blur-sm shadow-[inset_0_0_40px_rgba(6,182,212,0.08)]"></div>
          <div className="absolute top-1/2 left-16 w-28 h-28 rounded-full border border-indigo-300/25 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(99,102,241,0.06)]"></div>
          
          {/* Sophisticated grid with perspective fade */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(59,130,246,0.04)_1.5px,transparent_1.5px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
          
          {/* Floating light particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-400/60 blur-sm animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400/60 blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-indigo-400/60 blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50 blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="max-w-[1320px] mx-auto relative z-10">
          {/* Premium Title Section matching hero style */}
          <div className="text-center relative mb-16">
            {/* Decorative icon */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-[18px] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#1E82E9] to-[#6366F1] rounded-[18px] flex items-center justify-center shadow-[0_8px_32px_rgba(30,130,233,0.25)] group-hover:shadow-[0_12px_48px_rgba(30,130,233,0.35)] transition-all duration-500 animate-pulse">
                  <div className="absolute inset-[1px] bg-gradient-to-br from-white/20 to-transparent rounded-[17px]"></div>
                  <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <h2 className="text-[72px] leading-[84px] font-bold tracking-[-0.02em] text-center mb-6">
              <span className="text-slate-900">Our </span>
              <span className="inline-block bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1E82E9] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Core Circle
              </span>
            </h2>
            
            <p className="text-lg leading-7 text-slate-700 font-medium max-w-2xl mx-auto tracking-tight">
              Meet the exceptional leaders driving excellence in IIT-JEE preparation
            </p>
          </div>

          {/* Premium Floating Card */}
          <div className="relative group/card">
            {/* Card Shadow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#1E82E9]/20 via-[#10549E]/20 to-[#1E82E9]/20 rounded-[26px] blur-xl opacity-40 group-hover/card:opacity-60 transition-opacity duration-700"></div>
            
            {/* Main Floating Card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-[#1E82E9]/10 shadow-2xl overflow-hidden hover:shadow-[0_20px_60px_rgba(30,130,233,0.15)] transition-all duration-500 hover:-translate-y-1">
              {/* Subtle Top Shine */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E82E9]/30 to-transparent"></div>
              
              {/* Corner Accent Lines */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#1E82E9]/10 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#1E82E9]/10 rounded-br-3xl"></div>
              
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Premium Portrait */}
                  <div className="flex-shrink-0 relative">
                    <div className="relative group/portrait">
                      {/* Subtle Professional Glow */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-[#1E82E9]/20 to-[#10549E]/20 rounded-full blur-2xl opacity-50 group-hover/portrait:opacity-100 transition-all duration-500"></div>
                      
                      {/* Portrait Container */}
                      <div className="relative w-48 h-48 md:w-56 md:h-56 group-hover/portrait:scale-[1.02] transition-transform duration-500">
                        {/* Premium Border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1E82E9] via-[#1E82E9] to-[#10549E] rounded-full p-[3px] shadow-xl">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                            <img 
                              key={`portrait-${currentMember}`}
                              src={coreMembers[currentMember].largeImage}
                              alt={coreMembers[currentMember].name}
                              className="w-full h-full object-cover animate-fadeIn relative z-10"
                              style={{ filter: 'grayscale(20%) contrast(1.05) brightness(1.02)' }}
                            />
                            {/* Subtle Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#031023]/30 via-transparent to-[#1E82E9]/5 z-20"></div>
                          </div>
                        </div>
                        
                        {/* Subtle Decorative Dot */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-br from-[#1E82E9] to-[#10549E] shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div key={`content-${currentMember}`} className="flex-1 animate-fadeIn text-center md:text-left space-y-4">
                    {/* Name */}
                    <div className="relative">
                      <h3 className="text-3xl md:text-4xl font-bold text-[#031023] mb-1">
                        {coreMembers[currentMember].name}
                      </h3>
                      <div className="absolute -bottom-1 left-0 md:left-0 right-0 md:right-auto h-[2px] w-16 mx-auto md:mx-0 bg-gradient-to-r from-[#1E82E9] to-transparent rounded-full"></div>
                    </div>
                    
                    {/* Role Badge */}
                    <div className="inline-flex items-center justify-center md:justify-start">
                      <div className="relative group/badge">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1E82E9] to-[#10549E] rounded-full blur-sm opacity-30 group-hover/badge:opacity-50 transition-opacity"></div>
                        <div className="relative px-6 py-2 bg-gradient-to-r from-[#1E82E9] to-[#10549E] rounded-full shadow-lg">
                          <p className="relative text-sm font-semibold text-white tracking-wide uppercase">
                            {coreMembers[currentMember].role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-[#031023]/70 text-sm md:text-base leading-relaxed max-w-xl">
                      {coreMembers[currentMember].bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center md:justify-start pt-2">
                      <a 
                        href={coreMembers[currentMember].linkedin}
                        className="relative group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1E82E9] to-[#10549E] rounded-xl blur-sm opacity-0 group-hover/social:opacity-50 transition-all duration-300"></div>
                        <div className="relative w-11 h-11 bg-[#1E82E9]/10 hover:bg-gradient-to-br hover:from-[#1E82E9] hover:to-[#10549E] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#1E82E9]/20 shadow-sm">
                          <svg className="w-5 h-5 text-[#1E82E9] group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                      </a>
                      <a 
                        href={coreMembers[currentMember].facebook}
                        className="relative group/social"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1E82E9] to-[#10549E] rounded-xl blur-sm opacity-0 group-hover/social:opacity-50 transition-all duration-300"></div>
                        <div className="relative w-11 h-11 bg-[#1E82E9]/10 hover:bg-gradient-to-br hover:from-[#1E82E9] hover:to-[#10549E] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-[#1E82E9]/20 shadow-sm">
                          <svg className="w-5 h-5 text-[#1E82E9] group-hover/social:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Navigation Bar - Expanded Avatars */}
              <div className="relative bg-gradient-to-r from-[#F8FCFF] to-[#F0F8FF] backdrop-blur-sm border-t border-[#1E82E9]/10 px-8 py-6">
                {/* Top Subtle Line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E82E9]/20 to-transparent"></div>
                
                <div className="flex items-center justify-between gap-6">
                  {/* Arrow Button */}
                  <button 
                    onClick={prevMember}
                    className="relative group/arrow flex-shrink-0 w-11 h-11 rounded-xl bg-white hover:bg-gradient-to-br hover:from-[#1E82E9] hover:to-[#10549E] flex items-center justify-center transition-all duration-300 hover:scale-105 border border-[#1E82E9]/20 shadow-md hover:shadow-lg"
                  >
                    <svg className="relative w-5 h-5 text-[#031023] group-hover/arrow:text-white transition-colors" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Expanded Team Avatars with More Space */}
                  <div className="flex-1 flex items-center justify-center gap-4 px-2">
                    {coreMembers.map((member, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMember(index)}
                        className={`relative transition-all duration-300 ${
                          currentMember === index
                            ? 'w-16 h-16'
                            : 'w-12 h-12 opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                      >
                        {/* Active Glow */}
                        {currentMember === index && (
                          <>
                            <div className="absolute -inset-1 bg-gradient-to-br from-[#1E82E9]/40 to-[#10549E]/40 rounded-full blur-md"></div>
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1E82E9] to-[#10549E] rounded-full"></div>
                          </>
                        )}
                        
                        {/* Avatar with Better Spacing */}
                        <div className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-300 ${
                          currentMember === index 
                            ? 'border-[3px] border-white shadow-xl ring-2 ring-[#1E82E9]/30' 
                            : 'border-2 border-[#1E82E9]/20 shadow-md'
                        }`}>
                          <img 
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            style={{ filter: currentMember === index ? 'grayscale(0%)' : 'grayscale(80%)' }}
                          />
                          {/* Subtle overlay on inactive */}
                          {currentMember !== index && (
                            <div className="absolute inset-0 bg-white/20"></div>
                          )}
                        </div>
                        
                        {/* Active Indicator Dot */}
                        {currentMember === index && (
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E82E9] rounded-full shadow-md"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Right Arrow */}
                  <button 
                    onClick={nextMember}
                    className="relative group/arrow flex-shrink-0 w-11 h-11 rounded-xl bg-white hover:bg-gradient-to-br hover:from-[#1E82E9] hover:to-[#10549E] flex items-center justify-center transition-all duration-300 hover:scale-105 border border-[#1E82E9]/20 shadow-md hover:shadow-lg"
                  >
                    <svg className="relative w-5 h-5 text-[#031023] group-hover/arrow:text-white transition-colors" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center justify-center gap-2 mt-5">
                  {coreMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMember(index)}
                      className={`rounded-full transition-all duration-300 ${
                        currentMember === index 
                          ? 'w-10 h-2 bg-gradient-to-r from-[#1E82E9] to-[#10549E] shadow-sm' 
                          : 'w-2 h-2 bg-[#1E82E9]/20 hover:bg-[#1E82E9]/40 hover:w-4'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India's Brightest Minds Section */}
      <section className="relative px-6 py-16 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Premium Professional Background - Inspired by Notion & Framer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient spheres with depth */}
          <div className="absolute top-20 left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-200/40 via-cyan-100/30 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[800px] h-[800px] rounded-full bg-gradient-to-tl from-indigo-200/35 via-blue-100/30 to-transparent blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Layered gradient mesh for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.06),transparent_40%),radial-gradient(circle_at_bottom,rgba(6,182,212,0.08),transparent_50%)]"></div>
          
          {/* Fine grid with gradient */}
          <div className="absolute inset-0 opacity-[0.5]" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
            backgroundSize: '72px 72px'
          }}></div>
          
          {/* Sophisticated line pattern */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"></div>
          
          {/* Floating elements with shadow */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-xl border border-blue-200/50 rotate-12 shadow-[0_10px_40px_rgba(59,130,246,0.15)] backdrop-blur-sm"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full border border-indigo-200/50 shadow-[0_10px_40px_rgba(99,102,241,0.15)] backdrop-blur-sm"></div>
          
          {/* Soft accent glows */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-200/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full bg-cyan-200/20 blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 7V13C4 18.55 7.84 23.74 13 25C18.16 23.74 22 18.55 22 13V7L12 2Z"/>
                </svg>
              </div>
            </div>
            <h2 className="text-[60px] leading-[78px] font-bold mb-4">
              <span className="text-[#031023]">India's </span>
              <span className="bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1E82E9] bg-clip-text text-transparent">Brightest</span>
              <span className="text-[#031023]"> Minds.</span>
            </h2>
            <h2 className="text-[60px] leading-[78px] font-bold mb-6">
              <span className="text-[#031023]">Your </span>
              <span className="bg-gradient-to-r from-[#1E82E9] via-[#2B95FF] to-[#1E82E9] bg-clip-text text-transparent">Strongest</span>
              <span className="text-[#031023]"> Mentors.</span>
            </h2>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-[#1E82E9]" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor"/>
              </svg>
              <p className="text-lg text-[#1E82E9] font-medium">
                Click any location icon to view mentor.
              </p>
            </div>
          </div>

          {/* Interactive India Map */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative w-full h-[700px] rounded-3xl overflow-hidden" style={{ background: 'transparent' }}>
              <IndiaMap onCityClick={handleCityClick} />
            </div>
          </div>
        </div>

        {/* Mentor Modal */}
        {showMentorModal && activeMentor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-3xl w-full bg-gradient-to-br from-[#C7E7F9] via-[#D4EBFC] to-[#E8F4FD] rounded-3xl shadow-2xl animate-fadeIn overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowMentorModal(false);
                  setActiveMentor(null);
                }}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-[#031023]/10 hover:bg-[#031023]/20 flex items-center justify-center transition-all duration-300 hover:rotate-90"
              >
                <svg className="w-6 h-6 text-[#031023]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Modal Content */}
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                {/* Left: Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40"></div>
                    <img
                      src={activeMentor.avatar}
                      alt={activeMentor.name}
                      className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                  </div>
                </div>

                {/* Right: Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#031023] mb-2">
                    {activeMentor.name}
                  </h3>
                  <p className="text-lg text-[#1E82E9] font-semibold mb-4">
                    Batch: {activeMentor.batch} | {activeMentor.college}
                  </p>

                  {/* Testimonial */}
                  <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="absolute -top-3 -left-3 text-6xl text-[#1E82E9]/20 font-serif leading-none">"</div>
                    <p className="text-[#031023]/80 text-base leading-relaxed relative z-10">
                      {activeMentor.testimonial}
                    </p>
                    <div className="absolute -bottom-3 -right-3 text-6xl text-[#1E82E9]/20 font-serif leading-none rotate-180">"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Watch Recorded Lectures Section */}
      <section className="relative px-6 py-16 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/40 overflow-hidden">
        {/* Premium Video Background - Inspired by YouTube & Vimeo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large gradient orbs for ambience */}
          <div className="absolute top-10 left-10 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-200/45 via-indigo-100/35 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-[750px] h-[750px] rounded-full bg-gradient-to-tl from-cyan-200/40 via-sky-100/30 to-transparent blur-3xl animate-pulse" style={{animationDelay: '1.3s'}}></div>
          
          {/* Center focus radial gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.7)_60%,rgba(255,255,255,0.9)_100%)]"></div>
          
          {/* Sophisticated dot matrix */}
          <div className="absolute inset-0 opacity-[0.3]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.12) 1.5px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}></div>
          
          {/* Accent lines for structure */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent"></div>
          
          {/* Video-themed decorative elements */}
          <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-lg border border-blue-200/60 rotate-12 shadow-[0_8px_32px_rgba(59,130,246,0.12)]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full border border-cyan-200/60 shadow-[0_8px_32px_rgba(6,182,212,0.12)]"></div>
          
          {/* Soft accent highlights */}
          <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-blue-300/10 blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-indigo-300/10 blur-2xl"></div>
        </div>

        <div className="max-w-[1320px] mx-auto flex flex-col gap-[60px] relative z-10">
          {/* Title */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#86B8F3] max-w-[200px]"></div>
            <h2 className="text-[60px] leading-[78px] font-bold text-[#031023] text-center whitespace-nowrap">
              Watch Our Videos
            </h2>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#86B8F3] max-w-[200px]"></div>
          </div>

          {/* Video Carousel */}
          <div className="h-[270px] flex items-center justify-center gap-2">
            {/* Left Arrow */}
            <div className="self-stretch py-2.5 bg-[#C7E7F9] overflow-hidden flex flex-col items-start justify-center">
              <button className="w-[60px] h-[60px] rounded-full bg-[#9ED6F5]/20 hover:bg-[#9ED6F5]/40 transition-colors flex items-center justify-center disabled:opacity-50" disabled>
                <svg className="w-9 h-9 text-[#9ED6F5]" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Videos Container */}
            <div className="flex-1 py-2 overflow-hidden flex flex-col items-start">
              <div className="flex items-center gap-6">
                {['Ace the JEE with Mock Tests!', '3 Overlooked Blunders', 'Thoughts While Solving', 'Find the Right Questions', 'Be Part of the 1%', 'Make the Most of Your Time', 'How to Stay Consistent'].map((title, index) => (
                  <div key={index} className="w-[328px] bg-[#031023] border border-[#9ED6F5] rounded-lg overflow-hidden flex flex-col">
                    <div className="h-[185px] relative overflow-hidden border-b border-[#454B54]">
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
                    </div>
                    <div className="px-2 py-5 flex items-center justify-center">
                      <p className="flex-1 text-base leading-[22px] font-semibold text-white text-center">
                        {title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <div className="self-stretch py-2.5 bg-[#C7E7F9] overflow-hidden flex flex-col items-start justify-center">
              <button className="w-[60px] h-[60px] rounded-full bg-[#1E82E9] hover:bg-[#1a73d1] transition-colors flex items-center justify-center">
                <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App CTA Section */}
      <section className="relative px-6 py-[60px] bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 overflow-hidden">
        {/* Premium App CTA Background - Inspired by Airbnb & Dropbox */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large sophisticated gradient orbs */}
          <div className="absolute -top-[450px] -left-[450px] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-200/50 via-cyan-100/40 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[450px] -right-[450px] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tl from-indigo-200/45 via-blue-100/35 to-transparent blur-3xl"></div>
          
          {/* Radial focus overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,252,0.85)_70%,rgba(255,255,255,0.95)_100%)]"></div>
          
          {/* Premium grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-2xl border border-blue-200/40 rotate-12 shadow-[0_8px_40px_rgba(59,130,246,0.1)]"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full border border-cyan-200/40 shadow-[0_8px_40px_rgba(6,182,212,0.1)]"></div>
        </div>

        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-[2rem] py-10 px-5 pr-[420px] flex items-center justify-between overflow-hidden shadow-[0_20px_70px_rgba(59,130,246,0.4)]">
            {/* Premium glass morphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/5 to-transparent backdrop-blur-sm"></div>
            
            {/* Sophisticated pattern overlay */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            {/* Subtle light rays */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            
            {/* Phone Images */}
            <div className="absolute w-[395px] h-[480px] right-[88px] top-[-68px]">
              {/* Back Phone */}
              <div className="absolute w-[173px] h-[320px] left-[214px] top-[80px]">
                <div className="w-[174px] h-[320px] absolute left-[-1px] top-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-[30px] shadow-[0px_3.13px_31.30px_1.56px_rgba(3,16,35,0.20)]"></div>
              </div>
              {/* Front Phone */}
              <div className="absolute w-[260px] h-[481px] left-[14.5px] top-[-0.09px]">
                <div className="w-[260px] h-[481px] absolute left-0 top-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[40px] shadow-[0px_4.71px_47.06px_2.35px_rgba(3,16,35,0.20)]"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-[694px] flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-[60px] leading-[78px] font-bold text-[#031023]">
                  Get the BeingIITian App
                </h2>
                <p className="text-lg leading-6 text-[#454B54]">
                  Study smarter on the go — track progress, join quick mentor sessions, and access curated content anytime.
                </p>
              </div>
              <div className="w-[372px] flex flex-col gap-3">
                <p className="text-lg leading-6 font-semibold text-[#031023]">
                  Download now
                </p>
                <div className="flex items-center gap-5">
                  <button className="w-[200px] flex items-center justify-center gap-2 bg-[#082756] hover:bg-[#061b3c] transition-colors text-white px-6 py-3 rounded">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    <span className="text-lg font-semibold">App Store</span>
                  </button>
                  <button className="w-[200px] flex items-center justify-center gap-2 bg-[#082756] hover:bg-[#061b3c] transition-colors text-white px-6 py-3 rounded">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M1.98 11.52L14.18 23.04L9.71 18.52L1.92 2.77L1.98 11.52Z" fill="#EA4335"/>
                      <path d="M11.09 7.23L22.07 16.7L15.77 13.76L11.09 7.23Z" fill="#FBBC04"/>
                      <path d="M1.92 2.77L11.63 12.48L1.92 2.77Z" fill="#4285F4"/>
                      <path d="M1.98 0.96L11.09 7.23L1.98 0.96Z" fill="#34A853"/>
                    </svg>
                    <span className="text-lg font-semibold">Google Play</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
