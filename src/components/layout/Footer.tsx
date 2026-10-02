import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/assets';
import { CornerButton } from '../ui/CornerButton';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-[#0B1726] text-[#FFFFFF] border-t border-[#13263A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Row */}
        <div className="pb-12 border-b border-[#13263A] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block mb-1">
              Private Real Estate Representation
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-light text-[#FFFFFF]">
              Let’s Talk About Your Next Move in Miami
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <CornerButton
              variant="champagne"
              size="md"
              onClick={onOpenConsultation}
            >
              Schedule a Consultation
            </CornerButton>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-[#13263A]">
          {/* Col 1: Brand & Brokerage (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logo}
                alt="Solis Chirino Group Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-serif-luxury text-xl font-medium tracking-wide text-[#FFFFFF] block leading-tight">
                  SOLIS CHIRINO GROUP
                </span>
                <span className="text-xs text-[#D8C7AE] tracking-wider uppercase font-sans">
                  at {BUSINESS_INFO.brokerage}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed max-w-md pt-2">
              Solis Chirino Group delivers bespoke real estate advisory, confidential buyer representation, and architectural property marketing across Miami, Florida.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#13263A] hover:bg-[#D8C7AE] text-[#DDD8D0] hover:text-[#0B1726] border border-[#DDD8D0]/10 hover:border-[#D8C7AE] transition-all cursor-pointer"
                aria-label="Solis Chirino Group Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#13263A] hover:bg-[#D8C7AE] text-[#DDD8D0] hover:text-[#0B1726] border border-[#DDD8D0]/10 hover:border-[#D8C7AE] transition-all cursor-pointer"
                aria-label="Solis Chirino Group Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DDD8D0]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  About the Group
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('properties')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Property Showcase
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Real Estate Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('buy')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Buying in Miami
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('sell')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Selling a Property
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Architectural Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#D8C7AE] transition-colors cursor-pointer"
                >
                  Client FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold mb-4">
              Direct Contact
            </h4>

            <div className="space-y-3 text-xs text-[#DDD8D0]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D8C7AE] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#858A8F] block text-[11px] uppercase tracking-wider">Location</span>
                  <span>Miami, Florida</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D8C7AE] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#858A8F] block text-[11px] uppercase tracking-wider">Phone</span>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="text-[#FFFFFF] hover:text-[#D8C7AE] transition-colors cursor-pointer font-medium"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D8C7AE] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#858A8F] block text-[11px] uppercase tracking-wider">Email</span>
                  <a
                    href={BUSINESS_INFO.emailMailto}
                    className="text-[#FFFFFF] hover:text-[#D8C7AE] transition-colors cursor-pointer break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <CornerButton
                variant="outline"
                size="sm"
                className="!text-[#FFFFFF] !border-[#13263A] hover:!border-[#D8C7AE]"
                onClick={() => onNavigate('contact')}
              >
                Inquiry & Consultation Form
              </CornerButton>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Equal Housing Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858A8F]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Miami, Florida Real Estate</span>
            <span>·</span>
            <span>Douglas Elliman Affiliated</span>
            <span>·</span>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
