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
      titleArea={
        <div>
          <p className="text-lg font-semibold text-green-800">
            Enter Transaction Ref Number
          </p>
          <p className="text-xs font-medium text-red-600 mt-1">
            Check your email for your transaction reference number
          </p>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={reference}
          onChange={(event) => setReference(event.target.value)}
          placeholder="Enter transaction reference"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          required
        />
        <div className="flex justify-end">
          <Button type="submit" variant="secondary">
            Query
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckStatusModal;
