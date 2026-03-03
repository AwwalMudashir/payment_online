import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LegacyModal from "./LegacyModal";
import Button from "./Button";

interface PayerIdModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const PayerIdModal: React.FC<PayerIdModalProps> = ({
  isOpen,
  onClose,
  title = "Enter S-TIN value to continue",
}) => {
  const [payerId, setPayerId] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayerId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Future: send to API or router. For now, just close the modal.
    onClose();
  };

  return (
    <LegacyModal isOpen={isOpen} onClose={onClose} title={title}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="payerId"
            name="payerId"
            value={payerId}
            onChange={handleChange}
            placeholder="Enter value to search"
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <Button type="submit" variant="default" className="inline-flex items-center justify-center gap-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
            Search
          </Button>
        </div>
      </form>
    </LegacyModal>
  );
};

export default PayerIdModal;
