import React from "react";

const partnerLogos: { src: string; alt: string }[] = [
  { src: "/Mastercard.webp", alt: "Mastercard logo" },
  { src: "/verve.png", alt: "Verve logo" },
  { src: "/visa.png", alt: "Visa logo" },
  { src: "/xpress.png", alt: "Xpress logo" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
        {partnerLogos.map((logo) => (
          <div
            key={logo.src}
            className="flex-1 min-w-[120px] flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain opacity-80"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
