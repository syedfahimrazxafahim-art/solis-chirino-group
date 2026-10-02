import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Phone, Mail, Clock, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, PropertyImage } from '../../data/assets';
import { CornerButton } from './CornerButton';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: PropertyImage | null;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedProperty,
  initialTopic = 'General Consultation',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: initialTopic,
    preferredContact: 'Phone & Email',
    timeframe: 'Immediate (Next 30 Days)',
    message: selectedProperty
      ? `I am interested in learning more about "${selectedProperty.title}" in Miami, Florida.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1726]/85 backdrop-blur-sm overflow-y-auto">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-[#FFFFFF] border border-[#DDD8D0] shadow-2xl p-6 sm:p-10 my-8 text-[#0B1726]"
        >
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 p-2 text-[#858A8F] hover:text-[#0B1726] border border-transparent hover:border-[#DDD8D0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-1">
                  Private Consultation & Advisory
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#0B1726]">
                  Schedule a Consultation with Solis Chirino Group
                </h3>
                <p className="text-xs sm:text-sm text-[#858A8F] mt-1.5">
                  Douglas Elliman Real Estate · Miami, Florida
                </p>
              </div>

              {selectedProperty && (
                <div className="flex items-center gap-3 p-3 bg-[#F5F2EC] border border-[#DDD8D0] mb-6">
                  <img
                    src={selectedProperty.url}
                    alt={selectedProperty.title}
                    className="w-14 h-14 object-cover"
                  />
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-[#858A8F]">
                      Referenced Property Concept
                    </span>
                    <p className="text-xs font-medium text-[#0B1726] line-clamp-1">
                      {selectedProperty.title}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F5F2EC] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (786) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F5F2EC] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F5F2EC] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-1.5">
                      I am Interested In
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F5F2EC] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:bg-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Buying">Buying a Miami Property</option>
                      <option value="Selling">Selling a Miami Property</option>
                      <option value="Property Search">Bespoke Property Search</option>
                      <option value="General Consultation">General Consultation</option>
                      <option value="Relocation to Miami">Relocation Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-1.5">
                    Your Goals or Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the property style, preferred timing, or questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F2EC] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <CornerButton
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    type="submit"
                  >
                    Request Confidential Consultation
                  </CornerButton>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-[#858A8F]">
                    Direct connection: You can also reach us directly at{' '}
                    <a href={BUSINESS_INFO.phoneTel} className="text-[#0B1726] font-semibold underline">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>{' '}
                    or{' '}
                    <a href={BUSINESS_INFO.emailMailto} className="text-[#0B1726] font-semibold underline">
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F5F2EC] border border-[#D8C7AE] rounded-full flex items-center justify-center mx-auto text-[#0B1726]">
                <CheckCircle2 className="w-8 h-8 text-[#0B1726]" />
              </div>
              <h3 className="text-2xl font-serif-luxury text-[#0B1726]">
                Consultation Request Received
              </h3>
              <p className="text-sm text-[#858A8F] max-w-md mx-auto leading-relaxed">
                Thank you for connecting with <strong className="text-[#0B1726]">{BUSINESS_INFO.fullName}</strong>. A dedicated advisor will review your inquiry and follow up promptly.
              </p>
              <div className="p-4 bg-[#F5F2EC] border border-[#DDD8D0] max-w-md mx-auto text-left text-xs text-[#0B1726] space-y-1">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Topic:</strong> {formData.topic}</p>
                <p><strong>Contact:</strong> {formData.phone} / {formData.email}</p>
              </div>
              <div className="pt-4">
                <CornerButton variant="primary" size="sm" onClick={handleReset}>
                  Close
                </CornerButton>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
