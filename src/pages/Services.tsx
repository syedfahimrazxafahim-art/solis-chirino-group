import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck, Building2, Search, CheckCircle2, Home, Users, BarChart3 } from 'lucide-react';
import { ALL_PROPERTY_IMAGES, PropertyImage, BUSINESS_INFO } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';

interface ServicesProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const serviceImages = [
    ALL_PROPERTY_IMAGES[3],
    ALL_PROPERTY_IMAGES[5],
    ALL_PROPERTY_IMAGES[10],
    ALL_PROPERTY_IMAGES[13],
  ];

  const serviceList = [
    {
      num: '01',
      title: 'Bespoke Buyer Representation',
      desc: 'Guiding domestic and international buyers through curated residential discovery, private property viewings, comparative valuation, and discreet negotiation.',
      action: 'Explore Buying',
      link: 'buy',
      icon: <Home className="w-5 h-5" />,
    },
    {
      num: '02',
      title: 'Strategic Seller Marketing',
      desc: 'Developing editorial-grade visual campaigns, high-fidelity staging, and targeted buyer distribution powered by the Douglas Elliman network.',
      action: 'Explore Selling',
      link: 'sell',
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      num: '03',
      title: 'Private Property Search & Identification',
      desc: 'Leveraging private networks and comprehensive market data to match clients with architectural residences meeting strict aesthetic criteria.',
      action: 'View Portfolio',
      link: 'properties',
      icon: <Search className="w-5 h-5" />,
    },
    {
      num: '04',
      title: 'Miami Relocation Advisory',
      desc: 'Providing seamless relocation support for executives and families transitioning to South Florida, covering neighborhoods, lifestyle, and timelines.',
      action: 'Consult With Us',
      link: 'contact',
      icon: <Compass className="w-5 h-5" />,
    },
    {
      num: '05',
      title: 'Architectural & Market Consultation',
      desc: 'In-depth market evaluations and architectural quality assessments for owners contemplating future sales or portfolio restructuring.',
      action: 'Request Valuation',
      link: 'contact',
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      num: '06',
      title: 'Coordinated Property Viewings',
      desc: 'Organizing private, confidential walkthroughs tailored around executive client schedules with complete discretion.',
      action: 'Schedule Viewing',
      link: 'contact',
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Page Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Solis Chirino Group</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="Real Estate Advisory Services"
                as="span"
                highlightWord="Services"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              High-touch representation, architectural appreciation, and strategic execution for buyers, sellers, and investors in Miami luxury real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726]">
              Comprehensive Real Estate Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#858A8F] mt-4 leading-relaxed">
              Every client engagement is anchored in rigorous market analysis, discrete representation, and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((srv) => (
              <div
                key={srv.num}
                className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] hover:border-[#0B1726] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-luxury text-3xl font-light text-[#858A8F] group-hover:text-[#0B1726] transition-colors">
                      {srv.num}
                    </span>
                    <div className="p-2.5 bg-[#FFFFFF] border border-[#DDD8D0] text-[#0B1726]">
                      {srv.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726] mb-3">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-8 mt-4 border-t border-[#DDD8D0]/60">
                  <button
                    type="button"
                    onClick={() => onNavigate(srv.link)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#0B1726] group-hover:text-[#B39A78] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {srv.action} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Strip */}
      <section className="py-20 bg-[#F5F2EC] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceImages.map((img) => (
              <div
                key={img.id}
                className="relative overflow-hidden bg-[#0B1726] border border-[#DDD8D0] aspect-[3/4] group cursor-pointer shadow-md"
                onClick={() => onSelectImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF]">
                  <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] font-semibold block mb-1">
                    {img.tag}
                  </span>
                  <p className="text-sm font-serif-luxury line-clamp-1">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="py-20 bg-[#0B1726] text-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block">
            Custom Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light">
            Discuss Your Specific Real Estate Requirements
          </h2>
          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Connect directly with Solis Chirino Group to explore how our tailored services align with your residential goals.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <CornerButton
              variant="champagne"
              size="md"
              onClick={onOpenConsultation}
            >
              Schedule a Consultation
            </CornerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
