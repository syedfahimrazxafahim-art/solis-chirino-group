import React, { useState, useEffect } from 'react';
import { ALL_PROPERTY_IMAGES, PropertyImage, BUSINESS_INFO } from './data/assets';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ImageLightboxModal } from './components/ui/ImageLightboxModal';
import { ConsultationModal } from './components/ui/ConsultationModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Properties } from './pages/Properties';
import { Services } from './pages/Services';
import { Buy } from './pages/Buy';
import { Sell } from './pages/Sell';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedImage, setSelectedImage] = useState<PropertyImage | null>(null);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [inquiryProperty, setInquiryProperty] = useState<PropertyImage | null>(null);

  // Scroll to top on navigation
  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (property?: PropertyImage) => {
    if (property) {
      setInquiryProperty(property);
    } else {
      setInquiryProperty(null);
    }
    setConsultationOpen(true);
  };

  const handleSelectImage = (img: PropertyImage) => {
    setSelectedImage(img);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EC] text-[#0B1726]">
      {/* Top Navigation Bar */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'about' && (
          <About
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'properties' && (
          <Properties
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'services' && (
          <Services
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'buy' && (
          <Buy
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'sell' && (
          <Sell
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'gallery' && (
          <Gallery
            onNavigate={handleNavigate}
            onSelectImage={handleSelectImage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'faq' && (
          <FAQ
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {activePage === 'contact' && (
          <Contact
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Lightbox Inspector for Property Images */}
      <ImageLightboxModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onInquire={(img) => {
          setSelectedImage(null);
          handleOpenConsultation(img);
        }}
      />

      {/* Consultation Scheduling Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        selectedProperty={inquiryProperty}
      />
    </div>
  );
}
