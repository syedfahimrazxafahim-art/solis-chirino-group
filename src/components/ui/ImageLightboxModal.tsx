import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Compass, ArrowRight, Phone, Mail } from 'lucide-react';
import { PropertyImage, BUSINESS_INFO } from '../../data/assets';
import { CornerButton } from './CornerButton';

interface ImageLightboxModalProps {
  image: PropertyImage | null;
  onClose: () => void;
  onInquire?: (image: PropertyImage) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  image,
  onClose,
  onInquire,
}) => {
  if (!image) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B1726]/90 backdrop-blur-md">
        {/* Background Click to dismiss */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl bg-[#0B1726] border border-[#D8C7AE]/30 text-[#FFFFFF] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2 bg-[#0B1726]/80 text-[#DDD8D0] hover:text-[#FFFFFF] border border-[#DDD8D0]/20 hover:border-[#D8C7AE] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Image Canvas */}
          <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
            <img
              src={image.url}
              alt={image.title}
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[75vh] object-contain"
            />
          </div>

          {/* Right: Editorial Details */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#13263A]/90 border-t md:border-t-0 md:border-l border-[#D8C7AE]/20 overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
                  {image.tag}
                </span>
                <span className="text-[#858A8F]">·</span>
                <span className="text-xs text-[#858A8F] tracking-wide flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#D8C7AE]" />
                  {image.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-light text-[#FFFFFF] mb-4 leading-tight">
                {image.title}
              </h3>

              <div className="w-12 h-0.5 bg-[#D8C7AE] mb-5" />

              <p className="text-sm text-[#DDD8D0] leading-relaxed mb-6">
                {image.description}
              </p>

              <div className="p-4 bg-[#0B1726]/80 border border-[#DDD8D0]/10 mb-6">
                <p className="text-xs text-[#858A8F] uppercase tracking-wider mb-1">
                  Representation By
                </p>
                <p className="text-sm font-serif-luxury text-[#F5F2EC]">
                  {BUSINESS_INFO.fullName}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-[#DDD8D0]/15">
              <CornerButton
                variant="champagne"
                size="md"
                className="w-full justify-center"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  onInquire?.(image);
                }}
              >
                Inquire With Solis Chirino
              </CornerButton>

              <div className="flex items-center justify-between text-xs text-[#858A8F] pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-[#D8C7AE] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D8C7AE]" />
                  {BUSINESS_INFO.phoneFormatted}
                </a>
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="hover:text-[#D8C7AE] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D8C7AE]" />
                  Direct Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
