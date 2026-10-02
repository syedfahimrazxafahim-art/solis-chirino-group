import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/assets';
import { CornerButton } from '../ui/CornerButton';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'properties', label: 'Properties' },
    { key: 'services', label: 'Services' },
    { key: 'buy', label: 'Buy' },
    { key: 'sell', label: 'Sell' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'faq', label: 'FAQ' },
    { key: 'contact', label: 'Contact' },
  ];

  // Primary visible links in desktop top bar contract
  const primaryLinks = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'properties', label: 'Properties' },
    { key: 'services', label: 'Services' },
    { key: 'gallery', label: 'Gallery' },
    { key: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1726]/95 backdrop-blur-md text-[#FFFFFF] py-3.5 shadow-lg border-b border-[#D8C7AE]/20'
          : 'bg-[#0B1726] text-[#FFFFFF] py-4 sm:py-5 border-b border-[#13263A]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Original Logo */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3.5 text-left group cursor-pointer"
          aria-label="Solis Chirino Group Home"
        >
          <img
            src={BUSINESS_INFO.logo}
            alt="Solis Chirino Group Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif-luxury text-lg sm:text-xl font-medium tracking-wide text-[#FFFFFF] group-hover:text-[#D8C7AE] transition-colors leading-none">
              SOLIS CHIRINO GROUP
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#858A8F] font-sans mt-0.5">
              Douglas Elliman · Miami, FL
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Strict 4-6 clean text links) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold">
          {primaryLinks.map((item) => {
            const isActive = activePage === item.key;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => onNavigate(item.key)}
                className={`relative py-1 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#D8C7AE]'
                    : 'text-[#DDD8D0] hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D8C7AE]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <CornerButton
              variant="champagne"
              size="sm"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
            </CornerButton>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#DDD8D0] hover:text-[#FFFFFF] lg:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1726] border-b border-[#D8C7AE]/20 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider font-semibold">
            {navLinks.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  onNavigate(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`p-3 text-left border transition-colors cursor-pointer ${
                  activePage === item.key
                    ? 'bg-[#13263A] text-[#D8C7AE] border-[#D8C7AE]/40'
                    : 'bg-[#0B1726] text-[#DDD8D0] border-[#13263A] hover:bg-[#13263A]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#13263A] flex flex-col gap-3">
            <CornerButton
              variant="champagne"
              size="md"
              className="w-full justify-center"
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
            >
              Schedule a Consultation
            </CornerButton>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center justify-center gap-2 py-2 text-xs text-[#D8C7AE] tracking-wider uppercase font-medium hover:underline cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              Call {BUSINESS_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
