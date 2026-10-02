import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, CheckCircle2, ShieldCheck, Search, Key, FileCheck, Phone } from 'lucide-react';
import { ALL_PROPERTY_IMAGES, PropertyImage, BUSINESS_INFO } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';

interface BuyProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const Buy: React.FC<BuyProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const buyHeroImage = ALL_PROPERTY_IMAGES[2];
  const buyFeatureImages = [
    ALL_PROPERTY_IMAGES[0],
    ALL_PROPERTY_IMAGES[4],
    ALL_PROPERTY_IMAGES[11],
  ];

  const buyingJourney = [
    {
      step: '01',
      title: 'Initial Consultation',
      desc: 'An in-depth confidential conversation to understand your aesthetic preferences, functional needs, preferred Miami locations, and investment timeline.',
    },
    {
      step: '02',
      title: 'Understand Property Requirements',
      desc: 'Defining specific parameters including architectural style, square footage, waterfront access, privacy preferences, and amenities.',
    },
    {
      step: '03',
      title: 'Explore Suitable Properties',
      desc: 'Conducting comprehensive market research and private searches across premier Miami neighborhoods and exclusive listings.',
    },
    {
      step: '04',
      title: 'Schedule Property Viewings',
      desc: 'Arranging seamless, private walkthroughs tailored to your schedule, providing contextual insight into each residence and neighborhood.',
    },
    {
      step: '05',
      title: 'Evaluate Options',
      desc: 'Reviewing property merits, comparable market valuations, architectural condition, and long-term positioning.',
    },
    {
      step: '06',
      title: 'Move Toward an Offer',
      desc: 'Crafting a strategic, competitive purchase offer structured with appropriate contingencies and protective terms.',
    },
    {
      step: '07',
      title: 'Complete the Transaction',
      desc: 'Guiding inspections, escrow management, title review, and final walkthrough through successful closing and key delivery.',
    },
  ];

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Page Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Buying in Miami</span>
              <span aria-hidden="true">·</span>
              <span>Solis Chirino Group</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="The Luxury Buying Journey"
                as="span"
                highlightWord="Buying"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              From defining your architectural vision to closing on your Miami sanctuary, Solis Chirino Group provides discreet, white-glove buyer representation.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section with Hero Image */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block">
                Tailored Advisory
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#0B1726] leading-tight">
                Navigating Miami’s Premier Residential Enclaves
              </h2>

              <p className="text-sm sm:text-base text-[#858A8F] leading-relaxed">
                Purchasing a luxury residence in Miami is both an architectural decision and a lifestyle investment. Whether you seek a waterfront estate, a modernist villa, or a skyline penthouse, our advisors offer local market intelligence and objective analysis.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A78] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#858A8F]">
                    <strong className="text-[#0B1726]">Private Access:</strong> Early identification of emerging opportunities and off-market residences.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A78] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#858A8F]">
                    <strong className="text-[#0B1726]">Rigorous Valuation:</strong> Deep comparative market analysis protecting your acquisition terms.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A78] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#858A8F]">
                    <strong className="text-[#0B1726]">Discreet Representation:</strong> Complete confidentiality throughout negotiations and closing.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <CornerButton
                  variant="primary"
                  size="md"
                  onClick={onOpenConsultation}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Property Search
                </CornerButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden border border-[#DDD8D0] shadow-xl group cursor-pointer"
                onClick={() => onSelectImage(buyHeroImage)}
              >
                <img
                  src={buyHeroImage.url}
                  alt={buyHeroImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D8C7AE] font-semibold block mb-1">
                    Miami Property Acquisition
                  </span>
                  <p className="text-lg font-serif-luxury">{buyHeroImage.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Buying Journey */}
      <section className="py-20 lg:py-28 bg-[#F5F2EC] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
              Structured Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726]">
              The 7-Step Buying Process
            </h2>
            <p className="text-sm sm:text-base text-[#858A8F] mt-4 leading-relaxed">
              A general overview of how we guide clients smoothly from property exploration to final ownership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {buyingJourney.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-[#FFFFFF] border border-[#DDD8D0] flex flex-col sm:flex-row sm:items-center gap-6 hover:border-[#0B1726] transition-colors"
              >
                <div className="w-14 h-14 bg-[#0B1726] text-[#D8C7AE] flex items-center justify-center font-serif-luxury text-xl font-semibold shrink-0">
                  {step.step}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif-luxury font-medium text-[#0B1726]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Image Strip */}
      <section className="py-20 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {buyFeatureImages.map((img) => (
              <div
                key={img.id}
                className="relative overflow-hidden bg-[#0B1726] border border-[#DDD8D0] aspect-[4/3] group cursor-pointer shadow-sm"
                onClick={() => onSelectImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
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
            Begin Your Acquisition
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light">
            Ready to Explore Miami Residences?
          </h2>
          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Contact Solis Chirino Group today to schedule an initial consultation or request curated properties matching your criteria.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <CornerButton
              variant="champagne"
              size="md"
              onClick={onOpenConsultation}
            >
              Schedule Buyer Consultation
            </CornerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
