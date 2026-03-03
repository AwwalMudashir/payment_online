import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 sm:px-10 lg:px-20 py-4 bg-gray-50/90 backdrop-blur-md border-b border-gray-100">
        <img
          src="/StateLogo.png"
          alt="State Logo"
          className="w-36 max-w-[150px]"
        />

        <a
          href="https://selfservice.deltairs.com/"
          className="hidden lg:inline-flex bg-green-700 rounded-lg py-2 px-5 text-white font-medium text-lg hover:bg-green-600 transition-colors"
        >
          Self-Service
        </a>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={toggleMenu}
          className="cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-blue-900 lg:hidden"
        >
          <Bars3Icon className="w-7 h-7 cursor-pointer" />
        </button>
      </div>

      {/* Overlay sits between the drawer and main content so the navbar stays clickable. */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity cursor-pointer duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 z-40 h-full w-[70vw] max-w-sm bg-white shadow-xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <p className="text-blue-900 font-semibold text-lg">Menu</p>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="rounded-md p-2 text-blue-900 hover:bg-gray-100"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6 text-blue-900">
          <a
            href="https://selfservice.deltairs.com/"
            className="bg-green-700 text-white text-center rounded-lg py-3 font-medium hover:bg-green-600 transition-colors"
            onClick={closeMenu}
          >
            Self-Service
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
