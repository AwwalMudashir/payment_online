import React, { useState } from "react";
import HeroCard from "./HeroCard";
import ContactCard from "./ContactCard";
import { PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";
import PayerIdModal from "./PayerIdModal";
import AssessmentModal from "./AssessmentModal";
import InstructionsModal from "./InstructionsModal";
import ReceiptDetailsModal from "./ReceiptDetailsModal";
import CheckStatusModal from "./CheckStatusModal";
import Button from "./Button";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: any;
    }
  }
}

const Hero: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const handleContinueWithStin = () => setActiveModal("payerIdSupply");
  const handleContinueWithoutStin = () => setActiveModal("receiptForm");

  const payerModalTitle =
    activeModal === "payerIdSupply" ? "Supply S-TIN" : undefined;

  return (
    <section className="bg-gray-50 px-6 sm:px-10 lg:px-20 pt-28 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl text-blue-900 font-bold leading-tight mt-6 sm:mt-8 lg:-mt-4 xl:-mt-6">
          Revenue Payments Made Easy
        </h1>
      </div>

      <marquee
        behavior=""
        direction=""
        className="text-green-500 mt-6 mb-6 text-sm"
        scrollamount="8"
      >
        PAY YOUR TAXES, RATES, FEES, AND LEVIES
      </marquee>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <HeroCard
          title="PAYER ID"
          description="(PAYE, WHT, and Back Duty Only)"
          borderColorClass="border-b-orange-400"
          iconBgClass="bg-orange-300"
          iconColorClass="text-orange-600"
          iconSizeClass="h-10 w-10"
          hoverClass="hover:bg-orange-400"
          onLinkClick={() => openModal("payerId")}
        />

        <HeroCard
          title="ASSESSMENT or PAYMENT CODE"
          description="(Assessment-Based Payments Only)"
          borderColorClass="border-b-blue-400"
          iconBgClass="bg-blue-300"
          iconColorClass="text-blue-700"
          iconSizeClass="h-10 w-10"
          hoverClass="hover:bg-blue-400"
          onLinkClick={() => openModal("assessment")}
        />

        <HeroCard
          title="PAYER NAME"
          description="(Other Payments)"
          borderColorClass="border-b-green-400"
          iconBgClass="bg-green-300"
          iconColorClass="text-green-700"
          iconSizeClass="h-10 w-10"
          hoverClass="hover:bg-green-400"
          onLinkClick={() => openModal("instructions")}
        />
      </div>

      {/* Check Pay ment status */}
      <div className="flex justify-center">
        <Button
          type="button"
          variant="default"
          className="mt-12"
          onClick={() => openModal("checkStatus")}
        >
          Check Payment Status
        </Button>
      </div>

      {/* Contact us */}
      <div className="pb-4">
        <h1 className="text-3xl text-blue-900 text-center font-bold mt-12 mb-6">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ContactCard icon={PhoneIcon} title="Call Us" info="090-456-606-63" />

          <ContactCard
            icon={EnvelopeIcon}
            title="Email Us"
            info="customercare@icmaservices.com"
          />

          <ContactCard
            icon={ClockIcon}
            title="Open Hours"
            info="Mon - Fri|9:00AM - 05:00PM"
          />
        </div>
      </div>
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
