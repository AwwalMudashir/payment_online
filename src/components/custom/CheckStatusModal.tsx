import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface CheckStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckStatusModal: React.FC<CheckStatusModalProps> = ({ isOpen, onClose }) => {
  const [reference, setReference] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
    >
      <div>
        <p className="text-lg font-semibold text-green-800">
          Enter Transaction Ref Number
        </p>
        <p className="text-xs font-medium text-red-600 mt-1">
          Check your email for your transaction reference number
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          value={reference}
          onChange={(event) => setReference(event.target.value)}
          placeholder="Transaction reference"
          className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <div className="flex justify-end">
          <Button type="submit" variant="secondary" className="px-6 py-2">
            Query
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckStatusModal;
