import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, Mail, ShieldCheck, Compass, Sparkles, Building2 } from 'lucide-react';
import { ALL_PROPERTY_IMAGES, BUSINESS_INFO, PropertyImage } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';

interface AboutProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const primaryAboutImage = ALL_PROPERTY_IMAGES[1];
  const secondaryImage = ALL_PROPERTY_IMAGES[6];
  const tertiaryImage = ALL_PROPERTY_IMAGES[14];

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Page Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Douglas Elliman Real Estate</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="About Solis Chirino Group"
                as="span"
                highlightWord="Solis"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              Dedicated to representing premier architectural properties and discerning clients with discretion, precision, and personalized service across Miami, Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Imagery */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block">
                Our Foundation
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#0B1726] leading-tight">
                Architectural Passion & Bespoke Client Advisory
              </h2>

              <p className="text-sm sm:text-base text-[#858A8F] leading-relaxed">
                Solis Chirino Group was established with a clear mandate: to elevate the Miami real estate experience by combining architectural appreciation with institutional advisory standards.
              </p>

              <p className="text-sm sm:text-base text-[#858A8F] leading-relaxed">
                Operating within the prestigious Douglas Elliman Real Estate network, we provide our clients with seamless access to South Florida's finest residences, waterfront estates, and contemporary urban sanctuaries.
              </p>

              <div className="p-6 bg-[#F5F2EC] border border-[#DDD8D0] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#0B1726] font-semibold block">
                  Core Guiding Values
                </span>
                <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                  Discretion · Uncompromising Client Focus · Curated Architectural Representation · Transparent Guidance
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <CornerButton
                  variant="primary"
                  size="md"
                  onClick={onOpenConsultation}
                >
                  Schedule a Consultation
                </CornerButton>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden border border-[#DDD8D0] shadow-xl group cursor-pointer"
                onClick={() => onSelectImage(primaryAboutImage)}
              >
                <img
                  src={primaryAboutImage.url}
                  alt={primaryAboutImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D8C7AE] font-semibold block mb-1">
                    Miami, Florida
                  </span>
                  <p className="text-lg font-serif-luxury">{primaryAboutImage.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Douglas Elliman Advantage */}
      <section className="py-20 lg:py-24 bg-[#F5F2EC] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
              Institutional Strength
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726]">
              The Douglas Elliman Advantage
            </h2>
            <p className="text-sm sm:text-base text-[#858A8F] mt-4 leading-relaxed">
              As part of Douglas Elliman Real Estate, Solis Chirino Group connects Miami properties with discerning buyers and investors worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#FFFFFF] border border-[#DDD8D0] space-y-4">
              <div className="w-10 h-10 bg-[#0B1726] text-[#D8C7AE] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726]">
                National & Global Reach
              </h3>
              <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                Direct connections to luxury buyers across major metropolitan centers including New York, Los Angeles, Aspen, London, and Latin America.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#DDD8D0] space-y-4">
              <div className="w-10 h-10 bg-[#0B1726] text-[#D8C7AE] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726]">
                Premier Marketing Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                Editorial-grade digital campaigns, architectural photography, targeted print placements, and bespoke buyer syndication.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#DDD8D0] space-y-4">
              <div className="w-10 h-10 bg-[#0B1726] text-[#D8C7AE] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726]">
                Private Client Advisory
              </h3>
              <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                Strict confidentiality, dedicated transaction management, and fiduciary care for high-profile clients and estates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Image Showcase Strip */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="relative overflow-hidden border border-[#DDD8D0] shadow-md group cursor-pointer"
              onClick={() => onSelectImage(secondaryImage)}
            >
              <img
                src={secondaryImage.url}
                alt={secondaryImage.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF]">
                <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] font-semibold block">
                  {secondaryImage.tag}
                </span>
                <p className="text-base font-serif-luxury">{secondaryImage.title}</p>
              </div>
            </div>

            <div
              className="relative overflow-hidden border border-[#DDD8D0] shadow-md group cursor-pointer"
              onClick={() => onSelectImage(tertiaryImage)}
            >
              <img
                src={tertiaryImage.url}
                alt={tertiaryImage.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF]">
                <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] font-semibold block">
                  {tertiaryImage.tag}
                </span>
                <p className="text-base font-serif-luxury">{tertiaryImage.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="py-20 bg-[#0B1726] text-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block">
            Miami, Florida
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light">
            Ready to Connect with Solis Chirino Group?
          </h2>
          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Reach out directly to discuss your residential plans, schedule a consultation, or request market information.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <CornerButton
              variant="champagne"
              size="md"
              onClick={onOpenConsultation}
            >
              Schedule a Consultation
            </CornerButton>
            <CornerButton
              variant="outline"
              size="md"
              className="!text-[#FFFFFF] !border-[#DDD8D0]/40"
              onClick={() => onNavigate('contact')}
            >
              Contact Page
            </CornerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
