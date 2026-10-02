import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/assets';
import { CornerButton } from '../components/ui/CornerButton';
import { LiquidText } from '../components/ui/LiquidText';

interface FAQProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export const FAQ: React.FC<FAQProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = ['All', 'Buying', 'Selling', 'Relocation & Miami', 'Advisory & Process'];

  const allFaqs = [
    {
      category: 'Buying',
      q: 'How does Solis Chirino Group assist prospective buyers in Miami?',
      a: 'We provide end-to-end buyer representation, beginning with an initial consultation to clarify your architectural preferences, lifestyle priorities, and budget parameters. We conduct tailored market searches, coordinate private viewings, structure competitive offers, and manage due diligence through closing.',
    },
    {
      category: 'Buying',
      q: 'Can you assist with private or off-market property searches?',
      a: 'Yes. Leveraging our relationships within the Douglas Elliman network and local Miami market connections, we actively identify private opportunities and off-market inventory that may not be publicly syndicated.',
    },
    {
      category: 'Selling',
      q: 'What is the marketing strategy when listing with Solis Chirino Group?',
      a: 'We position luxury residences with editorial-grade architectural photography, tailored digital campaigns, and targeted outreach across the Douglas Elliman national and international network to engage qualified prospective buyers.',
    },
    {
      category: 'Selling',
      q: 'How do you determine the recommended positioning for a property?',
      a: 'We conduct a comprehensive comparative market evaluation taking into account recent sales, architectural uniqueness, spatial condition, neighborhood momentum, and prevailing buyer demographics in Miami.',
    },
    {
      category: 'Relocation & Miami',
      q: 'Do you work with out-of-state or international buyers moving to South Florida?',
      a: 'Absolutely. A substantial portion of our advisory involves assisting domestic and international clients relocating to Miami. We provide high-resolution virtual walkthroughs, neighborhood overviews, and coordinated viewing itineraries.',
    },
    {
      category: 'Relocation & Miami',
      q: 'Which Miami neighborhoods and areas do you serve?',
      a: 'Solis Chirino Group serves premier residential areas across Miami, Florida, including waterfront enclaves, coastal communities, modern suburban retreats, and central luxury towers.',
    },
    {
      category: 'Advisory & Process',
      q: 'How do I schedule a confidential consultation?',
      a: 'You can request a consultation through our website form, call us directly at +1 (786) 253-7653, or send an email to mario.chirino@elliman.com. We respond promptly to arrange an in-person or virtual discussion.',
    },
    {
      category: 'Advisory & Process',
      q: 'What is the benefit of the Douglas Elliman Real Estate affiliation?',
      a: 'Douglas Elliman is one of the nation’s premier independent residential brokerages with an extensive luxury footprint. This affiliation empowers our clients with unrivaled market reach, institutional backing, and collaborative access to buyers across primary feeder markets.',
    },
  ];

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className="w-full bg-[#F5F2EC] text-[#0B1726]">
      {/* Header */}
      <section className="bg-[#0B1726] text-[#FFFFFF] py-20 lg:py-28 border-b border-[#13263A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8C7AE] font-semibold">
              <span>Client Guidance</span>
              <span aria-hidden="true">·</span>
              <span>Miami, Florida</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-light text-[#FFFFFF] leading-tight">
              <LiquidText
                text="Frequently Asked Questions"
                as="span"
                highlightWord="Questions"
                highlightClass="text-[#D8C7AE]"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#DDD8D0] font-light leading-relaxed max-w-2xl">
              Answers to common inquiries regarding buying, selling, property viewings, and real estate advisory with Solis Chirino Group in Miami.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-[#FFFFFF] border-b border-[#DDD8D0] py-4 sticky top-[69px] z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {faqCategories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
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

          <div className="relative">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs bg-[#F5F2EC] border border-[#DDD8D0] text-[#0B1726] focus:outline-none focus:border-[#0B1726]"
            />
            <Search className="w-3.5 h-3.5 text-[#858A8F] absolute left-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openItems.includes(idx);
                return (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF] border border-[#DDD8D0] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(idx)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#B39A78] font-semibold block mb-1">
                          {faq.category}
                        </span>
                        <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-[#0B1726]">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#858A8F] transition-transform duration-300 mt-1 shrink-0 ${
                          isOpen ? 'rotate-180 text-[#0B1726]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#858A8F] leading-relaxed border-t border-[#DDD8D0]/40 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#FFFFFF] border border-[#DDD8D0] p-8">
              <HelpCircle className="w-8 h-8 text-[#858A8F] mx-auto mb-3" />
              <p className="text-sm text-[#0B1726] font-medium">No matching questions found.</p>
              <p className="text-xs text-[#858A8F] mt-1">
                Try searching with a different phrase or select 'All'.
              </p>
            </div>
          )}

          {/* Need specific help */}
          <div className="mt-16 p-8 bg-[#FFFFFF] border border-[#DDD8D0] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-serif-luxury text-[#0B1726]">
                Have a Question Not Listed Here?
              </h4>
              <p className="text-xs sm:text-sm text-[#858A8F] mt-1">
                Our team is available to discuss your specific circumstances and answer your questions directly.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <CornerButton
                variant="primary"
                size="md"
                onClick={onOpenConsultation}
              >
                Ask a Question
              </CornerButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
