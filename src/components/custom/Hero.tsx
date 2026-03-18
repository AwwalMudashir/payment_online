import React, { useState } from "react";
import HeroCard from "./HeroCard";
import { IdentificationIcon, DocumentTextIcon, UserIcon } from "@heroicons/react/24/outline";
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
    <section className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-12 px-6 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* Top Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl opacity-25 -z-10" />

      {/* HERO HEADER */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-0.5 text-sm font-medium bg-blue-100 text-blue-700 rounded-full mb-4">
          Fast • Secure • Reliable
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Revenue Payments <span className="text-blue-700">Made Easy</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base leading-relaxed">
          Pay your taxes, rates, fees and levies securely from anywhere —
          simple process, instant confirmation.
        </p>
      </div>

      {/* SERVICES CARDS */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      <div className="mt-8 flex justify-center">
        <Button
          type="button"
          variant="default"
          className="px-6 py-3 text-base rounded-lg bg-green-700 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          onClick={() => openModal("checkStatus")}
        >
          Check Payment Status
        </Button>
      </div>
      {/* Compact contact hint (moved to footer for details) */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Need help? See contact details in the footer below.
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