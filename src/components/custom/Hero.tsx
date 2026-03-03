import React, { useState } from "react";
import HeroCard from "./HeroCard";
import ContactCard from "./ContactCard";
import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  IdentificationIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import PayerIdModal from "./PayerIdModal";
import AssessmentModal from "./AssessmentModal";
import InstructionsModal from "./InstructionsModal";
import ReceiptDetailsModal from "./ReceiptDetailsModal";
import CheckStatusModal from "./CheckStatusModal";
import Button from "./Button";

const Hero: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const handleContinueWithStin = () => setActiveModal("payerIdSupply");
  const handleContinueWithoutStin = () => setActiveModal("receiptForm");

  const payerModalTitle =
    activeModal === "payerIdSupply" ? "Supply S-TIN" : undefined;

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      
      {/* Top Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />

      {/* HERO HEADER */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-6">
          Fast • Secure • Reliable
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Revenue Payments <span className="text-blue-700">Made Easy</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Pay your taxes, rates, fees and levies securely from anywhere —
          simple process, instant confirmation.
        </p>
      </div>

      {/* SERVICES CARDS */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <HeroCard
          title="PAYER ID"
          description="PAYE, WHT, and Back Duty Only"
          borderColorClass="border-orange-500"
          iconBgClass="bg-orange-100"
          iconColorClass="text-orange-600"
          icon={IdentificationIcon}
          onLinkClick={() => openModal("payerId")}
        />

        <HeroCard
          title="ASSESSMENT / PAYMENT CODE"
          description="Assessment-Based Payments Only"
          borderColorClass="border-blue-500"
          iconBgClass="bg-blue-100"
          iconColorClass="text-blue-600"
          icon={DocumentTextIcon}
          onLinkClick={() => openModal("assessment")}
        />

        <HeroCard
          title="PAYER NAME"
          description="Other Payments"
          borderColorClass="border-green-500"
          iconBgClass="bg-green-100"
          iconColorClass="text-green-600"
          icon={UserIcon}
          onLinkClick={() => openModal("instructions")}
        />
      </div>

      {/* CTA SECTION */}
      <div className="mt-16 flex justify-center">
        <Button
          type="button"
          variant="default"
          className="px-10 py-6 text-lg rounded-xl bg-green-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          onClick={() => openModal("checkStatus")}
        >
          Check Payment Status
        </Button>
      </div>

      {/* CONTACT SECTION */}
      <div className="mt-24 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600">
            Need assistance? Our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactCard
            icon={PhoneIcon}
            title="Call Us"
            info="090-456-606-63"
          />

          <ContactCard
            icon={EnvelopeIcon}
            title="Email Us"
            info="customercare@icmaservices.com"
          />

          <ContactCard
            icon={ClockIcon}
            title="Open Hours"
            info="Mon - Fri | 9:00AM - 05:00PM"
          />
        </div>
      </div>

      {/* MODALS */}
      <PayerIdModal
        isOpen={activeModal === "payerId" || activeModal === "payerIdSupply"}
        onClose={closeModal}
        title={payerModalTitle}
      />

      <AssessmentModal
        isOpen={activeModal === "assessment"}
        onClose={closeModal}
      />

      <InstructionsModal
        isOpen={activeModal === "instructions"}
        onClose={closeModal}
        onContinueWithStin={handleContinueWithStin}
        onContinueWithoutStin={handleContinueWithoutStin}
      />

      <ReceiptDetailsModal
        isOpen={activeModal === "receiptForm"}
        onClose={closeModal}
      />

      <CheckStatusModal
        isOpen={activeModal === "checkStatus"}
        onClose={closeModal}
      />
    </section>
  );
};

export default Hero;