import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Grid, Compass, ArrowRight, Eye, Sparkles, MapPin } from 'lucide-react';
import { ALL_PROPERTY_IMAGES, PropertyImage, BUSINESS_INFO } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { PerspectiveCarousel } from '../components/ui/PerspectiveCarousel';
import { LiquidText } from '../components/ui/LiquidText';

interface PropertiesProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const Properties: React.FC<PropertiesProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  const categories = [
    'All',
    'Architectural',
    'Interiors',
    'Living Spaces',
    'Miami Lifestyle',
    'Featured Showcase',
  ];

  const filteredImages = selectedCategory === 'All'
    ? ALL_PROPERTY_IMAGES
    : ALL_PROPERTY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Page Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Property Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="Architectural & Residential Showcase"
                as="span"
                highlightWord="Showcase"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              Explore curated residential photography capturing exterior architecture, bespoke interiors, waterfront terraces, and the elevated Miami lifestyle represented by Solis Chirino Group.
            </p>
          </div>
        </div>
      </section>

      {/* Control Bar: Categories & View Switcher */}
      <section className="bg-[#FFFFFF] border-b border-[#DDD8D0] py-4 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Functional Interactive Category Filter Buttons (ALLOWED by Skill Guidelines) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B1726] text-[#FFFFFF] border border-[#0B1726]'
                      : 'bg-[#F5F2EC] text-[#858A8F] hover:text-[#0B1726] border border-[#DDD8D0]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-2 text-xs flex items-center gap-1.5 uppercase tracking-wider font-semibold border transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#0B1726] text-[#FFFFFF] border-[#0B1726]'
                  : 'bg-[#F5F2EC] text-[#858A8F] border-[#DDD8D0] hover:text-[#0B1726]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              Grid View
            </button>

            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`p-2 text-xs flex items-center gap-1.5 uppercase tracking-wider font-semibold border transition-colors cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-[#0B1726] text-[#FFFFFF] border-[#0B1726]'
                  : 'bg-[#F5F2EC] text-[#858A8F] border-[#DDD8D0] hover:text-[#0B1726]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              3D Perspective
            </button>
          </div>
        </div>
      </section>

      {/* Main Display Area */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'carousel' ? (
            <div className="bg-[#0B1726] p-6 sm:p-12 border border-[#13263A] shadow-2xl">
              <div className="text-center max-w-xl mx-auto mb-6 text-[#FFFFFF]">
                <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block mb-1">
                  Perspective Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-light">
                  Interactive 3D Perspective Showcase
                </h3>
              </div>
              <PerspectiveCarousel
                images={filteredImages}
                onSelectImage={onSelectImage}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  className="bg-[#FFFFFF] border border-[#DDD8D0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div
                    className="relative aspect-[4/3] bg-[#0B1726] overflow-hidden cursor-pointer"
                    onClick={() => onSelectImage(img)}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] bg-[#0B1726]/85 px-2.5 py-1 border border-[#D8C7AE]/20">
                        {img.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs bg-[#0B1726]/90 text-[#FFFFFF] px-3 py-1 border border-[#D8C7AE]/40 flex items-center gap-1.5">
                        <Eye className="w-3 h-3 text-[#D8C7AE]" /> View Detail
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-1 text-[11px] text-[#858A8F] uppercase tracking-wider mb-2">
                        <MapPin className="w-3 h-3 text-[#B39A78]" />
                        {img.location} · {img.category}
                      </div>

                      <h3 className="text-xl font-serif-luxury font-medium text-[#0B1726] mb-2 leading-snug">
                        {img.title}
                      </h3>

                      <p className="text-xs text-[#858A8F] leading-relaxed line-clamp-2">
                        {img.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#DDD8D0]/60 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectImage(img)}
                        className="text-xs uppercase tracking-wider font-semibold text-[#0B1726] hover:text-[#B39A78] flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        Inspect Photo <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        type="button"
                        onClick={onOpenConsultation}
                        className="text-xs uppercase tracking-wider font-semibold text-[#858A8F] hover:text-[#0B1726] transition-colors cursor-pointer"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Callout */}
      <section className="py-20 bg-[#0B1726] text-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block">
            Bespoke Acquisitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light">
            Looking for a Specific Miami Architectural Style?
          </h2>
          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Solis Chirino Group conducts discreet, customized property searches tailored to your architectural, waterfront, and lifestyle specifications.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4">
            <CornerButton
              variant="champagne"
              size="md"
              onClick={onOpenConsultation}
            >
              Request Custom Property Search
            </CornerButton>
          </div>
        </div>
      </section>
    </div>
  );
};
