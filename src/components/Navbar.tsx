'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setScrolled(currentScrollY > 20);
      
      // Hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
      hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    } ${scrolled ? 'pt-4' : 'pt-8 sm:pt-10'}`}>
      <div className="max-w-[1440px] mx-auto">
        {/* Premium minimalist navbar matching hero aesthetic */}
        <div className={`relative transition-all duration-700 ease-out ${
          scrolled 
            ? 'bg-white/80 dark:bg-slate-950/80 shadow-[0_8px_32px_rgba(147,197,253,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-white/65 dark:bg-slate-950/65 shadow-[0_4px_24px_rgba(147,197,253,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
        } backdrop-blur-2xl rounded-[36px] border border-blue-200/40 dark:border-white/[0.08]`}>
          
          {/* Subtle blue gradient overlay matching hero */}
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-white/50 via-white/30 to-transparent dark:from-blue-900/10 dark:via-white/5 dark:to-transparent pointer-events-none"></div>
          
          <div className="relative px-6 sm:px-10 py-4.5">
            <div className="flex items-center justify-between gap-8 lg:gap-12">
              
              {/* Premium Logo with more breathing room */}
              <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0 relative">
                {/* Logo icon with hero-matching blue gradient */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[20px] blur-lg opacity-0 group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-[20px] flex items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.25)] group-hover:shadow-[0_6px_28px_rgba(59,130,246,0.35)] transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/15 to-transparent rounded-[19px]"></div>
                    <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3L4 9V21H20V9L12 3Z" fill="white" fillOpacity="0.96"/>
                    </svg>
                  </div>
                </div>
                
                {/* Brand text */}
                <div className="hidden sm:flex flex-col">
                  <span className="text-[17px] font-bold tracking-[-0.02em] text-slate-900 dark:text-white leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Being IITian
                  </span>
                  <span className="text-[9px] font-semibold tracking-[0.08em] text-slate-600 dark:text-slate-400 uppercase mt-0.5">Premier Coaching</span>
                </div>
              </Link>

              {/* Center Navigation with more space */}
              <div className="hidden lg:flex items-center gap-2">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/courses', label: 'Courses' },
                  { href: '/blogs', label: 'Resources' },
                  { href: '/products', label: 'Products' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-6 py-3 text-[14px] font-semibold text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-500 group"
                  >
                    <span className="relative z-10 tracking-[-0.01em]">{item.label}</span>
                    {/* Hover effect matching hero blue tones */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-blue-100/40 dark:from-blue-900/20 dark:to-blue-800/10 rounded-[18px] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"></div>
                    {/* Active indicator with blue accent */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:w-7 transition-all duration-500"></div>
                  </Link>
                ))}
              </div>

              {/* Right Actions with better spacing */}
              <div className="flex items-center gap-3">
                {/* Search */}
                <button className="hidden sm:flex w-11 h-11 rounded-[16px] hover:bg-blue-50/60 dark:hover:bg-white/[0.06] items-center justify-center transition-all duration-500 group">
                  <svg className="w-[18px] h-[18px] text-slate-700 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>

                {/* Theme Toggle */}
                <button 
                  onClick={toggleTheme}
                  className="w-11 h-11 rounded-[16px] hover:bg-blue-50/60 dark:hover:bg-white/[0.06] transition-all duration-500 flex items-center justify-center group"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    // Moon icon for dark mode
                    <svg className="w-[18px] h-[18px] text-slate-700 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-700 group-hover:rotate-[-20deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  ) : (
                    // Sun icon for light mode
                    <svg className="w-[18px] h-[18px] text-slate-700 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-700 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="4"/>
                      <line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                      <line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                  )}
                </button>

                {/* CTA matching hero blue gradient */}
                <button className="group relative px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-[14px] font-semibold rounded-[18px] transition-all duration-500 hover:shadow-[0_8px_28px_rgba(59,130,246,0.4)] hover:scale-[1.02] flex-shrink-0 overflow-hidden">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <span className="relative flex items-center gap-2 tracking-[-0.01em]">
                    <span className="hidden sm:inline">Get Started</span>
                    <span className="sm:hidden">Start</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>

                {/* Mobile Menu Toggle */}
                <button
                  className="lg:hidden w-11 h-11 rounded-[16px] hover:bg-blue-50/60 dark:hover:bg-white/[0.06] flex items-center justify-center transition-all duration-500"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="w-5 h-4 relative flex flex-col justify-between">
                    <span className={`h-[2.5px] w-full bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-500 ease-out ${isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}></span>
                    <span className={`h-[2.5px] w-full bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-0 scale-75' : ''}`}></span>
                    <span className={`h-[2.5px] w-full bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-500 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu with hero-matching style */}
          <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 sm:px-8 pb-6 pt-4 space-y-2 border-t border-blue-200/30 dark:border-white/[0.06]">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/courses', label: 'Courses' },
                { href: '/blogs', label: 'Resources' },
                { href: '/products', label: 'Products' }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-3 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-[15px] tracking-[-0.01em] hover:bg-blue-50/60 dark:hover:bg-white/[0.06] rounded-[16px] transition-all duration-500"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animation: isMenuOpen ? `fadeInUp 0.5s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-3" style={{ 
                animation: isMenuOpen ? 'fadeInUp 0.5s ease-out 0.2s both' : 'none'
              }}>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-[18px] font-semibold text-[15px] tracking-[-0.01em] transition-all duration-500 hover:shadow-[0_8px_28px_rgba(59,130,246,0.4)]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
