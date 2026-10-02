import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Facebook, Instagram, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, ALL_PROPERTY_IMAGES } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';

interface ContactProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying',
    preferredContact: 'Phone & Email',
    timeframe: 'Immediate (Next 30 Days)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Page Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Direct Consultation</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="Connect With Solis Chirino Group"
                as="span"
                highlightWord="Connect"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              We welcome your inquiry regarding luxury residential acquisitions, selling strategy, or private advisory in Miami, Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Contact Cards */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#DDD8D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-[#F5F2EC] border border-[#DDD8D0] p-8 sm:p-12 shadow-sm">
              {!isSubmitted ? (
                <div>
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-1">
                      Inquiry Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif-luxury font-light text-[#0B1726]">
                      Schedule a Private Consultation
                    </h2>
                    <p className="text-xs sm:text-sm text-[#858A8F] mt-1">
                      Please complete the fields below and our advisory team will respond promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Eleanor Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (786) 253-7653"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="eleanor@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                          I'm Interested In *
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Buying">Buying a Miami Property</option>
                          <option value="Selling">Selling a Miami Property</option>
                          <option value="Property Search">Bespoke Property Search</option>
                          <option value="General Consultation">General Consultation</option>
                          <option value="Relocation">Relocating to South Florida</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                          Preferred Contact Method
                        </label>
                        <select
                          value={formData.preferredContact}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Phone & Email">Phone & Email</option>
                          <option value="Phone Call Only">Phone Call Only</option>
                          <option value="Email Only">Email Only</option>
                          <option value="Text / WhatsApp">Text / WhatsApp</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                          Estimated Timeframe
                        </label>
                        <select
                          value={formData.timeframe}
                          onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                          <option value="1 - 3 Months">1 - 3 Months</option>
                          <option value="3 - 6 Months">3 - 6 Months</option>
                          <option value="Exploratory / Future">Exploratory / Future</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1726] mb-2">
                        Message / Property Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please share any specific neighborhood interests, architectural styles, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#DDD8D0] text-sm text-[#0B1726] focus:border-[#0B1726] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <CornerButton
                        variant="primary"
                        size="lg"
                        className="w-full justify-center"
                        type="submit"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Submit Consultation Request
                      </CornerButton>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#858A8F] pt-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B39A78]" />
                      <span>All inquiries are treated with strict confidentiality.</span>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 bg-[#0B1726] text-[#D8C7AE] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif-luxury text-[#0B1726]">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-sm text-[#858A8F] max-w-md mx-auto leading-relaxed">
                    Your consultation request has been received by <strong className="text-[#0B1726]">{BUSINESS_INFO.fullName}</strong>. A dedicated real estate advisor will be in touch shortly.
                  </p>
                  <div className="p-4 bg-[#FFFFFF] border border-[#DDD8D0] max-w-md mx-auto text-left text-xs text-[#0B1726] space-y-1.5">
                    <p><strong>Topic:</strong> {formData.interest}</p>
                    <p><strong>Contact:</strong> {formData.phone} / {formData.email}</p>
                    <p><strong>Timeframe:</strong> {formData.timeframe}</p>
                  </div>
                  <div className="pt-4">
                    <CornerButton
                      variant="primary"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Inquiry
                    </CornerButton>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Information Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#B39A78] font-semibold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-light text-[#0B1726]">
                    Solis Chirino Group
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#858A8F] mt-1 font-semibold">
                    Douglas Elliman Real Estate
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-6 bg-[#F5F2EC] border border-[#DDD8D0] flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#B39A78] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1726]">
                        Office Location
                      </h4>
                      <p className="text-sm text-[#858A8F] mt-0.5">Miami, Florida</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5F2EC] border border-[#DDD8D0] flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#B39A78] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1726]">
                        Direct Telephone
                      </h4>
                      <a
                        href={BUSINESS_INFO.phoneTel}
                        className="text-sm font-semibold text-[#0B1726] hover:text-[#B39A78] transition-colors cursor-pointer mt-0.5 block"
                      >
                        {BUSINESS_INFO.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="p-6 bg-[#F5F2EC] border border-[#DDD8D0] flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#B39A78] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#0B1726]">
                        Electronic Mail
                      </h4>
                      <a
                        href={BUSINESS_INFO.emailMailto}
                        className="text-sm font-semibold text-[#0B1726] hover:text-[#B39A78] transition-colors cursor-pointer mt-0.5 block break-all"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#0B1726] text-[#FFFFFF] border border-[#13263A] space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D8C7AE]">
                    Follow On Social Media
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={BUSINESS_INFO.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#13263A] hover:bg-[#D8C7AE] hover:text-[#0B1726] text-xs font-semibold tracking-wider uppercase flex items-center gap-2 border border-[#DDD8D0]/10 transition-colors cursor-pointer"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                    <a
                      href={BUSINESS_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#13263A] hover:bg-[#D8C7AE] hover:text-[#0B1726] text-xs font-semibold tracking-wider uppercase flex items-center gap-2 border border-[#DDD8D0]/10 transition-colors cursor-pointer"
                    >
                      <Instagram className="w-4 h-4" /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
