import React from "react";
import InfoStrip from "./InfoStrip";

const partnerLogos: { src: string; alt: string }[] = [
  { src: "/Mastercard.webp", alt: "Mastercard" },
  { src: "/verve.png", alt: "Verve" },
  { src: "/visa.png", alt: "Visa" },
  { src: "/xpress.jpg", alt: "Xpress Payment" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-700/95 text-gray-300 pt-8 pb-6 px-6 sm:px-8 lg:px-16">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto">

        <div className=" mb-8">
          {/* <h3 className="text-lg text-left mb-4 font-semibold text-white tracking-wide">
            Contact Us
          </h3> */}
          {/* <p className="mt-1 text-xs text-gray-200">
            Secure transactions powered by trusted financial providers.
          </p>
          <div className="mt-3 text-xs text-gray-200">
            Contact: 090-456-606-63 • customercare@icmaservices.com
          </div> */}
          <InfoStrip items={[
            { label: "Contact", value: "090-456-606-63" },
            { label: "Email", value: "customercare@icmaservices.com" },
            { label: "Open Hours", value: "Mon - Fri | 9:00AM - 05:00PM" }
          ]}></InfoStrip>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {partnerLogos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center group"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                className="h-8 w-auto object-contain transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-200">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Delta State Internal Revenue Service
          </span>
          . All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;