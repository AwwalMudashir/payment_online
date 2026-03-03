import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface LegacyModalProps {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  closeButtonClassName?: string;
  contentClassName?: string;
  dialogClassName?: string;
  titleArea?: React.ReactNode;
}

const LegacyModal: React.FC<LegacyModalProps> = ({
  isOpen,
  title = "",
  onClose,
  children,
  headerClassName = "bg-white border-b border-gray-100",
  titleClassName = "text-xl font-semibold text-blue-900",
  closeButtonClassName = "text-blue-900 hover:bg-gray-100",
  contentClassName = "px-6 py-6 bg-gray-50",
  dialogClassName = "w-full max-w-lg",
  titleArea,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 sm:px-6 py-10">
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
        onClick={onClose}
      />

      <div
        className={`relative ${dialogClassName} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slide-down`}
      >
        <div
          className={`flex items-center justify-between px-6 py-4 ${headerClassName}`}
        >
          {titleArea ?? <h2 className={titleClassName}>{title}</h2>}
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className={`rounded-full p-1.5 ${closeButtonClassName}`}
          >
            <XMarkIcon className="w-5 h-5 cursor-pointer" />
          </button>
        </div>

        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

export default LegacyModal;