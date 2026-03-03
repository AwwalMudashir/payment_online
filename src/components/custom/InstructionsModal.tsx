import React from "react";
import Modal from "./Modal";
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
    <Modal isOpen={isOpen} title="Please read the instructions Carefully." onClose={onClose} size="md">
      <div className="space-y-6 text-sm text-blue-900">
        <section className="space-y-3">
          <p className="font-semibold">1. If you have an S-TIN:</p>
          <p className="text-gray-600">
            Ensure the number
            is the same as the one on your tax documents.
          </p>
          <Button
            variant="default"
            onClick={onContinueWithStin}
          >
            Continue with S-TIN
          </Button>
        </section>

        <section className="space-y-3">
          <p className="font-semibold">2. If you do not have an S-TIN:</p>
          <p className="text-gray-600">
            Please make sure
            the information is accurate so your receipt can be issued immediately.
          </p>
          <Button
            variant="secondary"
            onClick={onContinueWithoutStin}
          >
            Continue without an S-TIN
          </Button>
        </section>
      </div>
    </Modal>
  );
};

export default InstructionsModal;
