import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  Layers,
  MapPin,
  Eye,
} from 'lucide-react';
import { ALL_PROPERTY_IMAGES, BUSINESS_INFO, PropertyImage } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';
import { PerspectiveCarousel } from '../components/ui/PerspectiveCarousel';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Curate specific imagery subsets for homepage sections
  const heroImage = ALL_PROPERTY_IMAGES[0];
  const carouselImages = ALL_PROPERTY_IMAGES.slice(0, 8);
  const buyingImage = ALL_PROPERTY_IMAGES[2];
  const sellingImage = ALL_PROPERTY_IMAGES[5];
  const aboutImage = ALL_PROPERTY_IMAGES[7];
  const showcaseGrid = [
    ALL_PROPERTY_IMAGES[8],
    ALL_PROPERTY_IMAGES[9],
    ALL_PROPERTY_IMAGES[10],
    ALL_PROPERTY_IMAGES[11],
    ALL_PROPERTY_IMAGES[12],
    ALL_PROPERTY_IMAGES[13],
  ];

  const buyingSteps = [
    { num: '01', title: 'Initial Consultation', desc: 'Clarifying your architectural preferences, lifestyle priorities, and Miami timeline.' },
    { num: '02', title: 'Curated Property Search', desc: 'Filtering suitable residences through private channels and market intelligence.' },
    { num: '03', title: 'Private Viewings', desc: 'Coordinating discreet and thorough walkthroughs of select properties.' },
    { num: '04', title: 'Valuation & Offer', desc: 'Structuring balanced, competitive offers grounded in market evaluation.' },
    { num: '05', title: 'Transaction Closing', desc: 'Guiding due diligence, escrow coordination, and seamless handover.' },
  ];

  const sellingSteps = [
    { num: '01', title: 'Property Evaluation', desc: 'In-depth assessment of architectural merits, location, and market position.' },
    { num: '02', title: 'Presentation & Staging', desc: 'Elevating aesthetic appeal with high-fidelity visual and spatial presentation.' },
    { num: '03', title: 'Targeted Marketing', desc: 'Engaging qualified buyers through the Douglas Elliman network and channels.' },
    { num: '04', title: 'Private Showings', desc: 'Conducting personalized, white-glove viewings for vetted prospects.' },
    { num: '05', title: 'Negotiation & Closing', desc: 'Managing contract terms and closing details with utmost precision.' },
  ];

  const faqs = [
    {
      q: 'What real estate services does Solis Chirino Group provide in Miami?',
      a: 'Solis Chirino Group provides comprehensive luxury real estate representation across Miami, Florida, specializing in bespoke buyer advisory, strategic seller marketing, private property searches, and market consultations backed by Douglas Elliman Real Estate.',
    },
    {
      q: 'How do I schedule a private property consultation?',
      a: 'You can schedule a consultation by clicking any "Schedule a Consultation" button on this website, calling directly at +1 (786) 253-7653, or emailing mario.chirino@elliman.com.',
    },
    {
      q: 'Do you work with out-of-state and international buyers relocating to Miami?',
      a: 'Yes. Solis Chirino Group routinely assists clients relocating to South Florida, offering remote visual walkthroughs, neighborhood guidance, and coordinated scheduling for Miami visits.',
    },
    {
      q: 'What is the advantage of working with Douglas Elliman Real Estate?',
      a: 'Douglas Elliman provides an established national and international luxury network, institutional marketing reach, and deep resources that amplify every property presentation and buyer search.',
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0B1726] text-[#FFFFFF] overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage.url}
            alt="Solis Chirino Group Miami Real Estate"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.45] scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726] via-[#0B1726]/40 to-black/30" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Quiet Editorial Kicker (NO PILLS) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Douglas Elliman Real Estate</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            {/* Liquid Text Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-light text-[#FFFFFF] tracking-tight leading-[1.08] text-balance">
              <LiquidText
                text="Curated Luxury Real Estate in Miami"
                as="span"
                highlightWord="Miami"
                highlightClass="text-[#D8C7AE] italic font-normal"
              />
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg md:text-xl text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              Solis Chirino Group delivers bespoke advisory, architectural appreciation, and confidential representation for discerning buyers and sellers across South Florida.
            </p>

            {/* Hero CTAs (Corner Button Reference) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <CornerButton
                variant="champagne"
                size="lg"
                onClick={onOpenConsultation}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule a Consultation
              </CornerButton>

              <CornerButton
                variant="outline"
                size="lg"
                className="!text-[#FFFFFF] !border-2 !border-[#D8C7AE] bg-[#0B1726]/60 backdrop-blur-sm hover:!border-[#FFFFFF] hover:!bg-[#0B1726]/90 shadow-md"
                onClick={() => onNavigate('properties')}
              >
                Explore Properties
              </CornerButton>
            </div>

            {/* Direct Contact Trust Line */}
            <div className="pt-6 flex items-center gap-6 text-xs text-[#858A8F]">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center gap-2 text-[#DDD8D0] hover:text-[#D8C7AE] transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8C7AE]" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={BUSINESS_INFO.emailMailto}
                className="flex items-center gap-2 text-[#DDD8D0] hover:text-[#D8C7AE] transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#D8C7AE]" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PROPERTIES (Perspective Carousel Reference) */}
      <section className="py-20 lg:py-28 bg-[#F5F2EC] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
                Curated Selection
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726] leading-tight">
                Featured Property Showcase
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <CornerButton
                variant="outline"
                size="sm"
                onClick={() => onNavigate('properties')}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                View All Properties
              </CornerButton>
            </div>
          </div>

          <p className="text-sm text-[#858A8F] max-w-2xl mb-8">
            Experience our interactive 3D perspective gallery showcasing modern architectural residences, private outdoor retreats, and luxury interior design in Miami.
          </p>

          {/* Perspective Carousel Component */}
          <PerspectiveCarousel
            images={carouselImages}
            onSelectImage={onSelectImage}
          />
        </div>
      </section>

      {/* 3. REAL ESTATE SERVICES OVERVIEW */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726]">
              Real Estate Services
            </h2>
            <p className="text-sm sm:text-base text-[#858A8F] mt-4 leading-relaxed">
              Tailored guidance for every phase of your Miami real estate journey, from initial property identification to high-touch negotiation and closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] flex flex-col justify-between hover:border-[#0B1726] transition-colors group">
              <div>
                <span className="font-serif-luxury text-2xl text-[#858A8F] block mb-4 group-hover:text-[#0B1726] transition-colors">
                  01
                </span>
                <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726] mb-3">
                  Buying a Home
                </h3>
                <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                  Confidential advisory, curated property tours, and expert representation tailored to your lifestyle vision.
                </p>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('buy')}
                  className="text-xs uppercase tracking-wider font-semibold text-[#0B1726] group-hover:text-[#B39A78] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Explore Buying <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] flex flex-col justify-between hover:border-[#0B1726] transition-colors group">
              <div>
                <span className="font-serif-luxury text-2xl text-[#858A8F] block mb-4 group-hover:text-[#0B1726] transition-colors">
                  02
                </span>
                <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726] mb-3">
                  Selling a Property
                </h3>
                <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                  Premier visual storytelling, strategic pricing, and global outreach backed by the Douglas Elliman network.
                </p>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('sell')}
                  className="text-xs uppercase tracking-wider font-semibold text-[#0B1726] group-hover:text-[#B39A78] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Explore Selling <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] flex flex-col justify-between hover:border-[#0B1726] transition-colors group">
              <div>
                <span className="font-serif-luxury text-2xl text-[#858A8F] block mb-4 group-hover:text-[#0B1726] transition-colors">
                  03
                </span>
                <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726] mb-3">
                  Property Search
                </h3>
                <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                  Bespoke property identification across Miami’s premier waterfronts, modern enclaves, and private communities.
                </p>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onNavigate('properties')}
                  className="text-xs uppercase tracking-wider font-semibold text-[#0B1726] group-hover:text-[#B39A78] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Search Properties <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 4 */}
            <div className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] flex flex-col justify-between hover:border-[#0B1726] transition-colors group">
              <div>
                <span className="font-serif-luxury text-2xl text-[#858A8F] block mb-4 group-hover:text-[#0B1726] transition-colors">
                  04
                </span>
                <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726] mb-3">
                  Market Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#858A8F] leading-relaxed">
                  Direct evaluation of market conditions, architectural values, and strategic timing for informed decisions.
                </p>
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="text-xs uppercase tracking-wider font-semibold text-[#0B1726] group-hover:text-[#B39A78] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Book Consultation <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUYING WITH SOLIS CHIRINO GROUP */}
      <section className="py-20 lg:py-28 bg-[#F5F2EC] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block">
                The Buyer Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726] leading-tight">
                Buying With Solis Chirino Group
              </h2>
              <p className="text-sm sm:text-base text-[#858A8F] leading-relaxed">
                Navigating the Miami luxury market requires local nuance, discreet representation, and rigorous attention to detail. We guide you through each milestone with clarity.
              </p>

              <div className="space-y-4 pt-2">
                {buyingSteps.slice(0, 3).map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 bg-[#FFFFFF] border border-[#DDD8D0]">
                    <span className="font-serif-luxury text-lg text-[#B39A78] font-semibold">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0B1726]">{step.title}</h4>
                      <p className="text-xs text-[#858A8F] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <CornerButton
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('buy')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Start Your Property Search
                </CornerButton>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-6">
              <div
                className="relative overflow-hidden border border-[#DDD8D0] shadow-xl group cursor-pointer"
                onClick={() => onSelectImage(buyingImage)}
              >
                <img
                  src={buyingImage.url}
                  alt={buyingImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D8C7AE] font-semibold block mb-1">
                    {buyingImage.tag}
                  </span>
                  <h3 className="text-xl font-serif-luxury font-light">{buyingImage.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELLING WITH SOLIS CHIRINO GROUP */}
      <section className="py-20 lg:py-28 bg-[#0B1726] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual Frame */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                className="relative overflow-hidden border border-[#13263A] shadow-2xl group cursor-pointer"
                onClick={() => onSelectImage(sellingImage)}
              >
                <img
                  src={sellingImage.url}
                  alt={sellingImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFFFFF]">
                  <span className="text-[11px] uppercase tracking-wider text-[#D8C7AE] font-semibold block mb-1">
                    {sellingImage.tag}
                  </span>
                  <h3 className="text-xl font-serif-luxury font-light">{sellingImage.title}</h3>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block">
                The Seller Experience
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
                Selling With Solis Chirino Group
              </h2>
              <p className="text-sm sm:text-base text-[#DDD8D0] leading-relaxed">
                Elevating your property’s presentation to reach qualified buyers locally and globally through Douglas Elliman’s premier distribution channels.
              </p>

              <div className="space-y-4 pt-2">
                {sellingSteps.slice(0, 3).map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 bg-[#13263A] border border-[#DDD8D0]/10">
                    <span className="font-serif-luxury text-lg text-[#D8C7AE] font-semibold">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FFFFFF]">{step.title}</h4>
                      <p className="text-xs text-[#858A8F] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <CornerButton
                  variant="champagne"
                  size="md"
                  onClick={() => onNavigate('sell')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Property
                </CornerButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT SOLIS CHIRINO GROUP */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src={BUSINESS_INFO.logo}
                  alt="Solis Chirino Group"
                  className="h-10 w-auto object-contain"
                />
                <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold">
                  About the Group
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726] leading-tight">
                Solis Chirino Group at Douglas Elliman Real Estate
              </h2>

              <p className="text-sm sm:text-base text-[#858A8F] leading-relaxed">
                Headquartered in Miami, Florida, Solis Chirino Group represents buyers and sellers of exceptional residences with an unwavering commitment to integrity, architectural insight, and client confidentiality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-[#F5F2EC] border border-[#DDD8D0]">
                  <h4 className="font-serif-luxury text-lg font-medium text-[#0B1726] mb-1">
                    Miami Focus
                  </h4>
                  <p className="text-xs text-[#858A8F] leading-relaxed">
                    Deep appreciation for South Florida’s architectural heritage, coastal dynamics, and premier residential neighborhoods.
                  </p>
                </div>

                <div className="p-5 bg-[#F5F2EC] border border-[#DDD8D0]">
                  <h4 className="font-serif-luxury text-lg font-medium text-[#0B1726] mb-1">
                    Douglas Elliman Reach
                  </h4>
                  <p className="text-xs text-[#858A8F] leading-relaxed">
                    Leveraging an esteemed global brokerage network to connect buyers and sellers seamlessly.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <CornerButton
                  variant="outline"
                  size="md"
                  onClick={() => onNavigate('about')}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More About Us
                </CornerButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative overflow-hidden border border-[#DDD8D0] shadow-lg group cursor-pointer"
                onClick={() => onSelectImage(aboutImage)}
              >
                <img
                  src={aboutImage.url}
                  alt="Solis Chirino Group Miami Representation"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#0B1726]/90 backdrop-blur-sm text-left border border-[#D8C7AE]/20">
                  <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] font-semibold block">
                    Miami, Florida
                  </span>
                  <p className="text-xs font-serif-luxury text-[#FFFFFF] line-clamp-1">
                    {aboutImage.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROPERTY GALLERY / VISUAL SHOWCASE (Editorial Multi-Image Layout) */}
      <section className="py-20 lg:py-28 bg-[#F5F2EC] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
                Visual Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#0B1726]">
                Architectural & Interior Showcase
              </h2>
            </div>
            <CornerButton
              variant="outline"
              size="sm"
              onClick={() => onNavigate('gallery')}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Open Complete Gallery
            </CornerButton>
          </div>

          {/* Asymmetric Multi-Image Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseGrid.map((img, index) => {
              const isWide = index === 0 || index === 3;
              return (
                <div
                  key={img.id}
                  onClick={() => onSelectImage(img)}
                  className={`group relative overflow-hidden bg-[#0B1726] border border-[#DDD8D0] shadow-sm hover:shadow-xl transition-all cursor-pointer ${
                    isWide ? 'md:col-span-2 aspect-[16/10]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] bg-[#0B1726]/80 px-2 py-0.5 border border-[#D8C7AE]/20">
                      {img.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF]">
                    <h3 className="text-base sm:text-lg font-serif-luxury font-light line-clamp-1">
                      {img.title}
                    </h3>
                    <p className="text-[11px] text-[#DDD8D0] line-clamp-1 mt-0.5 opacity-80">
                      {img.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Adhering strictly to Prototype Guidelines) */}
      <section className="py-20 bg-[#FFFFFF] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#858A8F] font-semibold block mb-2">
              Client Perspective
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury text-[#0B1726]">
              Client Advisory Standards
            </h2>
            <p className="text-xs text-[#858A8F] mt-2 italic">
              Demo Content — Replace With Verified Client Testimonial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] flex flex-col justify-between">
              <p className="text-sm font-serif-luxury italic text-[#0B1726] leading-relaxed mb-6">
                "Solis Chirino Group provided exemplary guidance throughout our Miami property search. Their attention to architectural nuance and prompt communication made every step seamless."
              </p>
              <div className="border-t border-[#DDD8D0] pt-4 flex items-center justify-between text-xs text-[#858A8F]">
                <span className="font-semibold text-[#0B1726]">Miami Homebuyer Client</span>
                <span>Demo Testimonial Placeholder</span>
              </div>
            </div>

            <div className="p-8 bg-[#F5F2EC] border border-[#DDD8D0] flex flex-col justify-between">
              <p className="text-sm font-serif-luxury italic text-[#0B1726] leading-relaxed mb-6">
                "The marketing presentation and representation under Douglas Elliman were first-class. Highly professional, discreet, and dedicated."
              </p>
              <div className="border-t border-[#DDD8D0] pt-4 flex items-center justify-between text-xs text-[#858A8F]">
                <span className="font-semibold text-[#0B1726]">Residential Property Seller</span>
                <span>Demo Testimonial Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 lg:py-28 bg-[#F5F2EC] text-[#0B1726] border-b border-[#DDD8D0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light text-[#0B1726]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border border-[#DDD8D0] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif-luxury text-lg font-medium text-[#0B1726]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#858A8F] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#0B1726]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#858A8F] leading-relaxed border-t border-[#DDD8D0]/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <CornerButton
              variant="outline"
              size="sm"
              onClick={() => onNavigate('faq')}
            >
              View All FAQ Topics
            </CornerButton>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONSULTATION CTA */}
      <section className="py-24 bg-[#0B1726] text-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block">
            Begin Your Conversation
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
            Let’s Talk About Your Next Move in Miami
          </h2>

          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Whether you are considering acquiring a luxury Miami property, preparing to list your residence, or exploring opportunities, Solis Chirino Group is ready to assist.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <CornerButton
              variant="champagne"
              size="lg"
              onClick={onOpenConsultation}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Schedule a Consultation
            </CornerButton>

            <CornerButton
              variant="outline"
              size="lg"
              className="!text-[#FFFFFF] !border-[#DDD8D0]/40 hover:!border-[#D8C7AE]"
              onClick={() => onNavigate('contact')}
            >
              Contact Solis Chirino Group
            </CornerButton>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#858A8F]">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="hover:text-[#D8C7AE] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#D8C7AE]" />
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={BUSINESS_INFO.emailMailto}
              className="hover:text-[#D8C7AE] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#D8C7AE]" />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
