import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LegacyModal from "./LegacyModal";
import Button from "./Button";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AssessmentModal: React.FC<AssessmentModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <LegacyModal isOpen={isOpen} onClose={onClose} title="Input Assessment or Payment Code">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="assessmentCode"
            name="assessmentCode"
            value={code}
            onChange={(event) => setCode(event.target.value)}
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

export default AssessmentModal;
