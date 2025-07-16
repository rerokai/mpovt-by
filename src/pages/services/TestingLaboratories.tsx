
import React from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/TestingLabs/HeroSection";
import LaboratoriesSection from "@/components/TestingLabs/LaboratoriesSection";
import AdvantagesSection from "@/components/TestingLabs/AdvantagesSection";
import DocumentsSection from "@/components/TestingLabs/DocumentsSection";
import ContactSection from "@/components/TestingLabs/ContactSection";

const TestingLaboratories = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LaboratoriesSection />
      <AdvantagesSection />
      <DocumentsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default TestingLaboratories;
