import React from "react";
import LegacyModal from "./LegacyModal";
import Button from "./Button";

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueWithStin: () => void;
  onContinueWithoutStin: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onClose,
  onContinueWithStin,
  onContinueWithoutStin,
}) => {
  return (
    <LegacyModal isOpen={isOpen} title="Please read the instructions Carefully." onClose={onClose}>
      <div className="space-y-6 text-sm text-gray-800">
        <section className="space-y-2">
          <h3 className="font-semibold text-lg">Have an S-TIN?</h3>
          <p className="text-gray-600">Make sure it matches your tax documents.</p>
          <Button
            variant="default"
            onClick={onContinueWithStin}
            className="w-full"
          >
            Continue with S-TIN
          </Button>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold text-lg">No S-TIN?</h3>
          <p className="text-gray-600">Enter accurate details to get an immediate receipt.</p>
          <Button
            variant="secondary"
            onClick={onContinueWithoutStin}
            className="w-full"
          >
            Continue without an S-TIN
          </Button>
        </section>
      </div>
    </LegacyModal>
  );
};

export default InstructionsModal;
