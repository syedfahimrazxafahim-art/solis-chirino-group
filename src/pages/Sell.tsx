import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, CheckCircle2, ShieldCheck, Building2, Sparkles, Megaphone, BarChart2 } from 'lucide-react';
import { ALL_PROPERTY_IMAGES, PropertyImage, BUSINESS_INFO } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';

interface SellProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const Sell: React.FC<SellProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const sellHeroImage = ALL_PROPERTY_IMAGES[5];
  const sellFeatureImages = [
    ALL_PROPERTY_IMAGES[12],
    ALL_PROPERTY_IMAGES[15],
    ALL_PROPERTY_IMAGES[19],
  ];

  const sellingProcess = [
    {
      step: '01',
      title: 'Initial Consultation',
      desc: 'A confidential introductory meeting to review your residential property, discuss your timeline, and align on expectations.',
    },
    {
      step: '02',
      title: 'Understand the Property',
      desc: 'Evaluating unique architectural elements, interior craftsmanship, natural orientation, renovations, and location advantages.',
    },
    {
      step: '03',
      title: 'Discuss Selling Goals',
      desc: 'Reviewing current market context, buyer demographic demand, and establishing a tailored strategy matching your objectives.',
    },
    {
      step: '04',
      title: 'Prepare the Property for Market',
      desc: 'Advising on spatial staging, curation, and presentation refinement to accentuate your home’s highest architectural appeal.',
    },
    {
      step: '05',
      title: 'Present the Property',
      desc: 'Deploying high-fidelity editorial photography, immersive media, and bespoke marketing collateral under the Douglas Elliman banner.',
    },
    {
      step: '06',
      title: 'Connect With Interested Buyers',
      desc: 'Hosting private showings, fielding vetted buyer inquiries, and conducting discreet negotiations to secure optimal terms.',
    },
    {
      step: '07',
      title: 'Move Toward Closing',
      desc: 'Managing contract milestones, appraisals, inspections, and escrow coordination toward a seamless and timely settlement.',
    },
  ];

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Page Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Selling in Miami</span>
              <span aria-hidden="true">·</span>
              <span>Douglas Elliman Real Estate</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="The Strategic Selling Framework"
                as="span"
                highlightWord="Selling"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              Elevating residential representation with editorial visual storytelling, institutional market intelligence, and global buyer reach.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block">
                Listing Presentation
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#0B1726] leading-tight">
                Architectural Storytelling That Captivates Discerning Buyers
              </h2>

              <p className="text-sm sm:text-base text-[#858A8F] leading-relaxed">
                Exceptional properties require more than standard listings. At Solis Chirino Group, we articulate the bespoke lifestyle, design integrity, and intrinsic value of your residence to engage qualified buyers across South Florida and international feeder markets.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A78] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#858A8F]">
                    <strong className="text-[#0B1726]">Douglas Elliman Distribution:</strong> Amplifying exposure through premier luxury marketing channels.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A78] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#858A8F]">
                    <strong className="text-[#0B1726]">High-Fidelity Visuals:</strong> Professional architectural photography capturing light, form, and flow.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B39A78] shrink-0 mt-1" />
                  <p className="text-xs sm:text-sm text-[#858A8F]">
                    <strong className="text-[#0B1726]">White-Glove Showings:</strong> Conducting private, hosted viewings respecting owner privacy.
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
                  Discuss Your Property
                </CornerButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden border border-[#DDD8D0] shadow-xl group cursor-pointer"
                onClick={() => onSelectImage(sellHeroImage)}
              >
                <img
                  src={sellHeroImage.url}
                  alt={sellHeroImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D8C7AE] font-semibold block mb-1">
                    Premier Listing Presentation
                  </span>
                  <p className="text-lg font-serif-luxury">{sellHeroImage.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Selling Framework */}
      <section className="py-20 lg:py-28 bg-[#F5F2EC] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726]">
              The 7-Step Selling Process
            </h2>
            <p className="text-sm sm:text-base text-[#858A8F] mt-4 leading-relaxed">
              A general overview of how we position and represent your residence from consultation to successful closing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {sellingProcess.map((step) => (
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
            {sellFeatureImages.map((img) => (
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
            Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light">
            Considering Selling Your Miami Property?
          </h2>
          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Schedule a confidential property consultation with Solis Chirino Group at Douglas Elliman Real Estate to discuss market timing and representation.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <CornerButton
              variant="champagne"
              size="md"
              onClick={onOpenConsultation}
            >
              Request Property Evaluation
            </CornerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
