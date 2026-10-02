import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';
import { PropertyImage } from '../../data/assets';

interface PerspectiveCarouselProps {
  images: PropertyImage[];
  onSelectImage?: (image: PropertyImage) => void;
  className?: string;
  autoPlayInterval?: number;
}

export const PerspectiveCarousel: React.FC<PerspectiveCarouselProps> = ({
  images,
  onSelectImage,
  className = '',
  autoPlayInterval = 6000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, nextSlide]);

  if (!images || images.length === 0) return null;

  // Calculate visible indices in range [-2, -1, 0, 1, 2]
  const getOffsetIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  const visibleOffsets = [-2, -1, 0, 1, 2];

  return (
    <div
      className={`relative w-full py-8 select-none ${className}`}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 3D Stage Container */}
      <div className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] flex items-center justify-center overflow-hidden perspective-1500">
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center transform-style-3d">
          <AnimatePresence initial={false}>
            {visibleOffsets.map((offset) => {
              const imageIndex = getOffsetIndex(offset);
              const item = images[imageIndex];
              const isCenter = offset === 0;

              // Calculate 3D transforms based on offset
              const xTranslation = offset * 280; // horizontal spacing in px
              const zTranslation = -Math.abs(offset) * 160; // depth receding
              const rotationY = offset * -24; // angular perspective tilt
              const scale = isCenter ? 1 : Math.max(0.75, 1 - Math.abs(offset) * 0.14);
              const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.32;
              const zIndex = 20 - Math.abs(offset) * 5;

              return (
                <motion.div
                  key={`${item.id}-${offset}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    x: xTranslation,
                    z: zTranslation,
                    rotateY: rotationY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    zIndex,
                    position: 'absolute',
                  }}
                  onClick={() => {
                    if (isCenter) {
                      onSelectImage?.(item);
                    } else {
                      setCurrentIndex(imageIndex);
                    }
                  }}
                  className={`w-[290px] sm:w-[380px] md:w-[480px] aspect-[4/3] rounded-sm overflow-hidden shadow-2xl cursor-pointer transition-shadow duration-300 ${
                    isCenter
                      ? 'ring-1 ring-[#D8C7AE]/60 shadow-[0_25px_50px_-12px_rgba(11,23,38,0.35)]'
                      : 'hover:opacity-90'
                  }`}
                >
                  <div className="relative w-full h-full bg-[#0B1726] group">
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/90 via-[#0B1726]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    {/* Top Tag */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] tracking-widest uppercase font-medium text-[#D8C7AE] bg-[#0B1726]/80 px-2.5 py-1 backdrop-blur-sm border border-[#D8C7AE]/20">
                        {item.tag}
                      </span>
                      {isCenter && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectImage?.(item);
                          }}
                          className="pointer-events-auto p-1.5 bg-[#0B1726]/80 text-[#F5F2EC] hover:text-[#D8C7AE] border border-[#DDD8D0]/30 hover:border-[#D8C7AE] transition-colors cursor-pointer"
                          aria-label="Enlarge image"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <p className="text-xs font-medium text-[#D8C7AE] tracking-wider uppercase mb-1 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5" />
                        {item.location}
                      </p>
                      <h4 className="text-base sm:text-lg font-serif-luxury font-medium text-[#FFFFFF] leading-snug line-clamp-1">
                        {item.title}
                      </h4>
                      {isCenter && (
                        <p className="text-xs text-[#DDD8D0] line-clamp-2 mt-1 hidden sm:block">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between max-w-4xl mx-auto mt-6 px-4">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous property image"
          className="p-3 rounded-none border border-[#DDD8D0] bg-[#FFFFFF] text-[#0B1726] hover:bg-[#0B1726] hover:text-[#FFFFFF] hover:border-[#0B1726] transition-all cursor-pointer shadow-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Counter & Dots */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? 'w-8 bg-[#0B1726]'
                    : 'w-2 bg-[#DDD8D0] hover:bg-[#858A8F]'
                }`}
              />
            ))}
          </div>
          <span className="text-xs tracking-widest text-[#858A8F] uppercase font-mono tabular-nums">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next property image"
          className="p-3 rounded-none border border-[#DDD8D0] bg-[#FFFFFF] text-[#0B1726] hover:bg-[#0B1726] hover:text-[#FFFFFF] hover:border-[#0B1726] transition-all cursor-pointer shadow-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
