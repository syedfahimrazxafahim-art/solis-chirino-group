import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Grid, Compass, Maximize2, MapPin, Eye, Sparkles } from 'lucide-react';
import { ALL_PROPERTY_IMAGES, PropertyImage, BUSINESS_INFO } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { PerspectiveCarousel } from '../components/ui/PerspectiveCarousel';
import { LiquidText } from '../components/ui/LiquidText';

interface GalleryProps {
  onNavigate: (page: string) => void;
  onSelectImage: (image: PropertyImage) => void;
  onOpenConsultation: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  onNavigate,
  onSelectImage,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [galleryMode, setGalleryMode] = useState<'editorial' | 'carousel'>('editorial');

  const categories = [
    'All',
    'Architectural',
    'Interiors',
    'Living Spaces',
    'Miami Lifestyle',
    'Featured Showcase',
  ];

  const filtered = selectedCategory === 'All'
    ? ALL_PROPERTY_IMAGES
    : ALL_PROPERTY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Visual Archive</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="Architectural Gallery"
                as="span"
                highlightWord="Gallery"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              A comprehensive visual collection highlighting contemporary structures, refined interior sanctuaries, and coastal living environments represented by Solis Chirino Group.
            </p>
          </div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="bg-[#FFFFFF] border-b border-[#DDD8D0] py-4 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#0B1726] text-[#FFFFFF] border border-[#0B1726]'
                      : 'bg-[#F5F2EC] text-[#858A8F] hover:text-[#0B1726] border border-[#DDD8D0]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={() => setGalleryMode('editorial')}
              className={`p-2 text-xs flex items-center gap-1.5 uppercase tracking-wider font-semibold border transition-colors cursor-pointer ${
                galleryMode === 'editorial'
                  ? 'bg-[#0B1726] text-[#FFFFFF] border-[#0B1726]'
                  : 'bg-[#F5F2EC] text-[#858A8F] border-[#DDD8D0] hover:text-[#0B1726]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              Editorial Gallery
            </button>

            <button
              type="button"
              onClick={() => setGalleryMode('carousel')}
              className={`p-2 text-xs flex items-center gap-1.5 uppercase tracking-wider font-semibold border transition-colors cursor-pointer ${
                galleryMode === 'carousel'
                  ? 'bg-[#0B1726] text-[#FFFFFF] border-[#0B1726]'
                  : 'bg-[#F5F2EC] text-[#858A8F] border-[#DDD8D0] hover:text-[#0B1726]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              3D Carousel
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryMode === 'carousel' ? (
            <div className="bg-[#0B1726] p-6 sm:p-12 border border-[#13263A] shadow-2xl">
              <div className="text-center max-w-xl mx-auto mb-6 text-[#FFFFFF]">
                <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block mb-1">
                  Perspective Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-light">
                  Perspective 3D Visual Flow
                </h3>
              </div>
              <PerspectiveCarousel
                images={filtered}
                onSelectImage={onSelectImage}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((img, idx) => {
                const isWide = idx % 5 === 0;
                return (
                  <div
                    key={img.id}
                    onClick={() => onSelectImage(img)}
                    className={`group relative overflow-hidden bg-[#0B1726] border border-[#DDD8D0] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                      isWide ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square sm:aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/90 via-[#0B1726]/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300" />

                    {/* Top tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] uppercase tracking-wider text-[#D8C7AE] bg-[#0B1726]/85 px-2.5 py-1 border border-[#D8C7AE]/20">
                        {img.tag}
                      </span>
                      <span className="text-xs text-[#FFFFFF] bg-[#0B1726]/85 p-1.5 border border-[#DDD8D0]/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D8C7AE]" />
                      </span>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-4 left-4 right-4 text-[#FFFFFF] transition-transform duration-300">
                      <p className="text-[10px] uppercase tracking-wider text-[#D8C7AE] mb-1 flex items-center gap-1 font-semibold">
                        <MapPin className="w-3 h-3" />
                        {img.location} · {img.category}
                      </p>
                      <h3 className="text-base sm:text-lg font-serif-luxury font-light leading-snug line-clamp-1">
                        {img.title}
                      </h3>
                      <p className="text-xs text-[#DDD8D0] line-clamp-1 mt-1 opacity-0 group-hover:opacity-90 transition-opacity">
                        {img.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-20 bg-[#0B1726] text-[#FFFFFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold block">
            Visual Exploration
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-light">
            Inquire About These Residences
          </h2>
          <p className="text-sm sm:text-base text-[#DDD8D0] max-w-xl mx-auto leading-relaxed">
            Connect with Solis Chirino Group to discuss specific architectural styles, availability, or private representation in Miami, Florida.
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
